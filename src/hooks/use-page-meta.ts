import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

const SITE_NAME = "DadAlt Investments";

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    // Set document title
    document.title = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Set OG tags
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("twitter:title", title);
    setMetaProperty("twitter:description", description);
  }, [title, description]);
}

function setMetaProperty(property: string, content: string) {
  const isOg = property.startsWith("og:");
  const selector = isOg
    ? `meta[property="${property}"]`
    : `meta[name="${property}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    if (isOg) {
      el.setAttribute("property", property);
    } else {
      el.setAttribute("name", property);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
