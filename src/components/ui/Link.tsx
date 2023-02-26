import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils';

import ButtonOrLink, { type Props as ButtonOrLinkProps } from './ButtonOrLink';

const linkStyles = tv({
  base: cn(
    'underline decoration-zinc-700 decoration-wavy decoration-from-font transition-colors',
    'dark:decoration-zinc-300',
    'hover:text-black hover:decoration-black',
    'dark:hover:text-white dark:hover:decoration-white',
    'outline-2 outline-offset-1 outline-current',
    'focus:outline'
  ),
  variants: {},
  defaultVariants: {},
});

type LinkVariants = VariantProps<typeof linkStyles>;

interface Props extends ButtonOrLinkProps, LinkVariants {
  isExternal?: boolean;
}

const Link = ({ className, isExternal, ...props }: Props) => {
  if (isExternal)
    return (
      <ButtonOrLink
        target='_blank'
        rel='noopener noreferrer'
        className={linkStyles({ className })}
        {...props}
      />
    );

  return <ButtonOrLink className={linkStyles({ className })} {...props} />;
};

export default Link;
