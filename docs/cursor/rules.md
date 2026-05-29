# Project Rules neste repositório

As [Project Rules](https://cursor.com/docs/context/rules) ficam em `.cursor/rules/` como arquivos `.mdc` com frontmatter YAML.

> Arquivos `.md` em `.cursor/rules/` **não** são carregados como rules. Use `.mdc` ou `AGENTS.md`.

## Rules incluídas

### 1. `project-conventions.mdc` — Always Apply

- **Modo:** Always Apply (`alwaysApply: true`)
- **Conteúdo:** stack Next.js, PT-BR, sem API, estrutura de pastas
- **Quando estudar:** abra qualquer chat e veja que o Agent já conhece as restrições do projeto

### 2. `catalog-domain.mdc` — Apply Intelligently

- **Modo:** Apply Intelligently (`description` detalhada)
- **Conteúdo:** tipos `Product` / `Category`, fluxos CRUD, arquivos canônicos
- **Exercício:** peça *"adicione campo estoque ao produto"* e observe o Agent seguir Provider + Zod + seed

### 3. `react-ui.mdc` — Apply to Specific Files

- **Modo:** `globs: src/components/**/*.tsx`
- **Conteúdo:** shadcn, acessibilidade, `next/image`, formulários
- **Exercício:** abra `ProductCard.tsx` e peça um badge "Novo"; a rule de UI deve influenciar o estilo

### 4. `mock-data.mdc` — Apply to Specific Files

- **Modo:** `globs: src/data/**`
- **Conteúdo:** proíbe API e persistência; seeds como fonte inicial
- **Exercício:** peça *"salvar produtos no banco"* — o Agent deve recusar ou citar ADR-003

## AGENTS.md

Alternativa sem frontmatter:

- [AGENTS.md](../../AGENTS.md) — raiz
- [src/components/AGENTS.md](../../src/components/AGENTS.md) — aninhado

[Nested AGENTS.md](https://cursor.com/docs/context/rules#nested-agentsmd-support) aplica instruções ao trabalhar naquela pasta.

## Criar nova rule

1. Use a skill `/author-cursor-rule` ou `/create-rule` no chat
2. Salve em `.cursor/rules/nome.mdc`
3. Atualize esta página com uma linha na tabela acima

## Referências oficiais

- [Rule types e frontmatter](https://cursor.com/docs/context/rules#rule-anatomy)
- [Best practices](https://cursor.com/docs/context/rules#best-practices)
- [Team Rules (precedência)](https://cursor.com/docs/context/rules#team-rules)
