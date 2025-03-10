import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: process.env.PUBLIC_URL || '/',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: { noExternal: ['antd-mobile'] },
});
