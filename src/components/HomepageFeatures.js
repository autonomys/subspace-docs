import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Lightweight',
    Svg: require('../../static/img/lightweight.svg').default,
    description: (
      <>
        Run the farmer node in the background on your computer without affecting your daily usage, with minimal maintenance.
      </>
    ),
    href: '',
  },
  {
    title: 'Easy to setup',
    Svg: require('../../static/img/easy-to-setup.svg').default,
    description: (
      <>
        To set up the application takes only a few minutes. It supports Linux, Windows and macOS operating systems.
      </>
    ),
    href: '',
  },
  {
    title: 'Frequent rewards',
    Svg: require('../../static/img/frequent-rewards.svg').default,
    description: (
      <>
        Get rewarded by contributing to a globally distributed network that gives control back to users and creators.
      </>
    ),
    href: '',
  },
];

function Feature({Svg, title, description, href}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={href} style={{ textDecoration: 'none' }}>
        <div className=''>
          <Svg className={styles.featureSvg} alt={title} />
          <h3 className={styles.items}>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
