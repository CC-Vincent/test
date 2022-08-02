import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Layout from "../components/layout/layout";

import "../styles/globals.css";
import ScrollToTop from "../components/ui/ScrollToTop";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>CherryCat</title>
      </Head>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  );
}

export default MyApp;
