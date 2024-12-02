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
                'Product/fundamentals/design/micro-product-design/five-essential-diagrams',
                'Product/fundamentals/design/micro-product-design/how-to-write-prd',
                'Product/fundamentals/design/micro-product-design/how-to-collect-user-needs',
                {
                  type: 'category',
                  label: '如何做好数据埋点',
                  items: [
                    'Product/fundamentals/design/micro-product-design/data-tracking/how-to-design-tracking',
                    'Product/fundamentals/design/micro-product-design/data-tracking/tracking-process',
                    'Product/fundamentals/design/micro-product-design/data-tracking/how-to-write-tracking-docs',
                    'Product/fundamentals/design/micro-product-design/data-tracking/event-user-model',
                    'Product/fundamentals/design/micro-product-design/data-tracking/tracking-standards',
                  ],
                },
                {
                  type: 'category',
                  label: '写在版本上线前',
                  items: [
                    'Product/fundamentals/design/micro-product-design/release/how-to-write-release-notes',
                    'Product/fundamentals/design/micro-product-design/release/how-to-write-acceptance-docs',
                  ],
                },
              ],
            },
            'Product/fundamentals/design/scrum-development',
            'Product/fundamentals/design/schedule-control',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '产品运营',
      items: [
        
        {
          type: 'category',
          label: '职业发展',
          items: [
            'Product/operations/career/types',
            'Product/operations/career/career-path',
            'Product/operations/career/transfer-to-pm',
            'Product/operations/career/cooperation-with-pm',
          ],
        },
        'Product/operations/data-analysis',
        'Product/operations/growth-matters',
      ],
    },
    {
      type: 'category',
      label: '产品实战',
      items: ['Product/practice/index'],
    },
    {
      type: 'category',
      label: '通用能力',
      items: ['Product/general-skills/index'],
    },
    {
      type: 'category',
      label: '阅读思考',
      items: ['Product/reading/index'],
    },
  ],
};

export default sidebars;
