import { z } from "zod";

export const productFormSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(80, "Nome deve ter no máximo 80 caracteres"),
  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(500, "Descrição deve ter no máximo 500 caracteres"),
  price: z
    .number({ message: "Preço deve ser um número" })
    .positive("Preço deve ser maior que zero")
    .max(999_999, "Preço muito alto"),
  categoryId: z.string().min(1, "Selecione uma categoria"),
  imageUrl: z
    .string()
    .url("Informe uma URL de imagem válida")
    .max(500, "URL muito longa"),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;
