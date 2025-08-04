import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '9d6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6c8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0e0'),
            routes: [
              {
                path: '/docs/community-governance/community-channels',
                component: ComponentCreator('/docs/community-governance/community-channels', 'c54'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/community-governance/events-webinars',
                component: ComponentCreator('/docs/community-governance/events-webinars', '5ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/community-governance/rubix-dao',
                component: ComponentCreator('/docs/community-governance/rubix-dao', 'c06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/community-governance/submit-rep',
                component: ComponentCreator('/docs/community-governance/submit-rep', '27b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/core-concepts/monolithic-vs-microchain',
                component: ComponentCreator('/docs/core-concepts/monolithic-vs-microchain', 'c9b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/core-concepts/proof-of-pledge',
                component: ComponentCreator('/docs/core-concepts/proof-of-pledge', '638'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/core-concepts/rubix-did',
                component: ComponentCreator('/docs/core-concepts/rubix-did', '4ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/core-concepts/tokenchain-vs-blockchain',
                component: ComponentCreator('/docs/core-concepts/tokenchain-vs-blockchain', '658'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/core-concepts/what-is-tokenchain',
                component: ComponentCreator('/docs/core-concepts/what-is-tokenchain', '08e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/setup/did-creation',
                component: ComponentCreator('/docs/developer-guides/setup/did-creation', '651'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/setup/install-rubix',
                component: ComponentCreator('/docs/developer-guides/setup/install-rubix', '018'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/setup/mainnet',
                component: ComponentCreator('/docs/developer-guides/setup/mainnet', '840'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/setup/run-locally',
                component: ComponentCreator('/docs/developer-guides/setup/run-locally', 'b50'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/setup/subnet',
                component: ComponentCreator('/docs/developer-guides/setup/subnet', 'fa0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/setup/testnet',
                component: ComponentCreator('/docs/developer-guides/setup/testnet', '802'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/smart-contracts/examples',
                component: ComponentCreator('/docs/developer-guides/smart-contracts/examples', 'c84'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/smart-contracts/overview',
                component: ComponentCreator('/docs/developer-guides/smart-contracts/overview', '8f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/developer-guides/smart-contracts/write-deploy',
                component: ComponentCreator('/docs/developer-guides/smart-contracts/write-deploy', '368'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/enterprise-onboarding/api-integrations',
                component: ComponentCreator('/docs/enterprise-onboarding/api-integrations', 'bf6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/enterprise-onboarding/compliance-dapps',
                component: ComponentCreator('/docs/enterprise-onboarding/compliance-dapps', 'a2d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/enterprise-onboarding/integrity-access',
                component: ComponentCreator('/docs/enterprise-onboarding/integrity-access', '854'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/enterprise-onboarding/internal-tokenchains',
                component: ComponentCreator('/docs/enterprise-onboarding/internal-tokenchains', 'e44'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/enterprise-onboarding/why-rubix',
                component: ComponentCreator('/docs/enterprise-onboarding/why-rubix', '3b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/explorer-analytics/did-event-chain',
                component: ComponentCreator('/docs/explorer-analytics/did-event-chain', '8fa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/explorer-analytics/explorer-walkthrough',
                component: ComponentCreator('/docs/explorer-analytics/explorer-walkthrough', 'c72'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/explorer-analytics/query-tokenchains',
                component: ComponentCreator('/docs/explorer-analytics/query-tokenchains', '070'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/explorer-analytics/rbt-tracker',
                component: ComponentCreator('/docs/explorer-analytics/rbt-tracker', 'd2d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/explorer-analytics/validator-logs',
                component: ComponentCreator('/docs/explorer-analytics/validator-logs', 'b54'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/get-in-touch/grants-bounties',
                component: ComponentCreator('/docs/get-in-touch/grants-bounties', '591'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/get-in-touch/security-vulnerability',
                component: ComponentCreator('/docs/get-in-touch/security-vulnerability', '56d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/get-in-touch/support',
                component: ComponentCreator('/docs/get-in-touch/support', '899'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'eba'),
                exact: true
              },
              {
                path: '/docs/getting-started/how-organized',
                component: ComponentCreator('/docs/getting-started/how-organized', '0e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/quick-tour',
                component: ComponentCreator('/docs/getting-started/quick-tour', '137'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/what-is-rubix',
                component: ComponentCreator('/docs/getting-started/what-is-rubix', 'e57'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/who-should-use',
                component: ComponentCreator('/docs/getting-started/who-should-use', '184'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started/why-rubix',
                component: ComponentCreator('/docs/getting-started/why-rubix', '3f2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/glossary/terms',
                component: ComponentCreator('/docs/glossary/terms', '879'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/testing-playground/overview',
                component: ComponentCreator('/docs/testing-playground/overview', '90b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/testing-playground/pop-transaction',
                component: ComponentCreator('/docs/testing-playground/pop-transaction', 'a8e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/testing-playground/test-contracts',
                component: ComponentCreator('/docs/testing-playground/test-contracts', '778'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools-downloads/cli-binaries',
                component: ComponentCreator('/docs/tools-downloads/cli-binaries', 'f60'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools-downloads/contract-templates',
                component: ComponentCreator('/docs/tools-downloads/contract-templates', '0a5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools-downloads/playground-snippets',
                component: ComponentCreator('/docs/tools-downloads/playground-snippets', 'f36'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools-downloads/tokenomics',
                component: ComponentCreator('/docs/tools-downloads/tokenomics', '6d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools-downloads/validator-script',
                component: ComponentCreator('/docs/tools-downloads/validator-script', 'f4b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/tools-downloads/whitepaper',
                component: ComponentCreator('/docs/tools-downloads/whitepaper', '1c9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validator-resources/become-validator',
                component: ComponentCreator('/docs/validator-resources/become-validator', '47f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validator-resources/checklist',
                component: ComponentCreator('/docs/validator-resources/checklist', 'cd3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validator-resources/lightweight-node',
                component: ComponentCreator('/docs/validator-resources/lightweight-node', '9bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validator-resources/quorum-credits',
                component: ComponentCreator('/docs/validator-resources/quorum-credits', 'cd6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validator-resources/slashing-risks',
                component: ComponentCreator('/docs/validator-resources/slashing-risks', '092'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validator-resources/validation-process',
                component: ComponentCreator('/docs/validator-resources/validation-process', 'af2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/backup-restore',
                component: ComponentCreator('/docs/xell-wallet/backup-restore', '7d6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/connect-dapps',
                component: ComponentCreator('/docs/xell-wallet/connect-dapps', '8b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/did-management',
                component: ComponentCreator('/docs/xell-wallet/did-management', '845'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/install-xell',
                component: ComponentCreator('/docs/xell-wallet/install-xell', '501'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/send-receive',
                component: ComponentCreator('/docs/xell-wallet/send-receive', 'fd4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/setup-wallet',
                component: ComponentCreator('/docs/xell-wallet/setup-wallet', '768'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/signing-security',
                component: ComponentCreator('/docs/xell-wallet/signing-security', '95c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/view-tokenchains',
                component: ComponentCreator('/docs/xell-wallet/view-tokenchains', 'bbe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/xell-wallet/what-is-xell',
                component: ComponentCreator('/docs/xell-wallet/what-is-xell', '471'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
