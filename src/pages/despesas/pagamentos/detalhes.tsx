import { GetServerSideProps, NextPage } from 'next';
import { currencyMask, formatDate } from 'api/utils';
import { useDispatch, useSelector } from 'react-redux';

import Btn from '@/components/Btn';
import Card from '@/components/Card';
import Head from 'next/head';
import LoadComponent from '@/components/LoadComponent';
import { RootState } from '@/redux/rootReducer';
import { Row } from '@/components/Position';
import TxtDisplay from '@/components/TxtDisplay';
import { setPageName } from '@/redux/Session/actions';
import { startGetPagamentoDetalhes } from '@/redux/Despesas/Pagamentos/actions';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';

const DetalhesPagamento: NextPage<{
  id: string;
}> = ({ id }) => {
  const dispatch = useDispatch();
  const { back } = useRouter();
  const theme = useTheme();

  const { pagamento, loadingPagamento, errorPagamento } = useSelector(
    (store: RootState) => store.Despesas.pagamentos
  );

  useEffect(() => {
    dispatch(setPageName('Detalhes do Pagamento'));
    dispatch(startGetPagamentoDetalhes(id));
  }, []);

  return (
    <>
      <Head>
        <title>Detalhes Pagamento</title>
      </Head>
      <LoadComponent
        loading={loadingPagamento}
        errorMsg={errorPagamento}
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

            <Card title={`Pagamento [${pagamento?.id}]`}>
              <Row>
                <TxtDisplay
                  label="Nome do Credor"
                  text={pagamento?.nomeCredor}
                />
                <TxtDisplay
                  label="CPF/CNPJ do Credor"
                  text={pagamento?.cpfCnpjCredor}
                />
                <TxtDisplay
                  label="Valor"
                  text={currencyMask(pagamento?.valor)}
                />
              </Row>
              <Row>
                <TxtDisplay
                  label="Nº Processo"
                  text={pagamento?.numeroProtocolo}
                />
                <TxtDisplay label="Nº Empenho" text={pagamento?.empenho} />
                <TxtDisplay
                  label="Nº da liquidação"
                  text={pagamento?.liquidacao}
                />
              </Row>
              <Row>
                <TxtDisplay
                  label="Banco / Agência / Conta de Origem"
                  text={`${pagamento?.bancoOrigem} / ${pagamento?.agenciaOrigem} / ${pagamento?.contaOrigem}`}
                />
                <TxtDisplay
                  label="Banco / Agência / Conta do Beneficiário"
                  text={`${pagamento?.bancoBeneficiario} / ${pagamento?.agenciaBeneficiario} / ${pagamento?.contaBeneficiario}`}
                />
                <TxtDisplay
                  label="Banco do Pagamento / Serviço"
                  text={`${
                    pagamento?.bancoPagto
                      ? pagamento?.bancoPagto
                      : 'Indisponível'
                  } / ${
                    pagamento?.servicoBancario
                      ? pagamento?.servicoBancario
                      : 'Indisponível'
                  }`}
                />
              </Row>
              <Row>
                <TxtDisplay
                  label="Data de emissão"
                  text={formatDate(pagamento?.dataEmissao)}
                />
                <TxtDisplay
                  label="Efeito/Natureza"
                  text={`${
                    pagamento?.efeito ? pagamento?.efeito : 'Indisponível'
                  } / ${
                    pagamento?.natureza ? pagamento?.natureza : 'Indisponível'
                  }`}
                />
                <TxtDisplay label="Status" text={pagamento?.status} />
              </Row>
            </Card>
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

export default DetalhesPagamento;
