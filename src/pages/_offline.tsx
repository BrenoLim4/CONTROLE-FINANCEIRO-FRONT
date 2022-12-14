import Card from '@/components/Card';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Row } from '@/components/Row';
import { useTheme } from '@emotion/react';

// import { failureGetTimeServidor } from '@/redux/User/actions';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

const Offline: NextPage = () => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(failureGetTimeServidor('Offline'));
  // }, []);

  return (
    <>
      <Head>
        <title>Offline</title>
      </Head>
      <Row>
        <Card title="Sistema Indisponível">
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.125rem',
              fontWeight: 700,
              color: theme.colors.red[9],
            }}
          >
            Não foi possível conectar com o serviço de ponto.
          </p>
          <p style={{ textAlign: 'center' }}>
            Verique se está conectado na rede WI-FI <b>SOP-PONTO</b> e tente
            novamente.
          </p>
        </Card>
      </Row>
    </>
  );
};

export default Offline;
