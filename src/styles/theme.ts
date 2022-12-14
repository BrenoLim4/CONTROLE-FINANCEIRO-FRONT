import { MantineThemeOverride } from '@mantine/core';
import { css } from '@emotion/react';

// const theme: MantineTheme = {
//   colors: {
//     darkGreen: '#1D5237',
//     lighterGreen: '#01853B',
//     darkRed: '#5f2120',
//     lighterRed: '#ef5350',
//     darkYellow: '#663c00',
//     lighterYellow: '#ff9800',
//     shadowColor: '#ababab',
//     whiteTransparent: '#ffffffdd',
//     gridItemHover: '#ccccccdd',
//     zebraOdd: '#dedededd',
//     warnYellow: '#E3B839',
//     warnYellowAlt: '#FADF4A',
//     grey: '#EBEBEB',
//     zebraEven: '#ffffffdd',
//     orange: '#FFA500',
//     soletoColor: '#373435',
//     pastelGreen: '#EDF7ED',
//     pastelRed: '#FDEDED',
//     pastelYellow: '#FFF4E5',
//     disabled: '#F5F5F5',
//   },
//   breakpoints: {
//     desktop: '800px',
//   },
//   transition: '.2s',
//   fontSize: '16px',
//   navWidth: '3.75rem',
//   navWidthFull: '16.25rem',
// };
const theme: MantineThemeOverride = {
  colors: {
    green: [
      '#EBFBEE',
      '#D3F9D8',
      '#B2F2BB',
      '#8CE99A',
      '#69DB7C',
      '#51CF66',
      '#40C057',
      '#37B24D',
      '#01853B', // lighterGreen
      '#1D5237', // darkGreen
    ],
    dark: [
      '#C1C2C5',
      '#A6A7AB', // shadowColor
      '#909296',
      '#5C5F66',
      '#373435', // soletoColor
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#ef5350', // lighterRed
      '#f03e3e',
      '#e03131',
      '#5f2120', // darkRed
    ],
    yellow: [
      '#fff9db',
      '#fff9db',
      '#fff3bf',
      '#ffec99',
      '#FADF4A', // warnYellowAlt
      '#ffd43b',
      '#E3B839', // warnYellow
      '#ff9800', // lighterYellow
      '#e67700',
      '#663c00', // darkYellow// darkYellow
    ],
  },
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
    md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
    lg: `#A6A7AB 2px 2px 10px`,
    xl: `#A6A7AB 4px 4px 10px`,
  },
  primaryColor: 'yellow',
  primaryShade: 6,
  defaultGradient: {
    from: 'green.9',
    to: 'green.8',
  },
};

// export const greenGradient = (theme) => `
//   linear-gradient(90deg, ${theme.colors.green[9]} 0%, ${theme.colors.green[8]} 85%)
// `;

export const yellowGradient = (theme) => `
  repeating-linear-gradient(45deg, ${theme.colors.yellow[5]}, ${theme.colors.yellow[5]} 10px, ${theme.colors.yellow[3]} 10px,  ${theme.colors.yellow[3]} 20px)
`;

export const customScroll = (theme) => css`
  &::-webkit-scrollbar-thumb {
    scroll-margin-bottom: 0.625rem;
    outline: 1px solid transparent;
    background-color: slategray;
    border-radius: 0.625rem;

    &:hover {
      background-color: ${theme.colors.yellow[5]};
    }
  }

  &::-webkit-scrollbar {
    outline: 1px solid transparent;
    width: 0.25rem;
    height: 0.25rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar-button {
    outline: 0px solid transparent;
  }
`;

export const invisibleScroll = (theme) => css`
  &::-webkit-scrollbar-thumb {
    scroll-margin-bottom: 0;
    outline: 0 solid transparent;
    background-color: transparent;

    &:hover {
      background-color: ${theme.colors.yellow[9]};
    }
  }

  &::-webkit-scrollbar {
    outline: 0 solid transparent;
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-button {
    outline: 0 solid transparent;
  }
`;

export const onDesktop = (theme) => `
  @media screen and (min-width: ${theme.breakpoints.sm}px)
`;

export const defaultTransition = `
  all .2s ease-in-out
`;

export const getCorrectHeightSize = () => {
  if (typeof window !== 'undefined') {
    return `${window.innerHeight}px`;
  } else {
    return '100vh';
  }
};

export default theme;
