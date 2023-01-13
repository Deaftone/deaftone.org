import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Wave from 'react-wavify'
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
<div className={styles.background}>
<header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            href="setup/installation"
            className="button button--secondary button--lg"
            >
            Setup
          </Link>
        </div>
      </div>
    </header>
          <Wave fill='#1b1b1d'
          className='wave'
          paused={false}
          options={{
            height: 20,
            amplitude: 35,
            speed: 0.10,
            points: 6
          }}
          />
</div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Stream with no stress ${siteConfig.title}`}
      description="Stream your music with no stress">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
