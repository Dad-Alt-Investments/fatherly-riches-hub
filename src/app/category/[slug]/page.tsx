import { categories, articles } from "@/data/content";
import { notFound } from "next/navigation";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.slug);

  if (!category) return {};

  return generateSEOMetadata({
    title: `${category.name} | DadAlt Investments`,
    description: category.description,
    path: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(
    (a) => a.categorySlug === resolvedParams.slug && a.published
  );

  return (
    <div className="container-wide section-padding py-12">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          {category.intro}
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
          >
            <div>
              <h3 className="font-heading text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="mt-3 line-clamp-3 font-body text-sm text-muted-foreground">
                {article.description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 font-body text-sm font-semibold text-primary">
              Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
