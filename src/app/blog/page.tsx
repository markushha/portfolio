import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col mb-8">
          <h1 className="font-medium text-2xl tracking-tighter">My blog</h1>
          <p className="tracking-tight text-primary/70">
            I will try to share my thoughts & news there
          </p>
        </div>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {new Date(post.metadata.publishedAt).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
