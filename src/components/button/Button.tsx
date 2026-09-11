import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../icon/Icon';
import './button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive';
  tone?: 'neutral' | 'brand';
  size?: 'small' | 'medium';
  icon?: IconName;
  loading?: boolean;
};

export function Button({ variant = 'primary', tone = 'neutral', size = 'small', icon, loading = false, disabled, children, className = '', type = 'button', ...props }: ButtonProps) {
  const shownIcon = loading ? 'RefreshCw' : icon;
  return (
    <button aria-busy={loading || undefined} className={`ds-button ds-button--${variant} ds-button--${tone} ds-button--${size} ${className}`.trim()} disabled={disabled || loading} type={type} {...props}>
      {shownIcon && <Icon className={loading ? 'ds-button__spinner' : ''} name={shownIcon} size={size === 'small' ? 14 : 16} tone={variant === 'primary' ? 'inverse' : variant === 'destructive' ? 'danger' : 'interactive'} />}
      <span>{loading ? 'Loading' : children}</span>
    </button>
  );
}

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  label: string;
  icon: IconName;
  size?: 'row' | 'toolbar';
  shape?: 'square' | 'circle';
  active?: boolean;
};

export function IconButton({ label, icon, size = 'row', shape = 'square', active = false, className = '', ...props }: IconButtonProps) {
  return <button aria-label={label} aria-pressed={active || undefined} className={`ds-icon-button ds-icon-button--${size} ds-icon-button--${shape} ${className}`.trim()} title={label} type="button" {...props}><Icon name={icon} size={size === 'row' ? 16 : 20} /></button>;
}
