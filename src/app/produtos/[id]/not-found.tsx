import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProductNotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Produto não encontrado</h1>
      <p className="text-muted-foreground">
        O produto pode ter sido excluído ou o link está incorreto.
      </p>
      <Link
        href="/"
        transitionTypes={["nav-back"]}
        className={cn(buttonVariants({ variant: "default" }))}
      >
        Voltar ao catálogo
      </Link>
    </div>
  );
}
