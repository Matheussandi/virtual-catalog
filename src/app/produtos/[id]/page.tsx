import { ProductDetailPage } from "@/components/catalog/ProductDetailPage";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetailPage params={params} />;
}
