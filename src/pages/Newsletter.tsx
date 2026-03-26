import { useEffect } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";

const Newsletter = () => {
  usePageMeta({
    title: "Investment Guide Sign-Up — DadAlt Investments",
    description: "Sign up for the DadAlt Investment Guide. Get straight-talking investment education delivered to your inbox.",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.nashvilledigital.co/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container-wide section-padding">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center font-heading text-3xl font-bold md:text-4xl">
          Get the Free Dad Wealth Guide
        </h1>
        <p className="mb-8 text-center font-body text-muted-foreground">
          Sign-up for our email list and get the guide sent to your inbox. We'll also periodically send you other investment advice and tips to guide you on your journey.
        </p>
        <iframe
          src="https://link.nashvilledigital.co/widget/form/vN0O3M32s8uMdPa5fvcy"
          style={{ width: "100%", height: "883px", border: "none", borderRadius: "3px" }}
          id="inline-vN0O3M32s8uMdPa5fvcy"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Investment Guide Sign-Up"
          data-height="883"
          data-layout-iframe-id="inline-vN0O3M32s8uMdPa5fvcy"
          data-form-id="vN0O3M32s8uMdPa5fvcy"
          title="Investment Guide Sign-Up"
        />
      </div>
    </section>
  );
};

export default Newsletter;
