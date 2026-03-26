import { articles } from "@/data/content";
import { notFound } from "next/navigation";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { getImageMetadata } from "@/lib/metadata/images";
import Image from "next/image";
import AuthorBio from "@/components/AuthorBio";
import ArticleContent from "@/components/ArticleContent";
import { articleFaqs, FaqItem } from "@/data/faq-data";
import fs from "fs";
import path from "path";

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

async function getArticleMarkdown(slug: string): Promise<string | null> {
  const filePath = path.join(process.cwd(), "public", "articles", `${slug}.md`);
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
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

  const markdown = await getArticleMarkdown(resolvedParams.slug);
  const faqData = articleFaqs[resolvedParams.slug];

  const imageFileName = article.image ? article.image.split("/").pop() || "" : "";
  const meta = imageFileName ? getImageMetadata(imageFileName) : null;

  // Build FAQ JSON-LD
  const faqJsonLd = faqData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <article className="container-article py-12 lg:py-20">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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

      {/* Direct Answer Block */}
      {faqData && (
        <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6">
          <h2 className="mb-2 font-heading text-lg font-bold text-foreground">
            The Short Answer
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            {faqData.directAnswer}
          </p>
        </div>
      )}

      {/* Markdown Article Content */}
      {markdown ? (
        <ArticleContent content={markdown} />
      ) : (
        <div className="prose prose-lg mx-auto font-body text-foreground prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          <p>This article content is coming soon.</p>
        </div>
      )}

      {/* FAQ Section */}
      {faqData && (
        <section className="mt-16 rounded-xl border bg-card p-8">
          <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 font-body text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <AuthorBio variant="full" />
    </article>
  );
}
