import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'node',
  entry: ['./src/index.mjs'],
  format: ['esm'],
  dts: true,
  clean: true,
})
