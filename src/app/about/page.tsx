import AboutPage from "@/views/About";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata = generateSEOMetadata({
  title: "About Us | DadAlt Investments",
  description: "Learn about the mission of DadAlt Investments, founded by Jared DeValk.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
