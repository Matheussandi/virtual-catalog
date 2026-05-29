"use client";

import { ProductCard } from "@/components/catalog/ProductCard";
import type { Category, Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
  categories: Category[];
};

export function ProductGrid({ products, categories }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-12 text-center">
        <p className="text-lg font-medium">Nenhum produto encontrado</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente outra categoria ou adicione um novo produto.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} categories={categories} />
        </li>
      ))}
    </ul>
  );
}
