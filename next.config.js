const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'social-preview-fixed';

module.exports = {
  poweredByHeader: false,
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  trailingSlash: true,
};
