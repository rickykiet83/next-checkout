import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import axios from 'axios';
import constants from '../constants';
import { useRouter } from 'next/router';

// http://localhost:5000/success?source=cs_test_b1usi3E3MjL2D8JOLbavYjAaTiEymf6Tto9JmwyNr6yJaflufnwY8QWUB0
const Success = () => {
  const router = useRouter();
  const { source } = router.query;

  useEffect(() => {
    if (source !== undefined) {
      (async () => {
        await axios.post(`${constants.endpoint}/orders/confirm`, {
          source,
        });
      })();
    }
  }, [source]);
  return (
    <>
      <Layout>
        <div className='py-5 text-center'>
          <h2>Success</h2>
          <p className='lead'>Your purchase has been completed!</p>
        </div>
      </Layout>
    </>
  );
};

export default Success;
