import {
  clearEmpenhos,
  clearFilters,
  nextEmpenhosPage,
  previousEmpenhosPage,
  setEmpenhosPage,
  startGetEmpenhos,
  startGetFontesRecurso,
  startGetStatus,
  startDoReportEmpenhosPdf,
  startDoReportEmpenhosExcel,
} from '@/redux/Despesas/Empenhos/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { AiOutlineClear } from 'react-icons/ai';
import Btn from '@/components/Btn';
import Card from '@/components/Card';
import DynamicColumn from '@/components/DynamicColumn';
import { Empenho } from '@/redux/Despesas/Empenhos/interfaces';
import { FcSearch } from 'react-icons/fc';
import Head from 'next/head';
import type { NextPage } from 'next';
import Picker from '@/components/Picker';
import { RootState } from '@/redux/rootReducer';
import { Row } from '@/components/Position';
import Table from '@/components/Table';
import TxtInput from '@/components/TxtInput';
import { setPageName } from '@/redux/Session/actions';
import { useTheme } from 'styled-components';

const EmpenhosListar: NextPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    empenhos,
    loadingEmpenhos,
    currentPageEmpenhos,
    fontesRecurso,
    status,
    filters,
  } = useSelector((state: RootState) => state.Despesas.empenhos);

  const [numero, setNumero] = useState(filters.numero);
  const [exercicio, setExcercicio] = useState(filters.exercicio);
  const [numeroProtocolo, setNumeroProtocolo] = useState(
    filters.numeroProtocolo
  );
  const [credor, setCredor] = useState(filters.credor);
  const [fonteId, setFonteId] = useState(filters.fonteId);
  const [statusDescricao, setStatusDescricao] = useState(
    filters.statusDescricao
  );

  const [visible, setVisible] = useState({
    exercicio: true,
    numero: true,
    numeroProtocolo: true,
    razaoSocialCredor: true,
    fonte: true,
    valor: true,
    valorPago: true,
    saldo: true,
    dataEmissao: true,
    status: true,
  });

  const label = {
    exercicio: 'Exercício',
    numero: 'Número',
    numeroProtocolo: 'Protocolo',
    razaoSocialCredor: 'Credor',
    fonte: 'Fonte',
    valor: 'Valor',
    valorPago: 'Pago',
    saldo: 'Saldo',
    dataEmissao: 'Emissão',
    status: 'Status',
  };

  useEffect(() => {
    dispatch(setPageName('Consultar Empenhos'));
    dispatch(startGetFontesRecurso());
    dispatch(startGetStatus());
  }, []);

  useEffect(() => {
    const credorFormat = credor
      ?.replaceAll('.', '')
      .replaceAll('-', '')
      .replaceAll('/', '')
      .toUpperCase();
    setCredor(credorFormat);
  }, [credor]);

  function handleChangeColumnDinamic(value) {
    setVisible({ ...visible, [value]: !visible[value] });
  }

  const handleConsultar = () => {
    const filtros = {};
    if (numeroProtocolo) {
      filtros['numeroProtocolo'] = numeroProtocolo;
    }
    if (numero) {
      filtros['numero'] = numero;
    }
    if (exercicio) {
      filtros['exercicio'] = exercicio;
    }
    if (credor) {
      filtros['credor'] = credor;
    }
    if (fonteId) {
      filtros['fonteId'] = fonteId;
    }
    if (statusDescricao) {
      filtros['statusDescricao'] = statusDescricao;
    }
    dispatch(startGetEmpenhos(filtros));
  };

  const handleLimparFiltros = () => {
    dispatch(
      clearFilters({
        numero: null,
        exercicio: null,
        credor: null,
        fonteId: null,
        statusDescricao: null,
        numeroProtocolo: null,
      })
    );
    setNumero('');
    setCredor('');
    setNumeroProtocolo('');
    setExcercicio('');
    setFonteId('');
    setStatusDescricao('');
    dispatch(clearEmpenhos());
  };

  const handleExportPdf = () => {
    dispatch(
      startDoReportEmpenhosPdf(
        {
          numeroProtocolo,
          numero,
          exercicio,
          credor,
          fonteId,
          statusDescricao,
        },
        visible
      )
    );
  };

  const handleExportExcel = () => {
    dispatch(
      startDoReportEmpenhosExcel(
        {
          numeroProtocolo,
          numero,
          exercicio,
          credor,
          fonteId,
          statusDescricao,
        },
        visible
      )
    );
  };

  return (
    <>
      <Head>
        <title>Consultar Empenhos</title>
      </Head>
      <Card title="Filtros">
        <form>
          <Row>
            <TxtInput
              placeholder="Nº Protocolo"
              value={numeroProtocolo}
              setValue={setNumeroProtocolo}
            />
            <TxtInput
              placeholder="Credor (CNPJ/CPF/NOME)"
              value={credor}
              setValue={setCredor}
            />
            <TxtInput
              placeholder="Número"
              value={numero}
              setValue={setNumero}
            />
            <TxtInput
              type="number"
              placeholder="Exercício"
              value={exercicio}
              setValue={setExcercicio}
            />
            <div style={{ flexBasis: '100%', height: 0 }} />
          </Row>
          <Row>
            <Picker
              size="large"
              placeholder="Fonte Recurso"
              items={fontesRecurso}
              titleParams={['descricao']}
              valueParam={'id'}
              value={fonteId}
              setValue={setFonteId}
            />
            <Picker
              size="large"
              placeholder="Status"
              items={status}
              titleParams={['descricao']}
              valueParam={'descricao'}
              value={statusDescricao}
              setValue={setStatusDescricao}
            />
          </Row>
          <Row>
            <Btn
              backgroundColor={theme.colors.zebraOdd}
              backgroundHoverColor={theme.colors.shadowColor}
              clicked={handleConsultar}
              name={'Consultar'}
              icon={<FcSearch size={30} />}
            />
            <Btn
              backgroundColor={theme.colors.zebraOdd}
              backgroundHoverColor={theme.colors.shadowColor}
              clicked={handleLimparFiltros}
              name={'Limpar filtros'}
              icon={<AiOutlineClear size={30} />}
            />
          </Row>
        </form>
      </Card>

      <DynamicColumn
        objVisible={visible}
        objLabel={label}
        handleChangeColumnDinamic={handleChangeColumnDinamic}
      />

      <Table
        items={empenhos}
        loading={loadingEmpenhos}
        linkPath={(empenho: Empenho) => `./detalhes?id=${empenho.id}`}
        emptyText="Lista não possui Empenhos."
        allowDownload
        handleReportPDF={handleExportPdf}
        handleReportExcel={handleExportExcel}
        pagination={{
          currentPage: currentPageEmpenhos,
          setPage: (value) => dispatch(setEmpenhosPage(value)),
          nextPage: () => dispatch(nextEmpenhosPage()),
          previousPage: () => dispatch(previousEmpenhosPage()),
        }}
        columns={[
          {
            header: label['exercicio'],
            data: 'exercicio',
            type: 'text',
            visible: visible['numeroExercicio'],
            orderable: true,
          },
          {
            header: label['numero'],
            data: 'numero',
            type: 'text',
            visible: visible['numero'],
            orderable: true,
          },
          {
            header: label['numeroProtocolo'],
            data: 'numeroProtocolo',
            visible: visible['numeroProtocolo'],
            orderable: true,
          },
          {
            header: label['razaoSocialCredor'],
            data: 'razaoSocialCredor',
            type: 'longText',
            visible: visible['razaoSocialCredor'],
            orderable: true,
          },
          {
            header: label['status'],
            data: 'status',
            type: 'longText',
            visible: visible['status'],
            orderable: true,
          },
          {
            header: label['fonte'],
            data: 'fonteDescricao',
            type: 'longText',
            visible: visible['fonte'],
            orderable: true,
          },
          {
            header: label['valor'],
            data: 'valor',
            type: 'money',
            visible: visible['valor'],
            orderable: true,
          },
          {
            header: label['valorPago'],
            data: 'valorPago',
            type: 'money',
            visible: visible['valorPago'],
            orderable: true,
          },
          {
            header: label['saldo'],
            data: 'saldoAPagar',
            type: 'money',
            visible: visible['saldo'],
            orderable: true,
          },
          {
            header: label['dataEmissao'],
            data: 'dataEmissao',
            visible: visible['dataEmissao'],
            orderable: true,
          },
        ]}
      />
    </>
  );
};

export default EmpenhosListar;
