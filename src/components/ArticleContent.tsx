"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-prose prose prose-lg mx-auto max-w-none font-body text-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground mt-12 mb-4 sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-heading text-2xl font-bold text-foreground mt-12 mb-4 pb-2 border-b border-border">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-heading text-lg font-semibold text-foreground mt-6 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="font-body text-base leading-relaxed text-muted-foreground mb-5">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary/80 hover:decoration-primary/60"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="my-4 ml-1 space-y-2 list-none">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-1 space-y-2 list-decimal list-inside marker:font-semibold marker:text-primary">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="font-body text-base leading-relaxed text-muted-foreground pl-2 relative before:content-['•'] before:text-primary before:font-bold before:mr-3 before:text-lg">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 rounded-lg border-l-4 border-primary bg-primary/5 py-4 px-6 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-secondary text-secondary-foreground">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-heading text-sm font-semibold tracking-wide">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-t border-border px-4 py-3 font-body text-sm text-muted-foreground">
              {children}
            </td>
          ),
          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-muted/50">
              {children}
            </tr>
          ),
          hr: () => (
            <hr className="my-10 border-t border-border" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
