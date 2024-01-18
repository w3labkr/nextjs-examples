import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Button variant="outline" asChild>
        <Link href="/blog/hello-world">Hello World!</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/blog/typography">typography</Link>
      </Button>
    </div>
  );
}
