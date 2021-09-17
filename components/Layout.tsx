import Head from 'next/head';
import React from 'react';

const Layout = (props) => {
  return (
    <>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='container'>{props.children}</div>
    </>
  );
};

export default Layout;
