import EmailCapture from "@/components/home/EmailCapture";
import AuthorBio from "@/components/AuthorBio";
import jaredPhoto from "@/assets/jared-devalk.jpeg";
import { usePageMeta } from "@/hooks/use-page-meta";

const About = () => {
  usePageMeta({
    title: "About DadAlt Investments — Honest Wealth-Building Education for Dads",
    description: "DadAlt Investments provides clear, honest investment education for American dads. No hype, no jargon — just practical guidance on stocks, crypto, gold, real estate, and business ownership.",
  });

  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-article section-padding text-center">
          <h1 className="font-heading text-4xl font-bold text-secondary-foreground md:text-5xl">
            About DadAlt Investments
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-secondary-foreground/70">
            Why this site exists — and who it's for.
          </p>
        </div>
      </section>

      <div className="container-article section-padding">
        <div className="prose-dadalt space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">The Mission</h2>
            <p className="mt-3 font-body text-base leading-relaxed text-foreground/80">
              DadAlt Investments exists for one reason: to give American dads
              clear, honest, and practical guidance on building wealth beyond
              traditional stock market investing. No hype, no jargon, no
              get-rich-quick promises — just straight-talking education from
              someone who's been in the trenches.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold">Who This Is For</h2>
            <p className="mt-3 font-body text-base leading-relaxed text-foreground/80">
              You're a dad — probably between 30 and 55 — who's serious about
              building real wealth for your family. You don't have time for
              day-trading or crypto Twitter drama. You want proven strategies,
              vetted tools, and honest recommendations that respect your
              intelligence and your time.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold">
              How We Make Money
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-foreground/80">
              Some links on this site are affiliate links. That means if you
              click through and sign up for a service, we may earn a commission
              — at no extra cost to you. This never influences our rankings or
              recommendations. We only feature platforms and tools we would
              personally use or recommend to our own family members.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold">Our Promise</h2>
            <ul className="mt-3 space-y-2 font-body text-base text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Every recommendation is based on real research and real data
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Every affiliate relationship is fully disclosed
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                We will never use fear, urgency, or manipulation to drive clicks
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Content is educational — not financial advice
              </li>
            </ul>
          </div>

          {/* Founder Story — E-E-A-T Optimized */}
          <div className="mt-16 border-t pt-12">
            <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <img
                src={jaredPhoto}
                alt="Jared DeValk — founder of DadAlt Investments, alternative investment educator and father helping dads build generational wealth"
                className="h-40 w-40 shrink-0 rounded-xl object-cover object-top shadow-md"
              />
              <div>
                <h2 className="font-heading text-2xl font-bold">
                  About the Founder
                </h2>
                <p className="mt-3 font-body text-lg font-medium leading-relaxed text-foreground/90">
                  Hi, I'm Jared DeValk — father of two, licensed real estate professional, and the guy who lost $100,000 learning what <em>not</em> to do with money.
                </p>
              </div>
            </div>

            <div className="space-y-5 font-body text-base leading-relaxed text-foreground/80">
              {/* Paragraph 1: The "Why" — Loss & Responsibility */}
              <p>
                My dad, Jack DeValk, put my first $100 into the stock market when I was a kid. He taught me that investing wasn't gambling — it was planning. Then in 2011, at 57, he died in a freak accident. I was 23 with a baby on the way, a fiancé, and suddenly no one to ask the hard money questions. I poured cash into gurus, courses, and bad deals — chasing confidence I didn't have. By the time the dust settled, I'd burned through six figures and had nothing but expensive lessons.
              </p>

              {/* Paragraph 2: The "How" — Years of Testing & Learning */}
              <p>
                Over the next 14 years, I rebuilt from scratch. I studied every alternative asset class I could get my hands on — crypto, precious metals, fractional real estate, small business acquisitions, dividend portfolios. Not from textbooks, but by putting real money on the line, tracking results, and learning which strategies actually hold up when you've got a mortgage, kids in school, and zero margin for "YOLO" trades. I earned my real estate license, built and sold businesses, and stacked a portfolio designed for family stability — not Instagram clout.
              </p>

              {/* Paragraph 3: The "Purpose" — Legacy & Mission */}
              <p className="font-semibold text-foreground">
                I built DadAlt Investments to be the guide I wish my dad had lived long enough to give me. Every article, every comparison, every recommendation on this site comes from the same place: a dad who's made the mistakes, done the research, and wants to help other fathers skip the expensive learning curve. No hype. No "100x" promises. Just calculated decisions for men building something that lasts.
              </p>

              <div className="my-6 space-y-1 pl-4 border-l-2 border-accent">
                <p>If you lost your dad too early…</p>
                <p>If you never had one…</p>
                <p>Or if your dad simply didn't have the financial knowledge to pass down…</p>
              </div>

              <p className="font-heading text-xl font-bold text-foreground">
                You're in the right place.
              </p>
            </div>

            {/* Expertise Signals — E-E-A-T Trust Badges */}
            <div className="mt-10">
              <AuthorBio variant="full" />
            </div>
          </div>
        </div>
      </div>

      <EmailCapture />
    </>
  );
};

export default About;
