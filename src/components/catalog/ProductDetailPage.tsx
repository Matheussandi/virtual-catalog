"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { use, useState } from "react";
import { ViewTransition } from "react";

import { DeleteProductDialog } from "@/components/catalog/DeleteProductDialog";
import { ProductFormDialog } from "@/components/catalog/ProductFormDialog";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { useProducts } from "@/context/ProductsProvider";
import { formatPriceBRL, getCategoryName } from "@/lib/products";
import type { ProductFormSchema } from "@/lib/validations/product";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const { products, categories, updateProduct, removeProduct } = useProducts();

  const product = products.find((item) => item.id === id);

  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const handleFormSubmit = (values: ProductFormSchema) => {
    updateProduct(product.id, values);
    setFormOpen(false);
  };

  const handleConfirmDelete = () => {
    removeProduct(product.id);
    router.push("/");
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6">
      <nav>
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          ← Voltar ao catálogo
        </Link>
      </nav>

      <article className="flex flex-col gap-8">
        <ViewTransition name={`product-image-${product.id}`} share="morph">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted shadow-sm">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </ViewTransition>

        <header className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <Badge variant="secondary" className="text-sm">
              {getCategoryName(categories, product.categoryId)}
            </Badge>
          </div>
          <p className="text-3xl font-semibold text-primary">
            {formatPriceBRL(product.price)}
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground">Descrição</h2>
          <p className="text-base leading-relaxed text-foreground">
            {product.description}
          </p>
        </section>

        <footer className="flex flex-wrap gap-3 border-t pt-6">
          <Button type="button" onClick={() => setFormOpen(true)}>
            Editar produto
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => setDeleteOpen(true)}
          >
            Excluir produto
          </Button>
        </footer>
      </article>

      <ProductFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        categories={categories}
        product={product}
        onSubmit={handleFormSubmit}
      />

      <DeleteProductDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        product={product}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
