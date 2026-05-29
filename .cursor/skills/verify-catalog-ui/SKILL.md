---
name: verify-catalog-ui
description: Valida o catálogo virtual no navegador com MCP browser — filtro por categoria, CRUD e reset. Use para testar UI, E2E manual ou verificar regressões visuais.
---

# Verificar UI do catálogo (MCP browser)

Use MCP de browser para validar o catálogo localmente:

- **Playwright** (recomendado neste repo — ver `.cursor/mcp.json.example`)
- **browser** integrado do Cursor IDE (Settings → MCP)

## Pré-requisitos

1. Servidor de desenvolvimento: `npm run dev` (porta 3000)
2. Copiar `.cursor/mcp.json.example` → `.cursor/mcp.json` e habilitar **playwright** (ou browser do IDE)
3. GitHub MCP é opcional para este teste (útil para issues/PRs do projeto)

## Passos

### 1. Listar e navegar

1. `browser_navigate` → `http://localhost:3000`
2. `browser_snapshot` — confirmar título "Catálogo virtual" e grade de produtos

### 2. Filtro por categoria

1. Clicar na aba **Roupas** (ou outra categoria)
2. `browser_snapshot` — contagem de produtos deve diminuir
3. Clicar **Todas** — lista completa retorna

### 3. Detalhe do produto

1. Clicar **Ver detalhes** em um card
2. Confirmar morph/transição e conteúdo na rota `/produtos/[id]`
3. **Editar produto** — salvar — nome atualizado
4. **Excluir produto** — confirmar — redirecionar ao catálogo

### 4. Criar produto (listagem)

1. Voltar ao catálogo
2. **Novo produto** — preencher formulário — card novo na grade

### 5. Reset

1. **Restaurar dados iniciais** — lista volta ao seed da sessão
2. Recarregar página (F5) — mesmo efeito (estado em memória)

## Em caso de falha

- Verificar `npm run dev` ativo
- Output → **MCP Logs** no Cursor
- Consultar `docs/cursor/mcp.md`

Detalhes: [reference.md](reference.md)
