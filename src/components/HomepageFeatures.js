import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('../../static/img/learn-dark.svg').default,
    description: (
      <>
        Learn about the Subspace Network and how we utilize our novel Proof of Archival Storage consensus to fully resolve the blockchain Trilemma.
      </>
    ),
  },
  {
    title: 'Get Started Farming',
    Svg: require('../../static/img/get-started-dark.svg').default,
    description: (
      <>
        Get started farming on the Subspace Network, all that is required is a basic computer and some extra storage space.
      </>
    ),
  },
  {
    title: 'Develop',
    Svg: require('../../static/img/develop-dark.svg').default,
    description: (
      <>
        Want to develop on the Subspace Network? Utilize Subspace.js to store on the network!.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
