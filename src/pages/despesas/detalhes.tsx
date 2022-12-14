import Card from '@/components/Card';
import { startGetDespesaDetalhes } from '@/redux/Despesas/Despesas/actions';
import { RootState } from '@/redux/rootReducer';
import { setPageName } from '@/redux/Session/actions';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import Head from 'next/head';
import LoadComponent from '@/components/LoadComponent';
import { Row } from '@/components/Position';
import Btn from '@/components/Btn';
import TxtDisplay from '@/components/TxtDisplay';
import { currencyMask, formatDate } from 'api/utils';
import Tabs from '@/components/Tabs';
import EmpenhosTab from '@/components/EmpenhosTab';
import LiquidacoesTab from '@/components/LiquidacoesTab';
import PagamentosTab from '@/components/PagamentosTab';
import Table from '@/components/Table';

const DetalhesDespesa: NextPage<{
  nrProtocolo: string;
}> = ({ nrProtocolo }) => {
  const dispatch = useDispatch();
  const { back } = useRouter();
  const theme = useTheme();

  const { despesa, loadingDespesa } = useSelector(
    (state: RootState) => state.Despesas.despesas
  );

  useEffect(() => {
    dispatch(setPageName('Detalhes da Despesa'));
    dispatch(startGetDespesaDetalhes(nrProtocolo));
  }, []);

  return (
    <>
      <Head>
        <title>Detalhes Despesa</title>
      </Head>
      <LoadComponent
        loading={loadingDespesa}
        component={
          <>
            <Row>
              <Btn
                backgroundColor={theme.colors.darkGreen}
                backgroundHoverColor={theme.colors.lighterGreen}
                fontColor={'#fff'}
                clicked={back}
                type="button"
              >
                Voltar
              </Btn>
            </Row>
            <Card
              title={`Despesa ${despesa?.digital ? 'Digital' : 'Física'} [${
                despesa?.nrProtocolo
              }]`}
            >
              <Row>
                <TxtDisplay
                  label="Credor"
                  text={`${despesa?.credorNome} - ${despesa?.credorIdentificacao}`}
                />
                <TxtDisplay
                  label="Dt. Protocolo"
                  text={formatDate(despesa?.dataProtocolo.toString())}
                />
                <TxtDisplay
                  label="Dt. Vencimento"
                  text={formatDate(despesa?.dataVencimento.toString())}
                />
                <TxtDisplay
                  label="Status"
                  text={despesa?.status}
                  fontColor={despesa?.statusCor}
                />
              </Row>
              <Row>
                <TxtDisplay
                  label="Valor"
                  text={currencyMask(despesa?.valorTotal)}
                />
                <TxtDisplay
                  label="Total Empenhado"
                  text={currencyMask(despesa?.totalEmpenhado)}
                />
                <TxtDisplay
                  label="Total Pago"
                  text={currencyMask(despesa?.totalPago)}
                />
                <TxtDisplay
                  label="Saldo(Empenho/Pagamento)"
                  text={`${currencyMask(
                    despesa?.saldoAEmpenhar
                  )} / ${currencyMask(despesa?.saldoAPagar)}`}
                />
              </Row>
              <Row>
                <TxtDisplay label="Categoria" text={despesa?.categoria} />
                <TxtDisplay label="Tipo" text={despesa?.tipo} />
                <TxtDisplay label="Período" text={despesa?.anoMesReferencia} />
                <TxtDisplay label="Setor Atual" text={despesa?.setorDespacho} />
              </Row>
              <TxtDisplay label="Objeto" text={despesa?.objeto} />
            </Card>
            <Tabs
              tabs={[
                {
                  title: 'Empenhos',
                  component: (
                    <EmpenhosTab
                      empenhos={despesa?.empenhos}
                      loadingEmpenhos={loadingDespesa}
                    />
                  ),
                },
                {
                  title: 'Liquidações',
                  component: (
                    <LiquidacoesTab
                      liquidacoes={despesa?.liquidacoes}
                      loading={loadingDespesa}
                    />
                  ),
                },
                {
                  title: 'Pagamentos',
                  component: (
                    <PagamentosTab
                      pagamentos={despesa?.pagamentos}
                      loading={loadingDespesa}
                    />
                  ),
                },
                {
                  title: 'Histórico',
                  component: (
                    <LoadComponent
                      loading={loadingDespesa}
                      component={
                        <Table
                          items={despesa?.historicosDespesa}
                          loading={loadingDespesa}
                          columns={[
                            {
                              data: 'usuarioMatricula',
                              header: 'Usuário',
                              type: 'text',
                              titleData: 'usuarioNome',
                            },
                            {
                              data: 'dataHora',
                              header: 'Data Ação',
                              type: 'date',
                            },
                            {
                              data: 'tipoHistorico',
                              header: 'Tipo',
                              type: 'longText',
                            },
                            {
                              data: 'observacao',
                              header: 'Observação',
                            },
                          ]}
                        />
                      }
                    />
                  ),
                },
              ]}
            />
          </>
        }
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...ctx.query,
    },
  };
};

export default DetalhesDespesa;
