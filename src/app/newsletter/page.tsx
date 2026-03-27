import NewsletterPage from "@/views/Newsletter";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata = generateSEOMetadata({
  title: "Free Newsletter | DadAlt Investments",
  description: "Get weekly trustworthy investment insights straight to your inbox.",
  path: "/newsletter",
});

export default function Page() {
  return <NewsletterPage />;
}
