import NextLink from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  scroll?: boolean;
  variant?: ButtonProps['variant'];
  className?: string;
  [key: string]: unknown;
}

export function Link({
  children,
  href,
  scroll = true,
  variant = 'link',
  className = '',
  ...rest
}: LinkProps) {
  return (
    <Button variant={variant} className={className} asChild {...rest}>
      <NextLink href={href} scroll={scroll}>
        {children}
      </NextLink>
    </Button>
  );
}
