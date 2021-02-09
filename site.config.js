module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '8b7f8e98f42a4aef98d3022a1f1dc55c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Mogic Time | Trump's blog",
  domain: 'notion-blog-wujunchuan.vercel.app',
  author: 'John Trump',

  // open graph metadata (optional)
  description: "Trump's blog, front-end, javascript, nodejs",
  socialImageTitle: '',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'wujunchuan1994',
  github: 'wujunchuan',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'wujunchuan/nextjs-notion-starter-kit',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '067dd719a912471ea9a3ac10710e7fdf': '/foo',
  //   '0be6efce9daf42688f65c76b89f8eb27': '/bar'
  // }
  pageUrlOverrides: {
    /* 关于我 */
    '070a37dbafb940db90d5156e7658671d': '/about'
  }
}
