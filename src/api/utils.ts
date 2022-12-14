import { format, isMatch, parse } from 'date-fns';

import Compressor from 'compressorjs';
import { toast } from 'react-toastify';

export const logout = () => {
  window.location.href = `${getLoginBaseUrl()}/destroySession`;
};

export const refreshToken = () => {
  window.location.href = `${getLoginBaseUrl()}/refreshToken?modulo=${getModulo()}`;
};

export const goToHome = () => {
  window.location.href = `${window.location.origin}${getScope()}`;
};

export const getModulo = () => {
  return process.env.NEXT_PUBLIC_MODULO_SLUG;
};

export const getScope = () => {
  return process.env.NEXT_PUBLIC_SCOPE;
};

export const hasNotification = () => {
  return process.env.NEXT_PUBLIC_HAS_NOTIFICATION === 'true';
};

export const getApiBaseUrl = () => {
  return `${process.env.NEXT_PUBLIC_BASE_URL_BACK}${getScope()}${
    process.env.NEXT_PUBLIC_BASE_URL_POS
  }`;
};

export const getLoginBaseUrl = () => {
  return `${process.env.NEXT_PUBLIC_BASE_URL_LOGIN}`;
};

export const getLoginApiBaseUrl = () => {
  return `${process.env.NEXT_PUBLIC_BASE_URL_LOGIN_BACK}${process.env.NEXT_PUBLIC_BASE_URL_POS}`;
};

export const generateParamStringFromObj = (paramObj) => {
  const paramArray = Object.entries(paramObj).reduce((acc, arrayItem) => {
    if (arrayItem[1]) {
      return `${acc}${arrayItem[0]}=${arrayItem[1]}&`;
    }
    return acc;
  }, '?');
  const queryParamObj = paramArray.slice(0, paramArray.length - 1); //remove o & no final
  return queryParamObj;
};

export const parseDate = (data: any, format: string) => {
  if (data) {
    return parse(data, format, new Date());
  }
  return data;
};

export const formatDate = (
  data: string,
  oldFormat: 'yyyy-MM-dd' | "yyyy-MM-dd'T'HH:mm:ss" = 'yyyy-MM-dd',
  newFormat = 'dd/MM/yyyy'
) => {
  if (data) {
    if (!isMatch(data, newFormat)) {
      const newDate = parseDate(data, oldFormat);
      return format(newDate.valueOf(), newFormat);
    }
    return data;
  }
  return data;
};

export const normalizeString = (value: string) => {
  return typeof value === 'string'
    ? value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    : value;
};

export const currencyMask = (value: number) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export const customMask = (str: string, pattern: string) => {
  let i = 0;
  return str
    ? pattern.replace(/#/g, () => {
        const char = str[i] ? str[i] : ' ';
        i++;
        return char;
      })
    : '';
};

export const convertArrayToPickerItem = (payload) => {
  const totalPages: Array<any> = [];
  for (let i = 0; i < payload.length / 30; i++) {
    totalPages.push({
      title: `Pág. ${i + 1}`,
      value: i,
    });
  }
  return totalPages;
};

export const newToast = (
  message: string,
  type: 'SUCCESS' | 'ERROR' | 'WARNING' | '' = '',
  mobile = false
) => {
  const config = {
    position: mobile ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_CENTER,
  };
  switch (type) {
    case 'SUCCESS':
      toast.success(message, config);
      return;
    case 'ERROR':
      toast.error(message, config);
      return;
    case 'WARNING':
      toast.warning(message, config);
      return;
    default:
      toast(message, config);
      return;
  }
};

export const base64ToUint8Array = (base64) => {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export const fileToBase64 = (
  file: File | Blob
): Promise<{ metadata: any; base64: any }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result?.toString();
      const dividedResult = result?.split(',');
      if (dividedResult) {
        const metadata = dividedResult[0];
        const base64 = dividedResult[1];
        resolve({ metadata, base64 });
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

export const fileToImageSizes = (
  file: File | Blob
): Promise<{ width: any; height: any }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (f) => {
      const image = new Image();
      if (f.target) {
        image.src = f.target?.result?.toString() || '';
        image.onload = () => {
          resolve({
            width: image?.naturalWidth?.toString(),
            height: image?.naturalHeight?.toString(),
          });
        };
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

export const convertFilesToJson = async (files: File[]) => {
  const jsonFiles = [];
  await Promise.all(
    files?.map(async (file) => {
      await new Promise((resolve) => {
        new Compressor(file, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.8,
          success: async (compFile) => {
            const { metadata, base64 } = await fileToBase64(compFile);
            const { width, height } = await fileToImageSizes(compFile);
            jsonFiles.push({
              lastModified: file.lastModified,
              name: file.name,
              size: compFile.size,
              type: file.type,
              webkitRelativePath: file.webkitRelativePath,
              width,
              height,
              metadata,
              base64,
            });
            resolve({});
          },
        });
      });
    })
  );
  return jsonFiles;
};

export const getAxiosPostErrors = (error) => {
  return error?.response?.data?.errors ? error.response.data.errors : [];
};

export const getAxiosGetErrors = (error) => {
  return error?.message ? error.message : 'General Error';
};

export const setCharAt = (str, index, chr) => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
};

export const onlyNumbers = (str) => {
  return typeof str === 'string' ? str?.toString()?.replace(/[^\d]+/g, '') : '';
};

export const generateRandomHexColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const generateDarkColorHex = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
};
