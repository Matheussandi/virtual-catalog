import type { Category, Product } from "@/types/product";

export function formatPriceBRL(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function filterByCategory(
  products: Product[],
  categoryId: string | null,
): Product[] {
  if (!categoryId) {
    return products;
  }
  return products.filter((product) => product.categoryId === categoryId);
}

export function getCategoryName(
  categories: Category[],
  categoryId: string,
): string {
  return categories.find((c) => c.id === categoryId)?.name ?? "Sem categoria";
}

export function createProductId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `p-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
