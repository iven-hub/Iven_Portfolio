/** @type {import('next').NextConfig} *///configura o Next.js para trabalhar com o modo estrito do React e com o pacote styled-components.
const nextConfig = {
  reactStrictMode: true,// problemas no código,
  compiler: {//compilação  com styled
    styledComponents: true
  }
}

module.exports = nextConfig
