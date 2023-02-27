import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = tv({
  base: 'flex w-fit items-center justify-center border font-medium',
  variants: {
    intent: {
      primary: cn(
        'border-zinc-300 bg-transparent text-black transition-colors',
        'dark:border-zinc-700 dark:text-white',
        'hover:border-zinc-400 hover:bg-zinc-200',
        'dark:hover:border-zinc-600 dark:hover:bg-zinc-800',
        'outline-2 outline-offset-1 outline-current',
        'focus:outline'
      ),
    },
    size: {
      smal: 'px-3 h-7 text-xs',
      medium: 'h-8 px-4 text-sm',
      large: 'px-6 h-12 text-md',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

interface Props extends ButtonOrLinkProps, ButtonVariants { }

const Button = ({ intent, size, className, ...props }: Props) => {
  return (
    <ButtonOrLink
      className={buttonStyles({ intent, size, class: className })}
      {...props}
    />
  );
};

export default Button;
