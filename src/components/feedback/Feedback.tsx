import { cloneElement, useId, type ReactElement, type ReactNode } from 'react';
import './feedback.css';

export type StatusTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export function Status({ children, tone = 'neutral', showDot = true }: { children: ReactNode; tone?: StatusTone; showDot?: boolean }) {
  return <span className={`ds-status ds-status--${tone}`}>{showDot && <i aria-hidden="true" />}{children}</span>;
}

export function Badge({ children, selected = false, disabled = false, count = false }: { children: ReactNode; selected?: boolean; disabled?: boolean; count?: boolean }) {
  return <span aria-disabled={disabled || undefined} className={`ds-badge${selected ? ' ds-badge--selected' : ''}${disabled ? ' ds-badge--disabled' : ''}${count ? ' ds-badge--count' : ''}`}>{children}</span>;
}

export function Tag({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'brand' | 'accent' }) {
  return <span className={`ds-tag ds-tag--${tone}`}>{children}</span>;
}

export function Tooltip({ content, children, side = 'top' }: { content: ReactNode; children: ReactElement<Record<string, unknown>>; side?: 'top' | 'bottom' }) {
  const id = useId();
  const describedBy = [children.props['aria-describedby'], id].filter(Boolean).join(' ');
  return <span className={`ds-tooltip ds-tooltip--${side}`}>{cloneElement(children, { 'aria-describedby': describedBy })}<span className="ds-tooltip__content" id={id} role="tooltip">{content}</span></span>;
}
