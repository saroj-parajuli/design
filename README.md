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

### GitHub usage

```json
{
  "dependencies": {
    "@sps/spsdesign": "git+https://github.com/saroj-parajuli/design.git#main"
  }
}
```

For SSH-based installs:

```json
{
  "dependencies": {
    "@sps/spsdesign": "git+ssh://git@github.com/saroj-parajuli/design.git#main"
  }
}
```

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

## Publish To npm

Before publishing, confirm that you own the npm scope used by the package name.

Current package name:

```json
"name": "@sps/spsdesign"
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