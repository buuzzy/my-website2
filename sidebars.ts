import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  cursor: [
    'Cursor/intro',
    {
      type: 'category',
      label: '基础入门',
      items: [
        'Cursor/basic/installation',
        'Cursor/basic/interface',
      ],
    },
    {
      type: 'category',
      label: '核心功能',
      items: [
        'Cursor/features/ai-complete',
        'Cursor/features/chat',
      ],
    },
  ],
  
  product: [
    'Product/intro',
    {
      type: 'category',
      label: '产品基础',
      items: [
        'Product/fundamentals/design-thinking',
        'Product/fundamentals/user-research',
      ],
    },
    {
      type: 'category',
      label: 'AI 产品设计',
      items: [
        'Product/ai-features/prompt-design',
        'Product/ai-features/interaction',
      ],
    },
  ],
};

export default sidebars;
