import { ImageMetadata } from "@/types/investment";

const customOverrides: Record<string, Partial<ImageMetadata>> = {
  "dadalt-logo.png": {
    altText: "DadAlt Investments Logo - Expert Financial Strategies for Fathers",
    caption: "DadAlt Investments: Guiding families to financial independence.",
  },
  "jared-devalk.jpeg": {
    altText: "Jared DeValk - Founder and Lead Investment Strategist for DadAlt",
    caption: "Jared DeValk shares trustworthy, family-oriented investment strategies.",
  },
};

export function getImageMetadata(fileName: string): ImageMetadata {
  if (customOverrides[fileName]) {
    return {
      fileName,
      altText: customOverrides[fileName].altText || "",
      caption: customOverrides[fileName].caption || "",
    };
  }

  // Programmatic generation for the 77+ articles
  const cleanName = fileName.replace(/\.[^/.]+$/, ""); // remove extension
  const titleCase = cleanName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    fileName,
    altText: `DadAlt Investments: ${titleCase} - Expert family wealth building strategies`,
    caption: `Learn about ${titleCase} with our trustworthy, family-oriented investment guide.`,
  };
}
