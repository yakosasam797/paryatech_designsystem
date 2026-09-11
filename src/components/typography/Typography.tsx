import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type HeadingVariant = 'display' | 'page' | 'section' | 'card' | 'compact';
export type TextVariant = 'body-lg' | 'body-md' | 'body-sm' | 'label-md' | 'label-sm' | 'caption' | 'overline' | 'data-md' | 'data-sm';

const headingClasses: Record<HeadingVariant, string> = {
  display: 'type-display-lg', page: 'type-heading-page', section: 'type-heading-section', card: 'type-heading-card', compact: 'type-heading-compact',
};
const textClasses: Record<TextVariant, string> = {
  'body-lg': 'type-body-lg', 'body-md': 'type-body-md', 'body-sm': 'type-body-sm', 'label-md': 'type-label-md', 'label-sm': 'type-label-sm', caption: 'type-caption', overline: 'type-overline', 'data-md': 'type-data-md', 'data-sm': 'type-data-sm',
};

type PolymorphicProps<T extends ElementType> = { as?: T; children: ReactNode; className?: string } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Heading<T extends ElementType = 'h2'>({ as, variant = 'section', className = '', ...props }: PolymorphicProps<T> & { variant?: HeadingVariant }) {
  const Component = as ?? 'h2';
  return <Component className={`${headingClasses[variant]} ${className}`.trim()} {...props} />;
}

export function Text<T extends ElementType = 'p'>({ as, variant = 'body-md', className = '', ...props }: PolymorphicProps<T> & { variant?: TextVariant }) {
  const Component = as ?? 'p';
  return <Component className={`${textClasses[variant]} ${className}`.trim()} {...props} />;
}
