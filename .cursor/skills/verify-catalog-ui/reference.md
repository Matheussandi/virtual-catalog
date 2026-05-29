# Referência — verify-catalog-ui

## Servidores MCP deste repo

| Servidor | Uso no laboratório |
|----------|-------------------|
| **playwright** | E2E do catálogo (config em `mcp.json.example`) |
| **github** | Issues, PRs, repositório (requer `GITHUB_PERSONAL_ACCESS_TOKEN`) |
| **browser** (IDE) | Alternativa ao Playwright |

## Ferramentas Playwright MCP (exemplos)

Consulte as tools disponíveis em Settings → MCP após iniciar o servidor. Em geral: navegar, snapshot da página, clicar, preencher formulários.

## Ferramentas browser integrado (exemplos)

| Objetivo | Ferramenta |
|----------|------------|
| Abrir app | `browser_navigate` |
| Estrutura da página | `browser_snapshot` |
| Clicar aba / botão | `browser_click` (ref do snapshot) |
| Digitar em formulário | `browser_fill` ou `browser_type` |

## Ordem recomendada (lock)

1. `browser_navigate`
2. `browser_lock` (action: lock)
3. Interações
4. `browser_lock` (action: unlock)

## Documentação oficial

- [Cursor MCP](https://cursor.com/docs/context/mcp)
- [MCP specification](https://modelcontextprotocol.io/)

## Dados de teste sugeridos

| Campo | Valor exemplo |
|-------|----------------|
| Nome | Produto Teste MCP |
| Descrição | Item criado durante verificação automatizada do catálogo. |
| Preço | 99.9 |
| Categoria | Eletrônicos |
| Imagem | `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop` |
