import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  const location = useLocation();

  usePageMeta({
    title: "Page Not Found | DadAlt Investments",
    description: "The page you're looking for doesn't exist. Head back to DadAlt Investments for investment guides and tools.",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold">Page Not Found</h1>
        <p className="mb-4 text-xl text-muted-foreground">The page you're looking for doesn't exist on DadAlt Investments.</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
