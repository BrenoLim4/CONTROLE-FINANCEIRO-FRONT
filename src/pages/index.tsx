import Btn from '@/components/Btn';
import Card from '@/components/Card';
import Head from 'next/head';
import Map from '@/components/Map';
import type { NextPage } from 'next';
import { setPageName } from '@/redux/Session/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName('Dashboard'));
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Card title="Teste">
        <Btn>Teste</Btn>
        <Map minHeight="700px" />
      </Card>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
