import { forwardRef, useId, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { Icon } from '../icon/Icon';
import './fields.css';

type FieldChromeProps = { id?: string; label: string; error?: string; helper?: string; required?: boolean; children: React.ReactNode };

function FieldChrome({ id, label, error, helper, required, children }: FieldChromeProps) {
  return <div className={`ds-field${error ? ' ds-field--error' : ''}`}><label className="ds-field__label" htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>{children}{(error || helper) && <p className="ds-field__message" id={`${id}-message`}>{error ?? helper}</p>}</div>;
}

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & { label: string; error?: string; helper?: string; dataValue?: boolean };
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ id: suppliedId, label, error, helper, required, dataValue, className = '', ...props }, ref) {
  const generatedId = useId(); const id = suppliedId ?? generatedId; const describedBy = error || helper ? `${id}-message` : undefined;
  return <FieldChrome error={error} helper={helper} id={id} label={label} required={required}><input aria-describedby={describedBy} aria-invalid={Boolean(error)} className={`ds-field__control${dataValue ? ' type-data-md' : ''} ${className}`.trim()} id={id} ref={ref} required={required} {...props} /></FieldChrome>;
});

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string; helper?: string };
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ id: suppliedId, label, error, helper, required, className = '', ...props }, ref) {
  const generatedId = useId(); const id = suppliedId ?? generatedId; const describedBy = error || helper ? `${id}-message` : undefined;
  return <FieldChrome error={error} helper={helper} id={id} label={label} required={required}><textarea aria-describedby={describedBy} aria-invalid={Boolean(error)} className={`ds-field__control ds-field__textarea ${className}`.trim()} id={id} ref={ref} required={required} {...props} /></FieldChrome>;
});

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { label: string; error?: string; helper?: string; placeholder?: string };
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select({ id: suppliedId, label, error, helper, required, placeholder, children, className = '', ...props }, ref) {
  const generatedId = useId(); const id = suppliedId ?? generatedId; const describedBy = error || helper ? `${id}-message` : undefined;
  return <FieldChrome error={error} helper={helper} id={id} label={label} required={required}><div className="ds-select-wrap"><select aria-describedby={describedBy} aria-invalid={Boolean(error)} className={`ds-field__control ds-field__select ${className}`.trim()} id={id} ref={ref} required={required} {...props}>{placeholder && <option value="">{placeholder}</option>}{children}</select><Icon name="ChevronDown" size="m" tone="muted" /></div></FieldChrome>;
});
