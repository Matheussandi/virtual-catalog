---
name: verify-catalog-ui
description: Valida o catálogo virtual no navegador com MCP browser — filtro por categoria, CRUD e reset. Use para testar UI, E2E manual ou verificar regressões visuais.
---

# Verificar UI do catálogo (MCP browser)

Use o servidor MCP **browser** (Cursor IDE) para validar o catálogo localmente.

## Pré-requisitos

1. Servidor de desenvolvimento: `npm run dev` (porta 3000)
2. MCP browser habilitado no Cursor (Settings → MCP)
3. Opcional: copiar `.cursor/mcp.json.example` para `.cursor/mcp.json` se precisar de config explícita

## Passos

### 1. Listar e navegar

1. `browser_navigate` → `http://localhost:3000`
2. `browser_snapshot` — confirmar título "Catálogo virtual" e grade de produtos

### 2. Filtro por categoria

1. Clicar na aba **Roupas** (ou outra categoria)
2. `browser_snapshot` — contagem de produtos deve diminuir
3. Clicar **Todas** — lista completa retorna

### 3. Criar produto

1. Clicar **Novo produto**
2. Preencher nome, descrição, preço, categoria, URL de imagem válida
3. Submeter — card novo aparece na grade

### 4. Editar e excluir

1. **Editar** em um card — alterar nome — **Salvar alterações**
2. **Excluir** — confirmar no dialog — card some

### 5. Reset

1. **Restaurar dados iniciais** — lista volta ao seed da sessão
2. Recarregar página (F5) — mesmo efeito (estado em memória)

## Em caso de falha

- Verificar `npm run dev` ativo
- Output → **MCP Logs** no Cursor
- Consultar `docs/cursor/mcp.md`

Detalhes: [reference.md](reference.md)
