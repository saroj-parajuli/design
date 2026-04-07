# SPSDESIGN

`@sps/spsdesign` is the shared SPS design system package extracted from the auth app design folder.

It currently ships:

- centralized MUI component exports
- shared icon exports and icon lookup helpers
- reusable MUI theme objects and style helpers
- Sass tokens, mixins, utilities, and shared auth styles

## Install

### Local workspace usage

```json
{
  "dependencies": {
    "@sps/spsdesign": "file:../packages/spsdesign"
  }
}
```

Then run `npm install` in the consuming project.

## Use

### MUI exports

```ts
import { Box, Button, Typography } from '@sps/spsdesign/mui';
```

### Theme exports

```ts
import { ThemeProvider, CssBaseline, theme } from '@sps/spsdesign/theme';
```

### Sass entrypoint

```scss
@use '@sps/spsdesign/sass' as *;
```

## Build

```bash
npm install
npm run build
```

The build outputs TypeScript bundles to `dist/` and copies the raw Sass assets to `dist/sass/`.