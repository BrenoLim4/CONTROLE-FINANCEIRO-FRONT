import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPageName } from '@/redux/Session/actions';
import { RootState } from '@/redux/rootReducer';
import {
  startGetDespesas,
  startGetCategoriasDespesa,
  startGetStatusDespesa,
  startGetTiposDespesa,
  setDespesasPage,
  nextDespesasPage,
  previousDespesasPage,
  clearFilters,
  clearDespesas,
  startDoReportDespesasPdf,
  startDoReportDespesasExcel,
  startGetListSetores,
} from '@/redux/Despesas/Despesas/actions';
import Head from 'next/head';
import Card from '@/components/Card';
import { Row } from '@/components/Position';
import TxtInput from '@/components/TxtInput';
import Btn from '@/components/Btn';
import theme from '@/styles/theme';
import { FcSearch } from 'react-icons/fc';
import { format } from 'date-fns';
import MonthPicker from '@/components/MonthPicker';
import Picker from '@/components/Picker';
import Table from '@/components/Table';
import DynamicColumn from '@/components/DynamicColumn';
import { AiOutlineClear } from 'react-icons/ai';
import { Despesa } from '@/redux/Despesas/Despesas/interfaces';
import { startDoReportEmpenhosExcel } from '@/redux/Despesas/Empenhos/actions';
const DespesasLista: NextPage = () => {
  const dispatch = useDispatch();

  const {
    despesas,
    loadingDespesas,
    currentPageDespesas,
    statusList,
    tiposList,
    categoriasList,
    filters,
    setoresList,
  } = useSelector((state: RootState) => state.Despesas.despesas);

  const [nrProtocolo, setNrProtocolo] = useState(filters?.nrProtocolo);
  const [idCategoria, setIdCategoria] = useState(filters?.idCategoria);
  const [idTipoDespesa, setIdTipoDespesa] = useState(filters?.idTipoDespesa);
  const [idStatus, setIdStatus] = useState(filters?.idStatus);
  const [periodo, setPeriodo] = useState(null);
  const [objeto, setObjeto] = useState(filters?.objeto);
  const [credor, setCredor] = useState(filters?.credor);
  const [setorDespacho, setSetorDespacho] = useState(filters?.setorDespacho);
  const [digital, setDigital] = useState(filters?.digital);

  useEffect(() => {
    dispatch(setPageName('Lista de Despesa'));
    dispatch(startGetCategoriasDespesa());
    dispatch(startGetStatusDespesa());
    dispatch(startGetTiposDespesa());
    dispatch(startGetListSetores());
  }, []);

  useEffect(() => {
    const credorFormat = credor
      ?.replaceAll('.', '')
      .replaceAll('-', '')
      .replaceAll('/', '')
      .toUpperCase();
    setCredor(credorFormat);
  }, [credor]);

  const [visible, setVisible] = useState({
    nrProtocolo: true,
    dataProtocolo: true,
    credor: true,
    objeto: true,
    status: true,
    valorTotal: true,
    totalEmpenhado: true,
    totalPago: true,
    anoMesReferencia: true,
    tipo: true,
    categoria: true,
    setorDespacho: true,
    digital: true,
  });

  const label = {
    nrProtocolo: 'Nº Protocolo',
    dataProtocolo: 'Dt. Protocolo',
    credor: 'Credor',
    objeto: 'Objeto',
    status: 'Status',
    valorTotal: 'Valor',
    totalEmpenhado: 'Empenhado',
    totalPago: 'Pago',
    anoMesReferencia: 'Período',
    tipo: 'Tipo',
    categoria: 'Categoria',
    setorDespacho: 'Setor Atual',
    digital: 'Digital',
  };

  const handleConsultar = (e) => {
    e.preventDefault();
    const anoMesReferencia = periodo ? format(periodo, 'MM/yyyy') : undefined;
    const sortColumns = [
      {
        property: 'dataProtocolo',
        direction: 'DESC',
      },
      {
        property: 'credorNome',
        direction: 'ASC',
      },
      {
        property: 'valorTotal',
        direction: 'DESC',
      },
    ];
    dispatch(
      startGetDespesas({
        size: 60,
        page: 2,
        // sortColumns,
        filtersJson: {
          nrProtocolo,
          idCategoria,
          idStatus,
          idTipoDespesa,
          anoMesReferencia,
          objeto,
          credor,
          setorDespacho,
          digital,
        },
      })
    );
  };

  const handleLimparFiltros = (e) => {
    e.preventDefault();
    dispatch(
      clearFilters({
        nrProtocolo: null,
        idCategoria: null,
        idTipoDespesa: null,
        idStatus: null,
        anoMesReferencia: null,
        objeto: null,
        credor: null,
        setorDespacho: null,
        digital: null,
      })
    );
    setSetorDespacho('');
    setNrProtocolo('');
    setCredor('');
    setPeriodo(null);
    setIdCategoria('');
    setIdStatus('');
    setIdTipoDespesa('');
    setObjeto('');
    setDigital(null);
    dispatch(clearDespesas());
  };

  function handleChangeColumnDinamic(value) {
    setVisible({ ...visible, [value]: !visible[value] });
  }

  const handleExportPdf = () => {
    const anoMesReferencia = periodo ? format(periodo, 'MM/yyyy') : undefined;
    dispatch(
      startDoReportDespesasPdf(
        {
          nrProtocolo,
          idCategoria,
          idStatus,
          idTipoDespesa,
          anoMesReferencia,
          objeto,
          credor,
          setorDespacho,
          digital,
        },
        visible
      )
    );
  };

  const handleExportExcel = () => {
    const anoMesReferencia = periodo ? format(periodo, 'MM/yyyy') : undefined;
    dispatch(
      startDoReportDespesasExcel(
        {
          nrProtocolo,
          idCategoria,
          idStatus,
          idTipoDespesa,
          anoMesReferencia,
          objeto,
          credor,
          setorDespacho,
          digital,
        },
        visible
      )
    );
  };

  return (
    <>
      <Head>
        <title>Consultar Despesas</title>
      </Head>
      <Card isForm title="Filtrar" overflowingContent>
        <Row>
          <TxtInput
            placeholder="nr protocolo"
            value={nrProtocolo}
            setValue={setNrProtocolo}
          />
          <TxtInput placeholder="Credor" value={credor} setValue={setCredor} />
          <MonthPicker
            label="Período"
            onChange={setPeriodo}
            selected={periodo}
          />
        </Row>
        <Row>
          <Picker
            items={statusList}
            titleParams={['id', 'descricao']}
            valueParam="id"
            value={idStatus}
            setValue={setIdStatus}
            placeholder="Status"
            size="large"
          />
          <Picker
            items={categoriasList}
            titleParams={['id', 'descricao']}
            valueParam="id"
            value={idCategoria}
            setValue={setIdCategoria}
            placeholder="Categoria"
            size="large"
          />
          <Picker
            items={tiposList}
            titleParams={['id', 'descricao']}
            valueParam="id"
            value={idTipoDespesa}
            setValue={setIdTipoDespesa}
            placeholder="Tipo Despesa"
            size="large"
          />
        </Row>
        <Row>
          <Picker
            items={[
              { label: 'Digital', value: true },
              { label: 'Física', value: false },
            ]}
            placeholder="Digital"
            value={digital}
            setValue={setDigital}
            valueParam={'value'}
            titleParams={['label']}
            size="large"
          />
          <Picker
            items={setoresList}
            value={setorDespacho}
            setValue={setSetorDespacho}
            titleParams={['sigla', 'descricao']}
            valueParam={'sigla'}
            placeholder="Setor Atual"
            size="large"
          />
          {/* <TxtInput
            placeholder="Setor"
            value={setorDespacho}
            setValue={setSetorDespacho}
          /> */}
          <TxtInput placeholder="Objeto" value={objeto} setValue={setObjeto} />
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
      </Card>
      <DynamicColumn
        objVisible={visible}
        objLabel={label}
        handleChangeColumnDinamic={handleChangeColumnDinamic}
      />
      <Table
        items={despesas}
        loading={loadingDespesas}
        emptyText="Lista não possuí nenhuma Despesa"
        allowDownload
        handleReportPDF={handleExportPdf}
        handleReportExcel={handleExportExcel}
        pagination={{
          currentPage: currentPageDespesas,
          setPage: (value) => dispatch(setDespesasPage(value)),
          nextPage: () => dispatch(nextDespesasPage()),
          previousPage: () => dispatch(previousDespesasPage()),
        }}
        linkPath={(despesa: Despesa) =>
          `./detalhes/?nrProtocolo=${despesa.nrProtocolo}`
        }
        columns={[
          {
            header: label['nrProtocolo'],
            data: 'nrProtocolo',
            type: 'text',
            visible: visible['nrProtocolo'],
            orderable: true,
          },
          {
            header: label['dataProtocolo'],
            data: 'dataProtocolo',
            type: 'date',
            visible: visible['dataProtocolo'],
            orderable: true,
          },
          {
            header: label['credor'],
            data: 'credorNome',
            type: 'longText',
            visible: visible['credor'],
            orderable: true,
          },
          {
            header: label['objeto'],
            data: 'objeto',
            type: 'longText',
            visible: visible['objeto'],
            orderable: true,
          },
          {
            header: label['status'],
            data: 'status',
            type: 'longText',
            visible: visible['status'],
            color: 'statusCor',
            orderable: true,
          },
          {
            header: label['valorTotal'],
            data: 'valorTotal',
            type: 'money',
            visible: visible['valorTotal'],
            orderable: true,
          },
          {
            header: label['totalEmpenhado'],
            data: 'totalEmpenhado',
            type: 'money',
            visible: visible['totalEmpenhado'],
            orderable: true,
          },
          {
            header: label['totalPago'],
            data: 'totalPago',
            type: 'money',
            visible: visible['totalPago'],
            orderable: true,
          },
          {
            header: label['anoMesReferencia'],
            data: 'anoMesReferencia',
            type: 'text',
            visible: visible['anoMesReferencia'],
            orderable: true,
          },
          {
            header: label['categoria'],
            data: 'categoria',
            type: 'longText',
            visible: visible['categoria'],
            orderable: true,
          },
          {
            header: label['tipo'],
            data: 'tipo',
            type: 'longText',
            visible: visible['tipo'],
            orderable: true,
          },
          {
            header: label['setorDespacho'],
            data: 'setorDespacho',
            type: 'text',
            visible: visible['setorDespacho'],
            orderable: true,
          },
          {
            header: label['digital'],
            data: 'digitalExtenso',
            type: 'text',
            visible: visible['digital'],
            orderable: true,
          },
        ]}
      />
    </>
  );
};

export default DespesasLista;
