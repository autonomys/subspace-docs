import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate}  from '@docusaurus/Translate';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Translate
            id="homepage.startFarming"
            description="The button to take the user to start farming"
            values={{
              farmingLink: (
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                    <Translate
                      id="homepage.startFarming.linkLabel"
                      description="The label for the link button">
                        Start Farming - 10min ⏱️
                      </Translate>
                </Link>
              ),
            }}>
              {'{farmingLink}'}
          </Translate>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate(
        {id: 'homepage.layoutDescription'},
        {message: 'Official Documentation for Subspace Labs'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
