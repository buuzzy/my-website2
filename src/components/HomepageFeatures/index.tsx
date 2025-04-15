import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

type FeatureItem = {
  title: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易于学习',
    description: (
      <>
        教程设计简单明了<br/>轻松入门产品设计
      </>
    ),
  },
  {
    title: '实用性强',
    description: (
      <>
        基于实际应用场景<br/>快速上手 AI 工具
      </>
    ),
  },
  {
    title: '持续更新',
    description: (
      <>
        内容不断更新<br/>确保内容处在前沿领域
      </>
    ),
  },
];

function Feature(props: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{props.title}</Heading>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <React.Fragment key={idx}>
              <Feature title={feature.title} description={feature.description} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
