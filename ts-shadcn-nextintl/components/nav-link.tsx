'use client';

import { Link, usePathname } from '@/navigation';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface NavLinkProps extends ButtonProps {
  children: React.ReactNode;
  href: string;
  scroll?: boolean;
  variant?: ButtonProps['variant'];
  className?: string;
  [key: string]: unknown;
}

export function NavLink({
  children,
  href,
  scroll = true,
  variant = 'link',
  className = '',
  ...rest
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Button
      variant={variant}
      className={cn(pathname !== href && 'text-muted-foreground', className)}
      asChild
      {...rest}
    >
      <Link href={href} scroll={scroll}>
        {children}
      </Link>
    </Button>
  );
}
