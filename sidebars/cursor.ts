import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: '介绍'
    },
    {
      type: 'category',
      label: '基础入门',
      items: [
        'basic/installation',
        'basic/interface',
      ],
    },
    {
      type: 'category',
      label: '核心功能',
      items: [
        'features/ai-complete',
        'features/chat',
      ],
    },
  ],
};

export default sidebars; 