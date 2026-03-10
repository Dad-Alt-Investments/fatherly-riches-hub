import { FileText, CalendarDays, Eye } from "lucide-react";

const stats = [
  { icon: FileText, value: "32+", label: "In-Depth Guides" },
  { icon: CalendarDays, value: "Weekly", label: "Publishing Cadence" },
  { icon: Eye, value: "100%", label: "Transparent Disclosures" },
];

const AuthoritySection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding text-center">
        <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
          We don't chase trends.{" "}
          <span className="text-primary">We build durable wealth.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] font-body text-base leading-relaxed text-secondary-foreground/70">
          Every recommendation is researched, every disclosure is transparent,
          and every guide is written for the dad who values substance over hype.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="space-y-2">
              <Icon className="mx-auto h-6 w-6 text-primary" />
              <p className="font-heading text-3xl font-bold text-secondary-foreground">
                {value}
              </p>
              <p className="font-body text-sm text-secondary-foreground/60">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
