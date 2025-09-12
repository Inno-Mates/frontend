'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 shadow-sm',
        destructive: 'bg-error text-white hover:bg-red-600 focus-visible:ring-red-500 shadow-sm',
        outline: 'border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:border-neutral-300 focus-visible:ring-neutral-500',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-500 shadow-sm',
        accent: 'bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500 shadow-sm',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-500',
        link: 'underline-offset-4 hover:underline text-primary-500 focus-visible:ring-primary-500',
        gradient: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 focus-visible:ring-primary-500 shadow-md',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        xl: 'h-12 px-10 rounded-lg text-base',
        '2xl': 'h-14 px-12 rounded-lg text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
      withIcon: {
        true: 'gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, withIcon, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, withIcon }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };