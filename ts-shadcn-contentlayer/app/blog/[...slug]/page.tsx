import { notFound } from 'next/navigation';
import { allPosts as posts } from 'contentlayer/generated';
import { MDXContent } from '@/components/mdx-components';

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

  return <MDXContent code={post.body.code} />;
}
