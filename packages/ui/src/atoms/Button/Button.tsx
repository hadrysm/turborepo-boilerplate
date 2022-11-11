import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  const styles = clsx('rounded-lg bg-primary px-6 py-4 text-white', className);

  return (
    <button className={styles} type="button" {...rest}>
      {children}
    </button>
  );
};
