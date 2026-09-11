# Paryatech Design System

The production design-system repository for Paryatech. Figma defines the design intent; versioned tokens and React components in this repository are the implementation contract used by product teams and coding agents.

The first pilot covers color foundations in Storybook 10.6 for React and TypeScript.

## Run locally

```bash
npm ci
npm run storybook
```

Storybook runs at `http://localhost:6006`.

## Quality checks

```bash
npm run lint
npm run build
npm run build-storybook
npm run test:storybook
```

## Color token architecture

```text
Figma Core variables -> tokens/core.color.json
                     -> tokens/semantic.color.json (Light and Dark aliases)
                     -> generated CSS + typed TypeScript metadata
                     -> Storybook documentation and product components
```

- `tokens/core.color.json` contains the reference palette. Components must not consume it directly.
- `tokens/semantic.color.json` contains intent-based roles and their Light/Dark aliases.
- `scripts/build-color-tokens.mjs` validates aliases and generates `src/styles/tokens/colors.css`.
- `src/tokens/colors.ts` provides typed token metadata for documentation and tooling.
- `src/foundations/color` contains the Storybook foundation stories.

After changing a token source file, regenerate and validate the output:

```bash
npm run tokens:build
npm run tokens:check
```

Generated token files are committed so product repositories and automation receive deterministic output. CI rejects stale generated CSS, invalid aliases, lint failures, TypeScript errors, and Storybook build failures.

## Contribution rules

1. Preserve the Figma variable name, description, mode and alias in the token source.
2. Use semantic CSS variables such as `var(--color-text-primary)` in components.
3. Do not place raw hex values or Core reference variables in component styles.
4. Document states and both color modes in Storybook before a component is released.
5. Treat breaking token renames or removals as API changes and provide a migration path.

Design source: [PRD — Copy](https://www.figma.com/design/2uayhHpYDyrue0XL4o2Zwt/PRD--Copy-?node-id=386-253)
