# Catálogo Virtual — Laboratório Cursor

Aplicação de catálogo de produtos em **Next.js 16** com dados mockados e CRUD em memória, pensada para estudar **Cursor Rules**, **Skills**, **MCP** e **context engineering** com código real.

## Apresentação do projeto

Demonstração automatizada (~30s): listagem, filtro em todas as categorias, cadastro de um produto e visualização do detalhe. O vídeo usa um **cursor destacado** injetado na página — o Playwright não grava o cursor do sistema operacional, apenas a janela do navegador.

<video src="docs/test-recordings/catalog-e2e.webm" controls width="100%">
  Seu navegador não suporta vídeo incorporado.
  <a href="docs/test-recordings/catalog-e2e.webm">Baixar demonstração (.webm)</a>
</video>

Para gravar novamente (mais lento, com cursor visível): `npm run test:e2e:video`

## Funcionalidades

- Visualizar produtos em grade responsiva
- Filtrar por categoria (Eletrônicos, Roupas, Casa)
- Adicionar, editar e excluir produtos
- Ao recarregar a página (F5), o catálogo volta ao seed original

## Stack

- [Next.js 16.2.6+](https://nextjs.org/docs) (App Router, Turbopack)
- React 19, TypeScript, Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com/docs)
- Zod + react-hook-form
- Sem API — ver [ADR-003](docs/decisions/003-no-api.md)

## Início rápido

```bash
git clone <seu-fork>
cd my-new-project
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run test:e2e          # testes E2E (Playwright) + vídeo em test-results/
npm run test:e2e:video    # idem e copia gravação para docs/test-recordings/
```

## Estudar com o Cursor

| Tópico | Onde começar |
|--------|----------------|
| Índice | [docs/cursor/README.md](docs/cursor/README.md) |
| Rules | [docs/cursor/rules.md](docs/cursor/rules.md) |
| Skills | [docs/cursor/skills.md](docs/cursor/skills.md) |
| MCP | [docs/cursor/mcp.md](docs/cursor/mcp.md) |
| Context engineering | [docs/cursor/context-engineering.md](docs/cursor/context-engineering.md) |
| Instruções do Agent | [AGENTS.md](AGENTS.md) |

### Exercícios sugeridos

1. **Rules:** abra `ProductCard.tsx` e peça um badge "Promoção"; observe a rule `react-ui`.
2. **Skills:** no chat, `/catalog-crud adicionar campo opcional ao produto`.
3. **MCP:** copie `.cursor/mcp.json.example` → `.cursor/mcp.json` (GitHub + Playwright); com `npm run dev`, use `/verify-catalog-ui` para testar o catálogo.
4. **Context:** compare um prompt com e sem `@src/types/product.ts`.

## Estrutura do projeto

```
src/
  app/                 # rotas Next.js
  components/catalog/  # UI do catálogo
  context/             # ProductsProvider
  data/                # seeds mockados
  lib/                 # helpers e validação Zod
.cursor/
  rules/               # *.mdc
  skills/              # SKILL.md por pasta
docs/
  cursor/              # tutoriais
  decisions/           # ADRs
```

## Decisões de arquitetura

- [ADR-001 — Next.js 16](docs/decisions/001-nextjs-version.md)
- [ADR-002 — Estado em memória](docs/decisions/002-in-memory-state.md)
- [ADR-003 — Sem API](docs/decisions/003-no-api.md)
- [ADR-004 — Camada Cursor](docs/decisions/004-cursor-education-layer.md)

## Licença

[MIT](LICENSE)
