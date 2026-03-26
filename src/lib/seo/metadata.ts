import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "article" | "website";
}

const siteName = "DadAlt Investments";
const baseUrl = "https://dadaltinvestments.com";

export function generateSEOMetadata({
  title,
  description,
  path,
  image = "/images/dadalt-logo.png",
  type = "website",
}: SEOProps): Metadata {
  const url = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${baseUrl}${image}`],
    },
  };
}
