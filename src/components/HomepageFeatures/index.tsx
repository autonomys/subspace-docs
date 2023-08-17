import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string | JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate
        id="feature.lightweight.title"
        description="Title for the 'Lightweight' feature"
      >
        'Lightweight'
      </Translate>
    ),
    Svg: require('@site/static/img/lightweight.svg').default,
    description: (
      <Translate
        id="feature.lightweight.description"
        description="Description for the 'Lightweight' feature"
      >
        'Run the farmer node in the background on your computer without affecting your daily usage, with minimal maintenance.'
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="feature.easyToSetup.title"
        description="Title for the 'Easy to setup' feature"
      >
        'Easy to setup'
      </Translate>
    ),
    Svg: require('@site/static/img/easy-to-setup.svg').default,
    description: (
      <Translate
        id="feature.easyToSetup.description"
        description="Description for the 'Easy to setup' feature"
      >
        'To set up the application takes only a few minutes. It supports Linux, Windows and macOS operating systems.'
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="feature.frequentRewards.title"
        description="Title for the 'Frequent rewards' feature"
      >
        'Frequent rewards'
      </Translate>
    ),
    Svg: require('@site/static/img/frequent-rewards.svg').default,
    description: (
      <Translate
        id="feature.frequentRewards.description"
        description="Description for the 'Frequent rewards' feature"
      >
        'Get rewarded by contributing to a globally distributed network that gives control back to users and creators.'
      </Translate>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} />
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
