import type { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export type Props = ButtonOrLinkProps;

export const ButtonOrLink = ({ href, ...props }: Props) => {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  const content = <ButtonOrLink {...props} />;

  if (isLink)
    return (
      <Link legacyBehavior href={href}>
        {content}
      </Link>
    );

  return content;
};

export default ButtonOrLink;
