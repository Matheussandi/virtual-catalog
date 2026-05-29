# Instruções para o Agent — Catálogo Virtual

Este repositório é um **catálogo de produtos em Next.js** e um **laboratório educacional** sobre Cursor (Rules, Skills, MCP e context engineering).

## Visão rápida

| Área | Caminho |
|------|---------|
| Página principal | `src/app/page.tsx` → `CatalogPage` |
| Estado em memória | `src/context/ProductsProvider.tsx` |
| Dados iniciais | `src/data/*.seed.ts` |
| Regras Cursor | `.cursor/rules/*.mdc` |
| Skills do projeto | `.cursor/skills/*/SKILL.md` |
| Documentação | `docs/cursor/` |

## Comandos

```bash
npm run dev    # http://localhost:3000
npm run lint
npm run build
```

## AGENTS.md vs Project Rules

- **Este arquivo (`AGENTS.md`)**: instruções simples em Markdown, sem frontmatter. Bom para visão geral e onboarding.
- **`.cursor/rules/*.mdc`**: regras com metadados (`alwaysApply`, `globs`, `description`) e modos (sempre, inteligente, por arquivo, manual).

Documentação oficial: [Cursor Rules](https://cursor.com/docs/context/rules#agentsmd)

## Restrições importantes

1. Sem API — dados mockados apenas
2. UI em português (BR)
3. Estado volátil — F5 restaura o seed
4. Consultar `docs/decisions/` antes de mudar arquitetura

## Ao pedir alterações no catálogo

1. Leia `src/types/product.ts` e o Provider
2. Respeite validação Zod em `src/lib/validations/product.ts`
3. Mantenha componentes em `src/components/catalog/`
4. Atualize `docs/cursor/` se a mudança afetar como se usa Rules/Skills/MCP
