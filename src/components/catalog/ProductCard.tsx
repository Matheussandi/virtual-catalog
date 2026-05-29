"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
};

export function ProductCard({ product, categories }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <Link
        href={`/produtos/${product.id}`}
        transitionTypes={["nav-forward"]}
        className="block"
      >
        <ViewTransition name={`product-image-${product.id}`} share="morph">
          <div className="relative aspect-[4/3] w-full bg-muted">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </ViewTransition>
      </Link>
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
      <CardFooter>
        <Link
          href={`/produtos/${product.id}`}
          transitionTypes={["nav-forward"]}
          className={cn(buttonVariants({ variant: "default" }), "w-full")}
        >
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  );
}
