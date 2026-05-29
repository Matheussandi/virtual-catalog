"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Category } from "@/types/product";

type CategoryFilterProps = {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string | null) => void;
};

export function CategoryFilter({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: CategoryFilterProps) {
  const tabValue = selectedCategoryId ?? "all";

  return (
    <Tabs
      value={tabValue}
      onValueChange={(value) =>
        onSelectCategory(value === "all" ? null : value)
      }
      className="w-full"
    >
      <TabsList className="h-auto flex-wrap justify-start">
        <TabsTrigger value="all">Todas</TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
