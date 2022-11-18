import clsx from 'clsx';
import { ReactNode } from 'react';

type GapOption = 'xs' | 'sm' | 'md' | 'lg';

type GridVariant = 'responsive-fit' | 'responsive-fill';
export interface GridProps {
  children?: ReactNode;
  className?: string;
  gap?: GapOption;
  variant?: GridVariant;
}

const gapVariants: Record<GapOption, string> = {
  lg: 'gap-4', // [16px]
  md: 'gap-6 lg:gap-8', // [24px ,'32px']
  sm: 'gap-8 lg:gap-10', // [32px, 40px]
  xs: 'gap-20 lg:gap-24', // [80px, 96px]
};

const gridVariants: Record<GridVariant, string> = {
  'responsive-fit': 'grid-cols-responsive-fit',
  'responsive-fill': 'grid-cols-responsive-fill',
};

export const Grid = ({ children, variant = 'responsive-fit', gap, className }: GridProps) => {
  const wrapperStyles = clsx('grid', gridVariants[variant], gap && gapVariants[gap], className);

  return <div className={wrapperStyles}>{children}</div>;
};
