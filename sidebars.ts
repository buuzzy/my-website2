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
      items: [
        {
          type: 'category',
          label: '搜索功能设计',
          items: [
            'Product/practice/search-design/search-design',
            'Product/practice/search-design/search-process',
            'Product/practice/search-design/search-detail',
            'Product/practice/search-design/search-optimization',
          ],
        },
        {
          type: 'category',
          label: '如何更好理解项目',
          items: [
            'Product/practice/project-understanding/how-to-understand',
            'Product/practice/project-understanding/how-to-read-docs',
            'Product/practice/project-understanding/how-to-break-down',
            {
              type: 'category',
              label: '一个金融项目的完整复盘',
              items: [
                'Product/practice/project-understanding/case-study/part1',
                'Product/practice/project-understanding/case-study/part2',
                'Product/practice/project-understanding/case-study/part3',
                'Product/practice/project-understanding/case-study/part4',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '竞品调研专题',
          items: [
            'Product/practice/competitive-research/stock-list',
            'Product/practice/competitive-research/gf-research',
          ],
        },
        'Product/practice/position-billboard',
      ],
    },
    {
      type: 'category',
      label: '通用能力',
      items: [
        {
          type: 'category',
          label: '职场技能',
          items: [
            'Product/general-skills/workplace-skills/okr-guide',
            'Product/general-skills/workplace-skills/how-to-bypass-gfw',
            'Product/general-skills/workplace-skills/why-weekly-report',
            'Product/general-skills/workplace-skills/how-to-be-efficient',
            'Product/general-skills/workplace-skills/how-interviewer-choose',
          ],
        },
        {
          type: 'category',
          label: 'What is？',
          items: [
            'Product/general-skills/what-is/scale-effect',
            'Product/general-skills/what-is/network-effect',
            'Product/general-skills/what-is/flywheel-effect',
            'Product/general-skills/what-is/unit-economics',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '阅读思考',
      items: [
        'Product/reading/product-portfolio',
        {
          type: 'category',
          label: '书籍推荐',
          items: [
            'Product/reading/book-recommendations/enterprise-history',
            'Product/reading/book-recommendations/tools-and-theories',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
