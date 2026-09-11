import coreColorSource from '../../tokens/core.color.json';
import semanticColorSource from '../../tokens/semantic.color.json';

export type CoreColorToken = {
  name: string;
  css: `--${string}`;
  value: `#${string}`;
  description: string;
};

export type ColorModeValue = {
  value: `#${string}`;
  alias: string;
};

export type SemanticColorToken = {
  name: string;
  css: `--${string}`;
  description: string;
  light: ColorModeValue;
  dark: ColorModeValue;
};

export const coreColorTokens = coreColorSource.tokens as CoreColorToken[];
export const semanticColorTokens = semanticColorSource.tokens as SemanticColorToken[];

export const colorTokenMeta = {
  coreCount: coreColorTokens.length,
  semanticCount: semanticColorTokens.length,
  modes: ['Light', 'Dark'] as const,
  figmaFileKey: semanticColorSource.source.figmaFileKey,
};

export function getColorGroup(name: string) {
  return name.split('/')[0];
}

export function getCoreColorGroup(name: string) {
  return name.split('/')[1];
}
