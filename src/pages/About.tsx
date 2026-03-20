import EmailCapture from "@/components/home/EmailCapture";
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

          {/* Founder Story */}
          <div className="mt-16 border-t pt-12">
            <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <img
                src={jaredPhoto}
                alt="Jared DeValk, founder of DadAlt Investments"
                className="h-40 w-40 shrink-0 rounded-xl object-cover object-top shadow-md"
              />
              <div>
                <h2 className="font-heading text-2xl font-bold">
                  About DadAlt Investments
                </h2>
                <p className="mt-3 font-body text-lg font-medium leading-relaxed text-foreground/90">
                  Hi, I'm Jared DeValk — and I blew through $100,000 at 23 while "investing."
                </p>
              </div>
            </div>

            <div className="space-y-5 font-body text-base leading-relaxed text-foreground/80">
              <p>
                My dad, Jack DeValk, taught my brother and me about personal finance early. He started simple: he asked us what company we wanted to invest in, and he bought us $100 worth of stock.
              </p>
              <p>
                My brother loved those little toy cars called Micro Machines. I had a bike that looked like a Harley Davidson. So those were the companies we chose.
              </p>
              <p>I chose well. And I was hooked on investing from that point forward.</p>
              <p className="font-semibold text-foreground">Then 2011 hit.</p>
              <p>
                I was 23 years old. A baby on the way. A fiancé. A brand new career in real estate.
              </p>
              <p>
                And right as I was stepping into fatherhood, my dad died in a freak swimming accident at 57.
              </p>
              <p>
                The man who had taught me how to think about money…<br />
                How to make decisions…<br />
                How to be steady…
              </p>
              <p className="font-semibold text-foreground">He was suddenly gone.</p>
              <p>
                I had never felt more responsible — or more lost.
              </p>
              <p>
                I still had so many questions. About money. About responsibility. About how to build something stable for my new family.
              </p>
              <p>
                Instead of wise guidance, I spent money on courses, coaches, gurus, and bad investments. I made emotional decisions. I chased things I didn't fully understand.
              </p>
              <p className="font-semibold text-foreground">And I lost a lot.</p>
              <p>I wish my dad had been there to help me slow down.</p>
              <p>
                I'm 37 now. I've made plenty of mistakes — and I'm still learning. But somewhere along the way, tempered optimism replaced hype. Healthy skepticism replaced urgency. And I finally reached a place where I don't lie awake wondering if I'm prepared for the future.
              </p>
              <p className="font-semibold text-foreground">
                I built DadAlt Investments to give you the kind of financial direction I wish I could still get from my dad.
              </p>

              <div className="my-6 space-y-1 pl-4 border-l-2 border-primary">
                <p>No sales hype.</p>
                <p>No false promises.</p>
                <p>No "100x" nonsense.</p>
              </div>

              <p>
                Just clear, grounded guidance to help you build a portfolio aligned with your goals — and your life.
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
          </div>
        </div>
      </div>

      <EmailCapture />
    </>
  );
};

export default About;
