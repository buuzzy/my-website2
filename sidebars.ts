import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  product: [
    'Product/intro',
    'Product/about',
    {
      type: 'category',
      label: '产品经理',
      items: [
        {
          type: 'category',
          label: '职业发展',
          items: [
            'Product/fundamentals/career/what-is-pm',
            'Product/fundamentals/career/pm-types',
            'Product/fundamentals/career/product-thinking',
            'Product/fundamentals/career/product-requirements',
            'Product/fundamentals/career/identify-needs',
            'Product/fundamentals/career/career-path',
            'Product/fundamentals/career/basic-qualities',
          ],
        },
        {
          type: 'category',
          label: '产品设计',
          items: [
            {
              type: 'category',
              label: '行业分析',
              items: [
                'Product/fundamentals/design/industry-analysis/how-to-analyze',
                'Product/fundamentals/design/industry-analysis/how-to-write',
              ],
            },
            {
              type: 'category',
              label: '竞品分析',
              items: [
                'Product/fundamentals/design/competitive-analysis/how-to-analyze',
                'Product/fundamentals/design/competitive-analysis/how-to-research',
              ],
            },
            'Product/fundamentals/design/macro-product-design',
            {
              type: 'category',
              label: '微观产品设计',
              items: [
                'Product/fundamentals/design/micro-product-design/index',
              ],
            },
            'Product/fundamentals/design/scrum-development',
            'Product/fundamentals/design/schedule-control',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
