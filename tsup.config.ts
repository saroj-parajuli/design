import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'mui/index': 'src/mui/index.ts',
    'theme/index': 'src/theme/index.ts',
    'animations/index': 'src/animations/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: false,
  outDir: 'dist',
  external: [
    'react',
    'react-dom',
    '@emotion/react',
    '@emotion/styled',
    '@mui/material',
    '@mui/material/styles',
    '@mui/material/useMediaQuery',
    '@mui/icons-material',
    /^@mui\/icons-material\//,
  ],
});