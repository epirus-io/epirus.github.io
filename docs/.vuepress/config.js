module.exports = {
  title: 'Docs',
  description: 'Documentation repository for the Epirus Blockchain Explorer',
  head: [
    ['link', { rel: 'icon', href: '/epirus_logo.png' }]
  ],
  themeConfig: {
    logo: '/epirus_explorer_logo.png',
    author: {
      name: 'Web3 Labs Team',
      twitter: '@web3labs'
    },
    nav: [
      { text: 'Epirus Explorer', link: 'https://www.web3labs.com/epirus-explorer' }
    ],
    sidebar: [
          '/',
          '/getting_started',
          '/features',
          '/metadata',
          '/mobile',
          '/tagging',
          '/rest',
          '/faqs',
    ],
    //sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    displayAllHeaders: false,
    repo: 'epirus-io/epirus.github.io',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on GitHub',
    keywords:
        'Ethereum, Quorum, Hyperledger Besu, blockchain explorer, enterprise blockchain, enterpise ethereum, DApps, Java, Kotlin, Epirus, Android, Web3 Labs',
    algolia: {
      apiKey: '0fff5b4ca8fbb5aa6db3094cc2f69573',
      indexName: 'epirus'
    },
  },
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['code-switcher'],
    ['reading-progress'],
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
        headerTopOffset: 120
      }
    ],
    '@vuepress/plugin-last-updated',
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404/'
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132980710-2'
      }
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: ($page, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: ($page, $site) =>
            $page.frontmatter.author || $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page =>
            ['articles', 'posts', 'blog'].some(folder =>
                $page.regularPath.startsWith('/' + folder)
            )
                ? 'article'
                : 'website',
        url: ($page, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) =>
            $page.frontmatter.image
                ? ($site.themeConfig.domain || '') + $page.frontmatter.image
                : ($site.themeConfig.domain || '') + $site.themeConfig.defaultImage,
        publishedAt: $page =>
            $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        customMeta: (add, context) => {
          const { $site, image } = context
          add(
              'twitter:site',
              ($site.themeConfig.author && $site.themeConfig.author.twitter) || ''
          )
          add('image', image)
          add('keywords', $site.themeConfig.keywords)
        }
      }
    ],
    [
      'vuepress-plugin-canonical',
      {
        // add <link rel="canonical" header (https://tools.ietf.org/html/rfc6596)
        // to deduplicate SEO across all copies loaded from various public gateways
        baseURL: 'https://docs.epirus.io/'
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        color: '#918fff'
      }
    ]
  ]
}
