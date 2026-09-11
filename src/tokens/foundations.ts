import foundationSource from '../../tokens/foundations.json';

export type NumericFoundationToken = {
  name: string;
  css: string;
  value: number;
  alias?: string;
  unit?: string;
  description: string;
};

export type TypographyStyleToken = (typeof foundationSource.typographyStyles)[number];
export type ElevationToken = (typeof foundationSource.elevation)[number];
export type ResponsiveToken = (typeof foundationSource.responsive.tokens)[number];

export const foundationTokens = foundationSource;
export const spacingTokens = foundationSource.spacing as NumericFoundationToken[];
export const radiusTokens = foundationSource.radius as NumericFoundationToken[];
export const sizingTokens = foundationSource.sizing as NumericFoundationToken[];
export const borderTokens = foundationSource.border as NumericFoundationToken[];
export const focusTokens = foundationSource.opacityFocus as NumericFoundationToken[];
export const typographyStyles = foundationSource.typographyStyles;
export const elevationTokens = foundationSource.elevation;
export const responsiveTokens = foundationSource.responsive.tokens;
