import { SubNavItem } from 'types';
import { Link } from '@/components/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function SubNav({ items }: { items: SubNavItem[] }) {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="p-2">
            {item.title}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
}
