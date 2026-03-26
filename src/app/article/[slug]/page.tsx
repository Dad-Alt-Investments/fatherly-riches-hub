import { articles } from "@/data/content";
import { notFound } from "next/navigation";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import { getImageMetadata } from "@/lib/metadata/images";
import AuthorBio from "@/components/AuthorBio";
import { AffiliateLink } from "@/components/AffiliateLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) return {};

  return generateSEOMetadata({
    title: `${article.title} | DadAlt Investments`,
    description: article.description,
    path: `/article/${article.slug}`,
    image: article.image,
    type: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Handle image metadata through our centralized Persona engine
  const imageFileName = article.image ? article.image.split("/").pop() || "" : "";
  const meta = imageFileName ? getImageMetadata(imageFileName) : null;

  return (
    <article className="container-article py-12 lg:py-20">
      <header className="mb-12 text-center">
        <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-primary">
          {article.category}
        </div>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-muted-foreground">
          {article.description}
        </p>
      </header>

      {article.image && meta && (
        <figure className="mb-12 overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src={article.image}
            alt={meta.altText}
            title={meta.caption}
            width={1200}
            height={630}
            className="w-full object-cover"
            priority
          />
        </figure>
      )}

      <div className="prose prose-lg mx-auto font-body text-foreground prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        {/* Render simulated article content since full markdown/content isn't available in data array */}
        <h2>Introduction to {article.category}</h2>
        <p>
          Investments require rigorous due diligence. We believe that family capital should be protected carefully. 
          When considering tools, always verify their features and fee structures. For instance, you could use an <AffiliateLink href="https://example.com/affiliate">Affiliate Tool</AffiliateLink> to make your process easier, but do your own due diligence.
        </p>
        <p>
          This is a server-rendered article component taking advantage of robust SEO optimizations! Next.js 15 brings exceptional performance and Zero CLS.
        </p>
      </div>

      <AuthorBio variant="full" />
    </article>
  );
}
