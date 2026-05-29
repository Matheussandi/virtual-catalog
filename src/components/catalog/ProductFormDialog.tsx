"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { RequiredLabel } from "@/components/catalog/RequiredLabel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  productFormSchema,
  type ProductFormSchema,
} from "@/lib/validations/product";
import { cn } from "@/lib/utils";
import type { Category, Product } from "@/types/product";

type ProductFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: Category[];
  product?: Product | null;
  onSubmit: (values: ProductFormSchema) => void;
};

const defaultValues: ProductFormSchema = {
  name: "",
  description: "",
  price: 0,
  categoryId: "",
  imageUrl: "",
};

export function ProductFormDialog({
  open,
  onOpenChange,
  categories,
  product,
  onSubmit,
}: ProductFormDialogProps) {
  const isEditing = Boolean(product);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const categoryId = watch("categoryId");

  useEffect(() => {
    if (open) {
      reset(
        product
          ? {
              name: product.name,
              description: product.description,
              price: product.price,
              categoryId: product.categoryId,
              imageUrl: product.imageUrl,
            }
          : {
              ...defaultValues,
              categoryId: categories[0]?.id ?? "",
            },
      );
    }
  }, [open, product, categories, reset]);

  const handleFormSubmit = handleSubmit((values) => {
    onSubmit(values);
    onOpenChange(false);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar produto" : "Novo produto"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Atualize as informações do produto no catálogo."
              : "Preencha os dados para adicionar um produto ao catálogo."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
          <div className="space-y-2">
            <RequiredLabel htmlFor="name">Nome</RequiredLabel>
            <Input
              id="name"
              autoComplete="off"
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              className={cn(errors.name && "border-destructive")}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <RequiredLabel htmlFor="description">Descrição</RequiredLabel>
            <Textarea
              id="description"
              rows={3}
              aria-required="true"
              aria-invalid={Boolean(errors.description)}
              className={cn(errors.description && "border-destructive")}
              {...register("description")}
            />
            {errors.description && (
              <p className="text-sm text-destructive" role="alert">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <RequiredLabel htmlFor="price">Preço (R$)</RequiredLabel>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                inputMode="decimal"
                aria-required="true"
                aria-invalid={Boolean(errors.price)}
                className={cn(errors.price && "border-destructive")}
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <RequiredLabel htmlFor="categoryId">Categoria</RequiredLabel>
              <Select
                value={categoryId}
                onValueChange={(value) =>
                  setValue("categoryId", value ?? "", { shouldValidate: true })
                }
              >
                <SelectTrigger
                  id="categoryId"
                  className={cn(
                    "w-full",
                    errors.categoryId && "border-destructive",
                  )}
                  aria-required="true"
                  aria-invalid={Boolean(errors.categoryId)}
                >
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.categoryId && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.categoryId.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <RequiredLabel htmlFor="imageUrl">URL da imagem</RequiredLabel>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://..."
              autoComplete="off"
              aria-required="true"
              aria-invalid={Boolean(errors.imageUrl)}
              className={cn(errors.imageUrl && "border-destructive")}
              {...register("imageUrl")}
            />
            {errors.imageUrl && (
              <p className="text-sm text-destructive" role="alert">
                {errors.imageUrl.message}
              </p>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isEditing ? "Salvar alterações" : "Adicionar produto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
