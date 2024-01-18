import { notFound } from 'next/navigation';
import { allDocs as posts } from 'contentlayer/generated';

import { MDXContent } from '@/components/mdx-components';
import { PageHeader } from '@/components/page-header';

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PageProps['params']) {
  const slug = params.slug?.join('/') || '';
  const post = posts.find((post) => post.slugAsParams === slug);

  if (!post) return null;

  return post;
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function Page({ params }: PageProps) {
  // Find the post for the current page.
  const post = await getPostFromParams(params);

  // 404 if the post does not exist.
  if (!post) notFound();

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid">
      <div className="mx-auto w-full min-w-0">
        <PageHeader heading={post.title} text={post.description} />
        <MDXContent code={post.body.code} />
      </div>
    </main>
  );
}
