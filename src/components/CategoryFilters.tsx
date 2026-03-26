"use client";

import React, { useState } from "react";
import { Category } from "@/types/investment";

interface CategoryFiltersProps {
  categories: Category[];
  onFilter: (categoryId: string | null) => void;
}

export function CategoryFilters({ categories, onFilter }: CategoryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleFilter = (id: string | null) => {
    setActiveCategory(id);
    onFilter(id);
  };

  return (
    <div className="flex flex-wrap gap-2 py-4">
      <button
        onClick={() => handleFilter(null)}
        className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
          activeCategory === null
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground hover:bg-muted/80"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleFilter(cat.id)}
          className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
            activeCategory === cat.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
