"use client";

import { useMemo, useState } from "react";

import { CategoryFilter } from "@/components/catalog/CategoryFilter";
import { ProductFormDialog } from "@/components/catalog/ProductFormDialog";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/context/ProductsProvider";
import { filterByCategory } from "@/lib/products";
import type { ProductFormSchema } from "@/lib/validations/product";
import type { Product } from "@/types/product";

export function CatalogPage() {
  const { products, categories, addProduct } = useProducts();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [formOpen, setFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(
    () => filterByCategory(products, selectedCategoryId),
    [products, selectedCategoryId],
  );

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setFormOpen(true);
  };

  const handleFormSubmit = (values: ProductFormSchema) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, values);
      return;
    }
    addProduct(values);
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Catálogo virtual</h1>
          <p className="max-w-2xl text-muted-foreground">
            Explore produtos, filtre por categoria e gerencie o catálogo em
            memória. Os dados voltam ao estado inicial ao recarregar a página.
          </p>
        </div>
        <Button type="button" onClick={handleOpenCreate}>
          Novo produto
        </Button>
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground">
          Filtrar por categoria
        </h2>
        <CategoryFilter
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />
      </section>

      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "produto" : "produtos"}
          {selectedCategoryId ? " nesta categoria" : " no catálogo"}
        </p>
        <ProductGrid
          products={filteredProducts}
          categories={categories}
        />
      </section>

      <ProductFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        categories={categories}
        product={editingProduct}
        onSubmit={handleFormSubmit}
      />

    </div>
  );
}
