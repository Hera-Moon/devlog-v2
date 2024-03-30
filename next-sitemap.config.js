/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hyezzang.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://hyezzang.com/server-sitemap-index.xml']
  }
};
