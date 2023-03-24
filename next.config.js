/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // Use o caminho base correto se o seu repositório não for um repositório de usuário ou organização.
  basePath: '/Site-Acordar',
  assetPrefix: '/Site-Acordar/',
  trailingSlash: true,
}

module.exports = nextConfig
