import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/lightweight.svg').default,
    description: (
      <>
        Run the farmer node in the background on your computer without affecting your daily usage, with minimal maintenance.
      </>
    ),
  },
  {
    title: 'Easy to setup',
    Svg: require('@site/static/img/easy-to-setup.svg').default,
    description: (
      <>
        To set up the application takes only a few minutes. It supports Linux, Windows and macOS operating systems.
      </>
    ),
  },
  {
    title: 'Frequent rewards',
    Svg: require('@site/static/img/frequent-rewards.svg').default,
    description: (
      <>
        Get rewarded by contributing to a globally distributed network that gives control back to users and creators.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
