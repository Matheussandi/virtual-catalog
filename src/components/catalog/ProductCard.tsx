"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPriceBRL, getCategoryName } from "@/lib/products";
import type { Category, Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  categories: Category[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
};

export function ProductCard({
  product,
  categories,
  onEdit,
  onDelete,
}: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
          <Badge variant="secondary">
            {getCategoryName(categories, product.categoryId)}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="text-xl font-semibold">{formatPriceBRL(product.price)}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={() => onEdit(product)}
        >
          Editar
        </Button>
        <Button
          type="button"
          variant="destructive"
          className="flex-1"
          onClick={() => onDelete(product)}
        >
          Excluir
        </Button>
      </CardFooter>
    </Card>
  );
}
