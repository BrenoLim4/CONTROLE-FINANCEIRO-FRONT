import {
  clearFilters,
  clearLiquidacoes,
  nextLiquidacoesPage,
  previousLiquidacoesPage,
  setLiquidacoesPage,
  startGetLiquidacoes,
} from '@/redux/Despesas/Liquidacoes/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { AiOutlineClear } from 'react-icons/ai';
import Btn from '@/components/Btn';
import Card from '@/components/Card';
import DynamicColumn from '@/components/DynamicColumn';
import { FcSearch } from 'react-icons/fc';
import Head from 'next/head';
import { Liquidacao } from '@/redux/Despesas/Liquidacoes/interfaces';
import { NextPage } from 'next';
import { RootState } from '@/redux/rootReducer';
import { Row } from '@/components/Position';
import Table from '@/components/Table';
import TxtInput from '@/components/TxtInput';
import { setPageName } from '@/redux/Session/actions';
import theme from '@/styles/theme';

const EmpenhosListar: NextPage = () => {
  const dispatch = useDispatch();

  const { liquidacoes, loadingLiquidacoes, currentPageLiquidacoes, filters } =
    useSelector((store: RootState) => store.Despesas.liquidacoes);

  const [numero, setNumero] = useState(filters.numero);
  const [exercicio, setExcercicio] = useState(filters.exercicio);
  const [empenho, setEmpenho] = useState(filters.empenho);
  const [numeroProtocolo, setNumeroProtocolo] = useState(
    filters.numeroProtocolo
  );

  const [visible, setVisible] = useState({
    numero: true,
    exercicio: true,
    numeroProtocolo: true,
    valor: true,
    valorRetido: true,
    dataEmissao: true,
    numeroNed: true,
    natureza: true,
    efeito: false,
  });

  const label = {
    valor: 'Valor',
    valorRetido: 'Valor Retido',
    dataEmissao: 'Emissão',
    numeroProtocolo: 'Nr Protocolo',
    numeroNed: 'Nº Empenho',
    natureza: 'Natureza',
    efeito: 'Efeito',
    numero: 'Número',
    exercicio: 'Exercício',
  };

  useEffect(() => {
    dispatch(setPageName('Consultar Liquidações'));
  }, []);

  function handleChangeColumnDinamic(value) {
    setVisible({ ...visible, [value]: !visible[value] });
  }

  const handleConsultar = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(
      startGetLiquidacoes({
        numero,
        exercicio,
        empenho,
        numeroProtocolo,
      })
    );
  };

  const handleLimparFiltros = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(
      clearFilters({
        numero: null,
        exercicio: null,
        empenho: null,
        numeroProtocolo: null,
      })
    );
    setNumero('');
    setExcercicio('');
    setEmpenho('');
    setNumeroProtocolo('');
    dispatch(clearLiquidacoes());
  };

  return (
    <>
      <Head>
        <title>Consultar Liquidações</title>
      </Head>

      <Card title="Filtros">
        <form>
          <Row>
            <TxtInput
              placeholder="Número"
              value={numero}
              setValue={setNumero}
            />
            <TxtInput
              placeholder="Exercício"
              value={exercicio}
              setValue={setExcercicio}
            />
            <div style={{ flexBasis: '100%', height: 0 }} />
            <TxtInput
              placeholder="Nº Empenho"
              value={empenho}
              setValue={setEmpenho}
            />
            <TxtInput
              placeholder="Nr Protocolo"
              value={numeroProtocolo}
              setValue={setNumeroProtocolo}
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
        items={liquidacoes}
        loading={loadingLiquidacoes}
        linkPath={(liquidacao: Liquidacao) => `detalhes?id=${liquidacao.id}`}
        emptyText="Lista não possui nehuma liquidação."
        pagination={{
          currentPage: currentPageLiquidacoes,
          setPage: (value) => dispatch(setLiquidacoesPage(value)),
          nextPage: () => dispatch(nextLiquidacoesPage()),
          previousPage: () => dispatch(previousLiquidacoesPage()),
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
            visible: visible['exercicio'],
            orderable: true,
          },
          {
            header: label['numeroProtocolo'],
            data: 'numeroProtocolo',
            visible: visible['numeroProtocolo'],
            orderable: true,
          },
          {
            header: label['numeroNed'],
            data: 'empenho',
            visible: visible['numeroNed'],
            orderable: true,
          },
          {
            header: label['natureza'],
            data: 'natureza',
            type: 'longText',
            visible: visible['natureza'],
            orderable: true,
          },
          {
            header: label['efeito'],
            data: 'efeito',
            type: 'longText',
            visible: visible['efeito'],
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
            header: label['valorRetido'],
            data: 'valorRetido',
            type: 'money',
            visible: visible['valorRetido'],
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

export default EmpenhosListar;
