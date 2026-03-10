import { useParams, Link } from "react-router-dom";
import { PenLine, ArrowRight } from "lucide-react";
import { articles } from "@/data/content";
import EmailCapture from "@/components/home/EmailCapture";
import { Button } from "@/components/ui/button";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

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
        </div>
      </section>

      <div className="container-article section-padding">
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

        {/* Content placeholder */}
        <div className="space-y-6">
          <p className="font-body text-base leading-relaxed text-foreground/80">
            Full article content will be rendered here once the markdown articles
            are added to the site. The article template supports rich formatting
            including comparison tables, pros/cons boxes, inline email capture,
            and structured data.
          </p>
        </div>

        {/* Inline Email */}
        <EmailCapture variant="inline" />

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
