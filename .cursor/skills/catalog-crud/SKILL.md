---
name: catalog-crud
description: Implementa ou altera fluxos de criar, editar e excluir produtos no catálogo virtual em memória. Use quando o usuário pedir adicionar, remover, editar produto ou mudar o CRUD do catálogo.
---

# CRUD do catálogo

Playbook para alterar criar / editar / excluir produtos neste repositório.

## Pré-leitura

1. `@src/types/product.ts` — tipos
2. `@src/context/ProductsProvider.tsx` — `addProduct`, `updateProduct`, `removeProduct`
3. `@src/components/catalog/CatalogPage.tsx` — orquestração
4. `@src/lib/validations/product.ts` — schema Zod

## Fluxo: novo campo no produto

1. Estender tipo `Product` e `ProductFormValues`
2. Atualizar `productFormSchema` (Zod)
3. Ajustar `ProductFormDialog` (campo + `register` / `setValue`)
4. Atualizar seed em `src/data/products.seed.ts` (exemplos)
5. Exibir no `ProductCard` se for visível na listagem
6. Rodar `npm run lint` e `npm run build`

## Fluxo: nova ação no Provider

1. Adicionar método no contexto e no `useMemo` de value
2. Expor via `useProducts()`
3. Conectar em `CatalogPage` ou componente filho
4. Não criar API routes

## Fluxo: validação ou mensagens

- Mensagens em português no schema Zod
- Erros exibidos abaixo do campo no dialog

## Checklist antes de concluir

- [ ] Sem `app/api` ou `fetch` externo
- [ ] Provider continua inicializando com `productsSeed`
- [ ] UI em PT-BR
- [ ] Build passa

Detalhes: [reference.md](reference.md)
