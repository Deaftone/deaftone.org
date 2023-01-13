import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blazingly fast!',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Lightweight fast and self-contained! No outside dependencies 
      </>
    ),
  },
  {
    title: 'Large collections first',
    Svg: require('@site/static/img/db.svg').default,
    description: (
      <>
        Tuned to scan large collections! Scanning 1TB of music in 14 mins!
      </>
    ),
  },
  {
    title: 'Modern',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
        Built using rust with the fastest libraries avaliable
      </>
    ),
  },
  {
    title: 'Clients',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
        Beuitiful clients built using DaisyUI and Tauri! Supporting Mobile & Desktop!
      </>
    ),
  },
  {
    title: 'Active',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
        Active project with a passion to grow! And thrive!
      </>
    ),
  },
  {
    title: 'Simple',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
        Simple config. Simple clients. Headache free!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.cardContainer}>
      {FeatureList.map((feature, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.cardSide}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
