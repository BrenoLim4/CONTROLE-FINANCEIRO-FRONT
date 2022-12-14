import {
  clearFilters,
  clearPagamentos,
  nextPagamentosPage,
  previousPagamentosPage,
  setPagamentosPage,
  startGetPagamentos,
} from '@/redux/Despesas/Pagamentos/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { AiOutlineClear } from 'react-icons/ai';
import Btn from '@/components/Btn';
import Card from '@/components/Card';
import DynamicColumn from '@/components/DynamicColumn';
import { FcSearch } from 'react-icons/fc';
import Head from 'next/head';
import { NextPage } from 'next';
import { Pagamento } from '@/redux/Despesas/Pagamentos/interfaces';
import { RootState } from '@/redux/rootReducer';
import { Row } from '@/components/Position';
import Table from '@/components/Table';
import TxtInput from '@/components/TxtInput';
import { setPageName } from '@/redux/Session/actions';
import theme from '@/styles/theme';

const PagamentosListar: NextPage = () => {
  const dispatch = useDispatch();
  const { pagamentos, loadingPagamentos, currentPagePagamentos, filters } =
    useSelector((state: RootState) => state.Despesas.pagamentos);

  const [numero, setNumero] = useState(filters.numero);
  const [exercicio, setExcercicio] = useState(filters.exercicio);
  const [empenho, setEmpenho] = useState(filters.empenho);
  const [credor, setCredor] = useState(filters.credor);
  const [numeroProtocolo, setNumeroProtocolo] = useState(
    filters.numeroProtocolo
  );

  useEffect(() => {
    dispatch(setPageName('Consultar Pagamentos'));
  }, []);

  const [visible, setVisible] = useState({
    numero: true,
    exercicio: true,
    numeroNed: true,
    nomeCredor: true,
    natureza: false,
    efeito: false,
    dataEmissao: true,
    valor: true,
    protocolo: true,
    status: true,
  });

  const label = {
    numeroNed: 'Nº Empenho',
    natureza: 'Natureza',
    efeito: 'Efeito',
    dataEmissao: 'Emissão',
    valor: 'Valor',
    numero: 'Número',
    exercicio: 'Exercício',
    nomeCredor: 'Credor',
    protocolo: 'Protocolo',
    status: 'Status',
  };

  function handleChangeColumnDinamic(value) {
    setVisible({ ...visible, [value]: !visible[value] });
  }

  useEffect(() => {
    const credorFormat = credor
      ?.replaceAll('.', '')
      .replaceAll('-', '')
      .replaceAll('/', '')
      .toUpperCase();
    setCredor(credorFormat);
  }, [credor]);

  const handleConsultar = (e) => {
    e.preventDefault();
    dispatch(
      startGetPagamentos({
        numero,
        exercicio,
        empenho,
        numeroProtocolo,
        credor,
      })
    );
  };

  const handleLimparFiltros = (e) => {
    e.preventDefault();
    dispatch(
      clearFilters({
        numero: null,
        exercicio: null,
        empenho: null,
        numeroProtocolo: null,
        credor: null,
      })
    );
    setNumero('');
    setExcercicio('');
    setEmpenho('');
    setNumeroProtocolo('');
    setCredor('');
    dispatch(clearPagamentos());
  };

  return (
    <>
      <Head>
        <title>Consultar Pagamentos</title>
      </Head>
      <Card isForm title="Filtros">
        <Row>
          <TxtInput
            placeholder="Nº protocolo"
            value={numeroProtocolo}
            setValue={setNumeroProtocolo}
          />
          <TxtInput
            placeholder="Credor(CPF/CNPJ/NOME)"
            value={credor}
            setValue={setCredor}
          />
          <TxtInput placeholder="Número" value={numero} setValue={setNumero} />
          <TxtInput
            type="number"
            placeholder="Exercício"
            value={exercicio}
            setValue={setExcercicio}
          />
          <TxtInput
            placeholder="Nº Empenho"
            value={empenho}
            setValue={setEmpenho}
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
            type="button"
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
        items={pagamentos}
        loading={loadingPagamentos}
        linkPath={(pagamento: Pagamento) => `./detalhes?id=${pagamento.id}`}
        emptyText="Lista não possui nenhum Pagamento."
        pagination={{
          currentPage: currentPagePagamentos,
          setPage: (value) => dispatch(setPagamentosPage(value)),
          nextPage: () => dispatch(nextPagamentosPage()),
          previousPage: () => dispatch(previousPagamentosPage()),
        }}
        columns={[
          {
            header: label['numero'],
            data: 'numero',
            visible: visible['numero'],
            orderable: true,
          },
          {
            header: label['exercicio'],
            data: 'exercicio',
            type: 'text',
            visible: visible['exercicio'],
            orderable: true,
          },
          {
            header: label['protocolo'],
            data: 'numeroProtocolo',
            type: 'text',
            visible: visible['protocolo'],
            orderable: true,
          },
          {
            header: label['numeroNed'],
            data: 'empenho',
            visible: visible['numeroNed'],
            orderable: true,
          },
          {
            header: label['status'],
            data: 'status',
            visible: visible['status'],
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
            header: label['nomeCredor'],
            data: 'nomeCredor',
            type: 'longText',
            visible: visible['nomeCredor'],
            orderable: true,
          },
          {
            header: label['natureza'],
            data: 'natureza',
            visible: visible['natureza'],
            orderable: true,
          },
          {
            header: label['efeito'],
            data: 'efeito',
            visible: visible['efeito'],
            orderable: true,
          },
          {
            header: label['dataEmissao'],
            data: 'dataEmissao',
            type: 'date',
            visible: visible['dataEmissao'],
            orderable: true,
          },
        ]}
      />
    </>
  );
};

export default PagamentosListar;
