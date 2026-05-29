"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { categoriesSeed } from "@/data/categories.seed";
import { productsSeed } from "@/data/products.seed";
import { createProductId } from "@/lib/products";
import type { Category, Product, ProductFormValues } from "@/types/product";

type ProductsContextValue = {
  products: Product[];
  categories: Category[];
  addProduct: (values: ProductFormValues) => void;
  updateProduct: (id: string, values: ProductFormValues) => void;
  removeProduct: (id: string) => void;
  resetProducts: () => void;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => [...productsSeed]);

  const categories = useMemo(() => [...categoriesSeed], []);

  const addProduct = useCallback((values: ProductFormValues) => {
    setProducts((current) => [
      ...current,
      {
        id: createProductId(),
        ...values,
      },
    ]);
  }, []);

  const updateProduct = useCallback((id: string, values: ProductFormValues) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id ? { ...product, ...values } : product,
      ),
    );
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  }, []);

  const resetProducts = useCallback(() => {
    setProducts([...productsSeed]);
  }, []);

  const value = useMemo(
    () => ({
      products,
      categories,
      addProduct,
      updateProduct,
      removeProduct,
      resetProducts,
    }),
    [
      products,
      categories,
      addProduct,
      updateProduct,
      removeProduct,
      resetProducts,
    ],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts deve ser usado dentro de ProductsProvider");
  }
  return context;
}
