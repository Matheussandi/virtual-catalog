export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  imageUrl: string;
};

export type ProductFormValues = {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  imageUrl: string;
};
