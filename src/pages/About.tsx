import EmailCapture from "@/components/home/EmailCapture";

const About = () => {
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
        </div>
      </div>

      <EmailCapture />
    </>
  );
};

export default About;
