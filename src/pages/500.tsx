import Head from 'next/head';
import type { NextPage } from 'next';

const Custom500: NextPage = () => {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <h1>500 - Server-side error occurred</h1>
    </>
  );
};

export default Custom500;
