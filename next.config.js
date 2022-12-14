/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require('./package.json');
const customCache = require('./public/customCache');
const isProd = process.env.NODE_ENV === 'production';
const scope = process.env.NEXT_PUBLIC_SCOPE;
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
  fallbacks: {
    document: `${scope}/_offline`,
  },
  runtimeCaching: customCache,
});

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: scope,
  compiler: {
    emotion: true,
  },
  publicRuntimeConfig: {
    version,
  },
  swcMinify: true,
  images: {
    path: `${scope}/_next/image`,
    domains: [
      'desenv-template-be.sop.ce.gov.br',
      'template-be.sop.ce.gov.br',
      'sigsopedificacoes.sop.ce.gov.br',
      'sigsoprodovias.sop.ce.gov.br',
      'sigsopedificacoes-deploy',
      'win10-desenv',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'removeDimensions',
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: scope,
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = () => {
  const plugins = [withPWA];
  return plugins.reduce((acc, next) => next(acc), nextConfig);
};
