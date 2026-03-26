import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PenLine, ArrowRight } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "@/data/content";
import { articleFaqs } from "@/data/faq-data";
import EmailCapture from "@/components/home/EmailCapture";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  usePageMeta({
    title: article
      ? `${article.title} | DadAlt Investments`
      : "Article Not Found | DadAlt Investments",
    description: article
      ? article.description
      : "This article could not be found on DadAlt Investments.",
  });

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`/articles/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(() => {
        setMarkdown(null);
        setLoading(false);
      });
  }, [slug]);

  if (!article) {
    return (
      <div className="container-article section-padding text-center">
        <h1 className="font-heading text-3xl font-bold">Article Not Found</h1>
        <Link to="/" className="mt-4 inline-block font-body text-primary">
          Go Home
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(
      (a) =>
        a.slug !== article.slug &&
        (a.categorySlug === article.categorySlug ||
          a.tags.some((t) => article.tags.includes(t)))
    )
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-article section-padding text-center">
          <Link
            to={`/category/${article.categorySlug}`}
            className="mb-3 inline-block font-body text-sm font-semibold uppercase tracking-wider text-primary"
          >
            {article.category}
          </Link>
          <h1 className="font-heading text-3xl font-bold leading-tight text-secondary-foreground md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary-foreground/10 px-3 py-1 font-body text-xs text-secondary-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <AuthorBio variant="byline" />
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {article.image && (
        <div className="container-article -mt-2">
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-lg object-cover shadow-lg"
            style={{ maxHeight: "420px" }}
            loading="eager"
          />
        </div>
      )}

      <div className="container-article section-padding">
        {/* FAQ JSON-LD Schema */}
        {articleFaqs[article.slug] && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: articleFaqs[article.slug].faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              }),
            }}
          />
        )}

        {/* Direct Answer Block */}
        {articleFaqs[article.slug] && (
          <div className="mb-8 rounded-lg border border-accent/30 bg-accent/5 p-5 md:p-6">
            <p className="mb-1 font-heading text-xs font-bold uppercase tracking-wider text-accent">
              The Short Answer
            </p>
            <p className="font-body text-base font-medium leading-relaxed text-foreground/90">
              {articleFaqs[article.slug].directAnswer}
            </p>
          </div>
        )}
        {/* Dad's Bottom Line */}
        <div className="bottom-line-box mb-12 p-6 md:p-8">
          <div className="mb-3 flex items-center gap-2">
            <PenLine className="h-5 w-5 text-accent" />
            <h2 className="font-heading text-lg font-bold text-secondary-foreground">
              Dad's Bottom Line
            </h2>
          </div>
          <p className="font-body text-base leading-relaxed text-secondary-foreground/85">
            {article.description} This is your quick-reference summary — read
            the full guide below for the complete breakdown with data, comparisons,
            and actionable next steps.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-secondary-foreground/15 pt-4">
            <div>
              <p className="font-body text-xs font-semibold uppercase text-secondary-foreground/50">
                Best For
              </p>
              <p className="mt-1 font-body text-sm text-secondary-foreground/80">
                {article.tags.includes("Beginner Guides")
                  ? "Beginners"
                  : "Intermediate"}
              </p>
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase text-secondary-foreground/50">
                Risk Level
              </p>
              <p className="mt-1 font-body text-sm text-secondary-foreground/80">
                Moderate
              </p>
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase text-secondary-foreground/50">
                Time
              </p>
              <p className="mt-1 font-body text-sm text-secondary-foreground/80">
                10 min read
              </p>
            </div>
          </div>
        </div>

        {/* Quick Recommendation CTA */}
        <div className="mb-12 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="font-heading text-lg font-semibold">
            If You Just Want the Recommendation
          </p>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            We've done the research. Here's our top pick for this category.
          </p>
          <Button
            className="mt-4 bg-primary font-body font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            View Recommended Platform
          </Button>
        </div>

        {/* Article Content */}
        <div className="prose-dadalt mb-12">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : markdown ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-3 font-heading text-xl font-semibold text-foreground">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="mt-6 mb-2 font-heading text-lg font-semibold text-foreground">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="mb-4 font-body text-base leading-relaxed text-foreground/80">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 ml-6 list-disc space-y-2 font-body text-base text-foreground/80">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 ml-6 list-decimal space-y-2 font-body text-base text-foreground/80">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-6 border-l-4 border-primary/40 bg-primary/5 py-3 pl-4 pr-4 font-body italic text-foreground/70">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
                hr: () => (
                  <hr className="my-8 border-border" />
                ),
                table: ({ children }) => (
                  <div className="my-6 overflow-x-auto rounded-lg border border-border">
                    <table className="w-full border-collapse font-body text-sm">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-secondary text-secondary-foreground">
                    {children}
                  </thead>
                ),
                th: ({ children }) => (
                  <th className="border-b border-border px-4 py-3 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-b border-border/50 px-4 py-3 text-foreground/80">
                    {children}
                  </td>
                ),
                sup: ({ children }) => (
                  <sup className="text-xs text-primary/60">{children}</sup>
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          ) : (
            <p className="font-body text-base leading-relaxed text-foreground/80">
              Full article content will be rendered here once the markdown articles
              are added to the site. The article template supports rich formatting
              including comparison tables, pros/cons boxes, inline email capture,
              and structured data.
            </p>
          )}
        </div>

        {/* Inline Email */}
        <EmailCapture variant="inline" />

        {/* FAQ Section */}
        {articleFaqs[article.slug] && (
          <div className="mb-12">
            <h3 className="mb-4 font-heading text-xl font-bold">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {articleFaqs[article.slug].faqs.map((faq, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-5">
                  <p className="font-heading text-base font-semibold text-foreground">{faq.question}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Risk & Reality */}
        <div className="mb-12 rounded-lg border border-accent/20 bg-accent/5 p-6">
          <h3 className="font-heading text-lg font-semibold">
            Risk & Reality Check
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
            Every investment carries risk. Past performance doesn't guarantee
            future results. This guide is educational — not financial advice.
            Always do your own research and consult a qualified advisor before
            making investment decisions.
          </p>
        </div>

        {/* Related Guides */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-4 font-heading text-xl font-bold">
              Related Guides
            </h3>
            <div className="space-y-3">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  to={`/article/${ra.slug}`}
                  className="trust-card group flex items-center justify-between"
                >
                  <div>
                    <p className="font-body text-xs font-medium text-primary">
                      {ra.category}
                    </p>
                    <h4 className="font-heading text-base font-semibold">
                      {ra.title}
                    </h4>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* End CTA */}
        <div className="bottom-line-box p-6 text-center md:p-8">
          <p className="font-heading text-lg font-bold text-secondary-foreground">
            If this sounds right for you:
          </p>
          <Button className="mt-4 bg-primary font-body font-semibold text-primary-foreground hover:bg-primary/90">
            <ArrowRight className="mr-2 h-4 w-4" />
            Check Out Our Top Pick
          </Button>
          <p className="mt-3 font-body text-sm text-secondary-foreground/60">
            Or{" "}
            <Link to="/start-here" className="text-primary underline">
              start with our Beginner Guide
            </Link>
          </p>
        </div>
      </div>

      <EmailCapture />
    </>
  );
};

export default ArticlePage;
