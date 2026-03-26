import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import { categories, articles } from "@/data/content";
import EmailCapture from "@/components/home/EmailCapture";

const Resources = () => {

  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-article section-padding text-center">
          <div className="dad-badge mb-4 inline-flex">
            <Award className="h-3.5 w-3.5" />
            Dad Recommended
          </div>
          <h1 className="font-heading text-4xl font-bold text-secondary-foreground md:text-5xl">
            Recommended Investment Tools &amp; Platforms
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-secondary-foreground/70">
            Every platform, tool, and service here has been personally vetted.
            We only recommend what we'd use ourselves or refer to family.
          </p>
        </div>
      </section>

      <div className="container-article section-padding">
        {categories.map((cat) => {
          const catArticles = articles.filter(
            (a) =>
              a.categorySlug === cat.slug &&
              a.tags.includes("Tools & Platforms")
          );
          if (catArticles.length === 0) return null;

          return (
            <div key={cat.slug} className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-bold">{cat.name}</h2>
              <div className="space-y-3">
                {catArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/article/${article.slug}`}
                    className="trust-card group flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-heading text-base font-semibold">
                        {article.title}
                      </h3>
                      <p className="mt-1 font-body text-sm text-muted-foreground">
                        {article.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <EmailCapture />
    </>
  );
};

export default Resources;
