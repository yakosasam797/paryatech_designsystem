import { forwardRef, useEffect, useId, useRef, type InputHTMLAttributes } from 'react';
import { Icon } from '../icon/Icon';
import './selection.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'type'> & { label: string; checked?: boolean | 'mixed' };
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ label, checked, id: suppliedId, className = '', ...props }, forwardedRef) {
  const generatedId = useId(); const id = suppliedId ?? generatedId; const localRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (localRef.current) localRef.current.indeterminate = checked === 'mixed'; }, [checked]);
  const setRefs = (node: HTMLInputElement | null) => { localRef.current = node; if (typeof forwardedRef === 'function') forwardedRef(node); else if (forwardedRef) forwardedRef.current = node; };
  return <label className={`ds-choice ${className}`.trim()} htmlFor={id}><input checked={checked === 'mixed' ? false : checked} id={id} ref={setRefs} type="checkbox" {...props} /><span aria-hidden="true" className="ds-checkbox__visual"><Icon className="ds-checkbox__check" name="Check" size="s" tone="inverse" strokeWidth={3} /><span className="ds-checkbox__mixed" /></span><span className="ds-choice__label">{label}</span></label>;
});

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string };
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({ label, id: suppliedId, className = '', ...props }, ref) {
  const generatedId = useId(); const id = suppliedId ?? generatedId;
  return <label className={`ds-choice ${className}`.trim()} htmlFor={id}><input id={id} ref={ref} type="radio" {...props} /><span aria-hidden="true" className="ds-radio__visual"><span /></span><span className="ds-choice__label">{label}</span></label>;
});
