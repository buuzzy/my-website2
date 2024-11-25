import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易于学习',
    description: (
      <>
        教程设计简单明了，让您轻松入门 AI 产品设计。
      </>
    ),
  },
  {
    title: '实用性强',
    description: (
      <>
        基于实际应用场景，帮助您快速上手 AI 工具。
      </>
    ),
  },
  {
    title: '持续更新',
    description: (
      <>
        内容不断更新，确保您始终站在 AI 前沿领域。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
