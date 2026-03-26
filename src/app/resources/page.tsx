import ResourcesPage from "@/pages/Resources";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata = generateSEOMetadata({
  title: "Resources & Dad's Picks | DadAlt Investments",
  description: "The best tools, platforms, and resources for dads building wealth.",
  path: "/resources",
});

export default function Page() {
  return <ResourcesPage />;
}
