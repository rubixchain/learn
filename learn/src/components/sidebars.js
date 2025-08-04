// src/components/sidebars.js
  module.exports = {
    docs: [
      {
        type: 'category',
        label: 'Getting Started',
        items: [
          'getting-started/what-is-rubix',
          'getting-started/why-rubix',
          'getting-started/who-should-use',
          'getting-started/how-organized',
          'getting-started/quick-tour',
        ],
      },
      {
        type: 'category',
        label: 'Core Concepts',
        items: [
          'core-concepts/monolithic-vs-microchain',
          'core-concepts/what-is-tokenchain',
          'core-concepts/tokenchain-vs-blockchain',
          'core-concepts/proof-of-pledge',
          'core-concepts/rubix-did',
        ],
      },
      {
        type: 'category',
        label: 'Developer Guides',
        items: [
          {
            type: 'category',
            label: 'Setup',
            items: [
              'developer-guides/setup/install-rubix',
              'developer-guides/setup/run-locally',
              'developer-guides/setup/did-creation',
              'developer-guides/setup/testnet',
              'developer-guides/setup/mainnet',
              'developer-guides/setup/subnet',
            ],
          },
          {
            type: 'category',
            label: 'Smart Contracts',
            items: [
              'developer-guides/smart-contracts/overview',
              'developer-guides/smart-contracts/write-deploy',
              'developer-guides/smart-contracts/examples',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Xell Wallet',
        items: [
          'xell-wallet/what-is-xell',
          'xell-wallet/install-xell',
          'xell-wallet/setup-wallet',
          'xell-wallet/backup-restore',
          'xell-wallet/did-management',
          'xell-wallet/send-receive',
          'xell-wallet/connect-dapps',
          'xell-wallet/view-tokenchains',
          'xell-wallet/signing-security',
        ],
      },
      {
        type: 'category',
        label: 'Testing & Playground',
        items: [
          'testing-playground/overview',
          'testing-playground/pop-transaction',
          'testing-playground/test-contracts',
        ],
      },
      {
        type: 'category',
        label: 'Validator Resources',
        items: [
          'validator-resources/become-validator',
          'validator-resources/lightweight-node',
          'validator-resources/validation-process',
          'validator-resources/quorum-credits',
          'validator-resources/slashing-risks',
          'validator-resources/checklist',
        ],
      },
      {
        type: 'category',
        label: 'Enterprise Onboarding',
        items: [
          'enterprise-onboarding/why-rubix',
          'enterprise-onboarding/internal-tokenchains',
          'enterprise-onboarding/integrity-access',
          'enterprise-onboarding/api-integrations',
          'enterprise-onboarding/compliance-dapps',
        ],
      },
      {
        type: 'category',
        label: 'Explorer & Analytics',
        items: [
          'explorer-analytics/explorer-walkthrough',
          'explorer-analytics/query-tokenchains',
          'explorer-analytics/validator-logs',
          'explorer-analytics/did-event-chain',
          'explorer-analytics/rbt-tracker',
        ],
      },
      {
        type: 'category',
        label: 'Tools & Downloads',
        items: [
          'tools-downloads/cli-binaries',
          'tools-downloads/contract-templates',
          'tools-downloads/validator-script',
          'tools-downloads/playground-snippets',
          'tools-downloads/whitepaper',
          'tools-downloads/tokenomics',
        ],
      },
      {
        type: 'category',
        label: 'Community & Governance',
        items: [
          'community-governance/rubix-dao',
          'community-governance/submit-rep',
          'community-governance/community-channels',
          'community-governance/events-webinars',
        ],
      },
      {
        type: 'category',
        label: 'Get in Touch',
        items: [
          'get-in-touch/support',
          'get-in-touch/grants-bounties',
          'get-in-touch/security-vulnerability',
        ],
      },
      {
        type: 'category',
        label: 'Glossary',
        items: [
          'glossary/terms',
        ],
      },
    ],
  };