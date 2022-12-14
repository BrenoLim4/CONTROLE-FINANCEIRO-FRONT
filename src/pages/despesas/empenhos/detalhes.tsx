import { GetServerSideProps, NextPage } from 'next';
import { startGetEmpenhoDetalhes } from '@/redux/Despesas/Empenhos/actions';
import { useDispatch, useSelector } from 'react-redux';

import Btn from '@/components/Btn';
import Card from '@/components/Card';
import EmpenhoLiquidacoesTab from '@/components/LiquidacoesTab';
import EmpenhoPagamentosTab from '@/components/PagamentosTab';
import Head from 'next/head';
import LoadComponent from '@/components/LoadComponent';
import { RootState } from '@/redux/rootReducer';
import { Row } from '@/components/Position';
import Tabs from '@/components/Tabs';
import TxtDisplay from '@/components/TxtDisplay';
import { currencyMask } from 'api/utils';
import { setPageName } from '@/redux/Session/actions';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

const DetalhesEmpenho: NextPage<{
  id: string;
}> = ({ id }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { back } = useRouter();

  const { empenho, loadingEmpenho, errorEmpenho } = useSelector(
    (state: RootState) => state.Despesas.empenhos
  );

  useEffect(() => {
    dispatch(setPageName(`Detalhes do Empenho`));
    dispatch(startGetEmpenhoDetalhes(id));
  }, []);

  return (
    <>
      <Head>
        <title>Detalhes do Empenho</title>
      </Head>
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
      <Card title={`Empenho [${empenho?.id}]`}>
        <LoadComponent
          loading={loadingEmpenho}
          errorMsg={errorEmpenho}
          component={
            <>
              <>
                <TxtDisplay
                  label="Especificação geral"
                  text={empenho?.especificacaoGeral}
                />
                <Row>
                  <TxtDisplay
                    label="Nr Protocolo"
                    text={empenho?.numeroProtocolo}
                  />
                  <TxtDisplay
                    label="Valor"
                    text={`${currencyMask(empenho?.valor)}`}
                  />
                  <TxtDisplay
                    label="Valor Pago"
                    text={`${currencyMask(empenho?.valorPago)}`}
                  />
                  <TxtDisplay
                    label="Saldo"
                    text={`${currencyMask(empenho?.saldoAPagar)}`}
                  />
                </Row>
                <Row>
                  <TxtDisplay
                    label="Razão social do credor"
                    text={empenho?.razaoSocialCredor}
                  />
                  <TxtDisplay
                    label="CPF / CNPJ do Credor"
                    text={empenho?.cpfCnpjCredor}
                  />
                  <TxtDisplay
                    label="CPF ordenador"
                    text={empenho?.cpfOrdenadorDespesa}
                  />
                  <TxtDisplay label="Emissão" text={empenho?.dataEmissao} />
                </Row>
                <Row>
                  <TxtDisplay
                    label="Class. Orçamentária"
                    text={empenho?.classificacaoOrcamentariaCompleto}
                  />
                  <TxtDisplay label="Fonte" text={empenho?.fonteDescricao} />
                  <TxtDisplay label="Projeto" text={empenho?.projeto} />
                  <TxtDisplay label="Nº Parcela" text={empenho?.isnParcela} />
                </Row>
                <Row>
                  <TxtDisplay label="Efeito" text={empenho?.efeito} />
                  <TxtDisplay label="Natureza" text={empenho?.natureza} />
                </Row>
              </>
            </>
          }
        />
      </Card>
      <Tabs
        tabs={[
          {
            title: 'Liquidações',
            component: (
              <EmpenhoLiquidacoesTab
                liquidacoes={empenho?.liquidacoes}
                loading={loadingEmpenho}
              />
            ),
          },
          {
            title: 'Pagamentos',
            component: (
              <EmpenhoPagamentosTab
                pagamentos={empenho?.pagamentos}
                loading={loadingEmpenho}
              />
            ),
          },
        ]}
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

export default DetalhesEmpenho;
