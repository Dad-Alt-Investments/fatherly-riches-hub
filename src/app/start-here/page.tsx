import StartHerePage from "@/pages/StartHere";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata = generateSEOMetadata({
  title: "Start Here | DadAlt Investments",
  description: "New to DadAlt? Start your family wealth building journey here.",
  path: "/start-here",
});

export default function Page() {
  return <StartHerePage />;
}
