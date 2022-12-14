import { GetServerSideProps, NextPage } from 'next';
import { currencyMask, formatDate } from 'api/utils';
import { useDispatch, useSelector } from 'react-redux';

import Btn from '@/components/Btn';
import Card from '@/components/Card';
import Head from 'next/head';
import LiquidacaoPagamentosTab from '@/components/PagamentosTab';
import LoadComponent from '@/components/LoadComponent';
import { RootState } from '@/redux/rootReducer';
import { Row } from '@/components/Position';
import Tabs from '@/components/Tabs';
import TxtDisplay from '@/components/TxtDisplay';
import { setPageName } from '@/redux/Session/actions';
import { startGetLiquidacaoDetalhes } from '@/redux/Despesas/Liquidacoes/actions';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

const DetalhesLiquidacao: NextPage<{
  id: string;
  tipo: string;
  origem: string;
}> = ({ id, tipo }) => {
  const dispatch = useDispatch();
  const { back } = useRouter();

  const theme = useTheme();
  const { liquidacao, loadingLiquidacao, errorLiquidacao } = useSelector(
    (store: RootState) => store.Despesas.liquidacoes
  );

  useEffect(() => {
    dispatch(setPageName('Detalhes da Liquidação.'));
    dispatch(startGetLiquidacaoDetalhes(id));
  }, []);

  return (
    <>
      <Head>
        <title>Detalhes da Liquidação</title>
      </Head>
      <LoadComponent
        loading={loadingLiquidacao}
        errorMsg={errorLiquidacao}
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

            <Card title={`Liquidação [${liquidacao?.id}]`}>
              <Row>
                <TxtDisplay
                  label="Nº Processo"
                  text={liquidacao?.numeroProtocolo}
                />
                <TxtDisplay
                  label="Valor"
                  text={currencyMask(liquidacao?.valor)}
                />
                <TxtDisplay
                  label="Valor Retido"
                  text={currencyMask(liquidacao?.valorRetido)}
                />
                <TxtDisplay label="Nº Empenho" text={liquidacao?.empenho} />
              </Row>
              <Row>
                <TxtDisplay
                  label="Data de Emissão"
                  text={formatDate(liquidacao?.dataEmissao)}
                />
                <TxtDisplay
                  label="Exercício Restos a Pagar"
                  text={liquidacao?.exercicioRestosApagar}
                />
                <TxtDisplay label="ISN Seq." text={liquidacao?.isnSeq} />
                <TxtDisplay
                  label="Tipo Doc. Despesa"
                  text={liquidacao?.tipoDocDespesa}
                />
              </Row>
              <Row>
                <TxtDisplay
                  label="CPF Ordenador da Despesa"
                  text={liquidacao?.cpfOrdenadorDespesa}
                />
                <TxtDisplay label="Efeito" text={liquidacao?.efeito} />
                <TxtDisplay label="Natureza" text={liquidacao?.natureza} />
              </Row>
            </Card>
            <Tabs
              tabs={[
                {
                  title: 'Pagamentos',
                  component: (
                    <LiquidacaoPagamentosTab
                      pagamentos={liquidacao?.pagamentos}
                      loading={loadingLiquidacao}
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

export default DetalhesLiquidacao;
