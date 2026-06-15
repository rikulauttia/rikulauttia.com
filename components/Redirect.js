import { useEffect } from 'react';
import Head from 'next/head';

const SITE = 'https://rikulauttia.com';

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <>
      <Head>
        <title>Riku Lauttia</title>
        <meta name="robots" content="noindex, follow" />
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={`${SITE}/`} />
      </Head>
      <main className="wrap py-24">
        <p className="text-ink-muted">
          Redirecting to{' '}
          <a href={to} className="link">
            {to}
          </a>
          .
        </p>
      </main>
    </>
  );
};

export default Redirect;
