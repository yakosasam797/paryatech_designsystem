import type { CSSProperties } from 'react';
import { iconRegistry, type IconName } from './icons';
import './icon.css';
export type { IconName } from './icons';
export type IconSize = 's' | 'm' | 'l' | 'xl' | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 24;
export type IconTone = 'default' | 'muted' | 'interactive' | 'inverse' | 'success' | 'warning' | 'danger' | 'info';

const semanticSizes = { s: 'var(--size-icon-s)', m: 'var(--size-icon-m)', l: 'var(--size-icon-l)', xl: 'var(--size-icon-xl)' };

export type IconProps = { name: IconName; size?: IconSize; tone?: IconTone; label?: string; className?: string; strokeWidth?: number };

export function Icon({ name, size = 'm', tone = 'default', label, className = '', strokeWidth = 2 }: IconProps) {
  const Glyph = iconRegistry[name];
  const dimension = typeof size === 'number' ? `${size}px` : semanticSizes[size];
  const style = { '--icon-size': dimension } as CSSProperties;
  return <Glyph aria-hidden={label ? undefined : true} aria-label={label} className={`ds-icon ds-icon--${tone} ${className}`.trim()} role={label ? 'img' : undefined} strokeWidth={strokeWidth} style={style} />;
}
