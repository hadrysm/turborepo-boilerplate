import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerVariant = 'full' | 'xl' | 'lg' | 'md';

const containerVariants: Record<ContainerVariant, string> = {
  full: 'w-full',
  xl: 'w-full max-w-6xl mx-auto px-4 xl:px-0',
  lg: 'w-full max-w-3xl mx-auto px-4 md:px-0',
  md: 'w-full max-w-xl mx-auto px-4 sm:px-0',
};

export interface ContainerProps {
  children?: ReactNode;
  variant?: ContainerVariant;
  className?: string;
}

export const Container = ({ children, variant = 'xl', className }: ContainerProps) => {
  const styles = clsx(variant && containerVariants[variant], className);

  return <div className={styles}>{children}</div>;
};
