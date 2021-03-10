import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Spacemesh Platform Docs`}
      description="Description will go into a meta tag in <head />">
      <main className={clsx('hero hero--primary', styles.heroBanner)}>

        <div className="container">
        <div className={styles.buttons}>
        <ThemedImage alt="Spacemesh" className={styles.mainImage}
          sources={{
            light: useBaseUrl('/banner_white.png'),
            dark: useBaseUrl('/banner_black.png'),
          }}
        /></div>
          <h1 className="hero__title">Platform Docs</h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <div className={styles.spacer}></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
