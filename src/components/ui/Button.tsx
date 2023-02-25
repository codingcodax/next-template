import { tv, type VariantProps } from 'tailwind-variants';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = tv({
  base: 'flex w-fit items-center justify-center border font-medium',
  variants: {
    intent: {
      primary: 'bg-white text-black',
      secondary:
        'border-zinc-700 bg-transparent transition-colors hover:border-zinc-600 hover:bg-zinc-800',
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

interface Props extends ButtonOrLinkProps, ButtonVariants {}

const Button = ({ intent, size, ...props }: Props) => {
  return <ButtonOrLink className={buttonStyles({ intent, size })} {...props} />;
};

export default Button;
