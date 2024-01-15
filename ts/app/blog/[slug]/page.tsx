/**
 * Dynamic Routes
 *
 * For example, a blog could include the following route app/blog/[slug]/page.js where [slug] is the Dynamic Segment for blog posts.
 *
 * @link https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
 *
 * @returns
 */
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
