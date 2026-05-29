# Componentes — instruções locais

Estas instruções aplicam-se ao trabalhar em `src/components/` (incluindo subpastas).

## Divisão

- `catalog/` — lógica e layout do catálogo (pode usar hooks e estado via props/callbacks)
- `ui/` — primitivos shadcn; alterações mínimas, preferir composição em `catalog/`

## Padrões

- Named exports para componentes de catálogo
- Props tipadas com tipos de `@/types/product`
- Diálogos controlados (`open` / `onOpenChange`) pelo componente pai (`CatalogPage`)

## Rule relacionada

A rule `react-ui` (`.cursor/rules/react-ui.mdc`) entra em contexto automaticamente ao editar arquivos `*.tsx` aqui.

Veja também: [AGENTS.md na raiz](../../AGENTS.md)
