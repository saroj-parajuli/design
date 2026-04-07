# SPSDESIGN

`@saroj-parajuli/spsdesign` is the shared SPS design system package extracted from the auth app design folder.

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
    "@saroj-parajuli/spsdesign": "file:../packages/spsdesign"
  }
}
```

Then run `npm install` in the consuming project.

### GitHub usage

```json
{
  "dependencies": {
    "@saroj-parajuli/spsdesign": "git+https://github.com/saroj-parajuli/design.git#main"
  }
}
```

For SSH-based installs:

```json
{
  "dependencies": {
    "@saroj-parajuli/spsdesign": "git+ssh://git@github.com/saroj-parajuli/design.git#main"
  }
}
```

## Use

### MUI exports

```ts
import { Box, Button, Typography } from '@saroj-parajuli/spsdesign/mui';
```

### Theme exports

```ts
import { ThemeProvider, CssBaseline, theme } from '@saroj-parajuli/spsdesign/theme';
```

### Sass entrypoint

```scss
@use '@saroj-parajuli/spsdesign/sass' as *;
```

## Build

```bash
npm install
npm run build
```

The build outputs TypeScript bundles to `dist/` and copies the raw Sass assets to `dist/sass/`.

## Publish To npm

Before publishing, confirm that you own the npm scope used by the package name.

Current package name:

```json
"name": "@saroj-parajuli/spsdesign"
```

If you do not own the `@sps` scope on npm, rename the package before publishing.

### Validate the package contents

```bash
npm run build
npm pack
```

### Publish

```bash
npm login
npm whoami
npm publish --access public
```

Because the package is scoped, public publishing requires `--access public`.