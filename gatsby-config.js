const themeOptions = require('gatsby-theme-apollo-docs/theme-options')

// console.log(themeOptions, `${__dirname}/src/pages`)
module.exports = {
    siteMetadata: {
        title: 'Firecamp documentation',
        description: 'VS code for API things',
        author: '@Nishchit14',
    },
    pathPrefix: '/docs',
    plugins: [
      {
        resolve: 'gatsby-theme-apollo-docs',
        options: {
          ...themeOptions,
          root: __dirname,
          subtitle: 'Campsite for API things.',
          description: 'A guide to using Firecamp',
          // githubRepo: 'firecampapp/firecamp',
          defaultVersion: '2',
          // versions: {
          //   '1': 'version-1'
          // },
          siteName: 'Firecamp Docs',
          pageTitle: 'Firecamp Docs',
          menuTitle: 'Firecamp Platform',
          // segmentApiKey: 'wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg',
          // algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
          // algoliaIndexName: 'apollodata',
          baseUrl: 'https://doc.firecamp.io',
          twitterHandle: 'apollographql',
          spectrumHandle: 'firecamp',
          youtubeUrl: 'https://www.youtube.com/channel/UC7lDNSOMvPOMt3ylaNLLIdA',
          logoLink: 'https://doc.firecamp.io',
          // baseDir: 'docs',
          // contentDir: 'source',
          navConfig: {
            'Firecamp Basics': {
              url: 'http://localhost:8000/',
              description: 'Learn about each part of the Apollo platform and how they all work together.',
              omitLandingPage: true
            },
            'Firecamp GraphQL': {
              url: 'https://www.apollographql.com/docs/apollo-server',
              description: 'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
            },
            'Firecamp WebSocket': {
              url: 'https://www.apollographql.com/docs/react',
              description: "Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
            },
            'Apollo Graph Manager': {
              url: 'https://www.apollographql.com/docs/graph-manager',
              description: "Integrate with Apollo's cloud service for schema versioning, metrics, and enhanced security."
            },
            'Firecamp API Client': {
              url: 'https://www.apollographql.com/docs/ios',
              description: "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."
            },
            'Firecamp gRPC': {
              url: 'https://www.apollographql.com/docs/link',
              description: 'Define a custom chain of actions that your client performs with each GraphQL operation.',
              omitLandingPage: true
            }
          },
          footerNavConfig: {
            Blog: {
              href: 'https://blog.firecamp.io/',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            Contribute: { href: 'https://firecamp.io' },
            'Firecamp Summit': {
              href: 'https://summit.firecamp.io/',
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          sidebarCategories: {
            null: ['index'],
            APIs: [
              'apis/actions/adding-and-managing-bodies-for-your-API-request',
              'apis/actions/generating-code-snippets',
              'apis/actions/observing-the-response-panel',
              'apis/actions/saving-your-requests',
              'apis/actions/sending-your-first-request',
              'apis/ations/writing-graphql-queries '
            ],
            Features: [
              'features/mocking',
              'features/f2/m2',
              // 'features/errors',
              // 'features/data-sources'
            ]
          }
        }
      }
    ],
  }