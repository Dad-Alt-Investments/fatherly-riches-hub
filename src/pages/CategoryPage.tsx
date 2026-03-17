import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories, articles } from "@/data/content";
import EmailCapture from "@/components/home/EmailCapture";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryArticles = articles.filter((a) => a.categorySlug === slug);

  if (!category) {
    return (
      <div className="container-article section-padding text-center">
        <h1 className="font-heading text-3xl font-bold">Category Not Found</h1>
        <Link to="/" className="mt-4 inline-block font-body text-primary">
          Go Home
        </Link>
      </div>
    );
  }

  const beginnerArticles = categoryArticles.filter((a) =>
    a.tags.includes("Beginner Guides")
  );
  const otherArticles = categoryArticles.filter(
    (a) => !a.tags.includes("Beginner Guides")
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-article section-padding text-center">
          <h1 className="font-heading text-4xl font-bold text-secondary-foreground md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-secondary-foreground/70">
            {category.intro}
          </p>
        </div>
      </section>

      <div className="container-article section-padding">
        {/* Beginner Section */}
        {beginnerArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-6 font-heading text-2xl font-bold">
              Best for Beginners
            </h2>
            <div className="space-y-4">
              {beginnerArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/article/${article.slug}`}
                  className="trust-card group flex items-center gap-4"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-20 w-28 shrink-0 rounded-md object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold">
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
        )}

        {/* All Guides */}
        {otherArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-6 font-heading text-2xl font-bold">
              All {category.name} Guides
            </h2>
            <div className="space-y-4">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/article/${article.slug}`}
                  className="trust-card group flex items-center justify-between"
                >
                  <div>
                    <div className="mb-1 flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-lg font-semibold">
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
        )}
      </div>

      <EmailCapture />
    </>
  );
};

export default CategoryPage;
