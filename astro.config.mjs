// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: [
              'preset-default',
              'removeTitle',
              'removeDesc',
              'removeDoctype',
              'cleanupIds',
            ],
          },
        },
      }),
    ],
    resolve: {
      alias: {
        'assets/*': '/src/assets',
        'components/*': '/src/components',
        'shared/*': '/src/shared',
        'layouts/*': '/src/layouts',
        'features/*': '/src/features',
      },
    },
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
  experimental: {
    svg: true,
  },
})
