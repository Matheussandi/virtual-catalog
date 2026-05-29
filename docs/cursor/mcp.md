# MCP (Model Context Protocol)

O [MCP](https://cursor.com/docs/context/mcp) conecta o Cursor a ferramentas externas. Este repositório inclui um exemplo com **GitHub** e **Playwright**, além do browser integrado do IDE para o laboratório do catálogo.

## Conceitos

| Conceito | Descrição |
|----------|-----------|
| **Servidor MCP** | Processo que expõe *tools* (funções) ao Agent |
| **Transporte** | `stdio` (local), HTTP/SSE (remoto) |
| **Config** | `.cursor/mcp.json` (projeto) ou `~/.cursor/mcp.json` (global) |

Documentação: [Installing MCP servers](https://cursor.com/docs/context/mcp#installing-mcp-servers)

## Configuração neste repo

Arquivo de exemplo: [.cursor/mcp.json.example](../../.cursor/mcp.json.example)

```bash
cp .cursor/mcp.json.example .cursor/mcp.json
```

> `.cursor/mcp.json` está no `.gitignore` — não commite tokens.

### GitHub (remoto — recomendado)

Servidor oficial hospedado pela GitHub. Requer Cursor **0.48+** e um [Personal Access Token](https://github.com/settings/personal-access-tokens/new).

1. Crie um PAT com os escopos necessários (ex.: `repo`, `read:org` conforme seu uso)
2. Exporte no terminal ou configure no perfil do sistema:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="ghp_..."
```

3. O exemplo usa interpolação `${env:GITHUB_PERSONAL_ACCESS_TOKEN}` no header `Authorization`

Referências:

- [GitHub MCP Server — Install in Cursor](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md)
- [Cursor MCP — config interpolation](https://cursor.com/docs/context/mcp#config-interpolation)

**Alternativa local (Docker):** se preferir rodar localmente, veja a seção *Local Server Setup* no guia acima (`ghcr.io/github/github-mcp-server`). O pacote npm `@modelcontextprotocol/server-github` está **descontinuado**.

**Teste:** no chat, peça *"Liste meus repositórios no GitHub"*.

### Playwright (automação de browser)

Servidor oficial da Microsoft para automação via MCP (snapshots de acessibilidade, sem depender de visão do modelo).

```json
"playwright": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest"]
}
```

Opções úteis (adicione em `args`):

| Argumento | Efeito |
|-----------|--------|
| `--headless` | Sem janela gráfica |
| `--browser=firefox` | Outro navegador |

Referências:

- [Playwright MCP — getting started](https://playwright.dev/docs/getting-started-mcp)
- [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)

**Teste:** com `npm run dev` ativo, peça ao Agent para abrir `http://localhost:3000` e clicar em **Ver detalhes** de um produto.

### Browser integrado do Cursor (opcional)

Em **Cursor Settings → Features → MCP**, o servidor **browser** (IDE) também pode validar o catálogo. Não precisa de entrada no JSON na maioria dos ambientes. A skill `/verify-catalog-ui` descreve esse fluxo.

## Laboratório — catálogo com Playwright ou browser

### Pré-requisitos

```bash
npm run dev
```

MCP **playwright** ou **browser** habilitado e aprovado no chat.

### Passos

1. Invoque `/verify-catalog-ui` ou descreva o teste E2E
2. O Agent deve:
   - Abrir `http://localhost:3000`
   - Filtrar categoria **Roupas**
   - Abrir **Ver detalhes** e validar a página
   - **Editar** e **Excluir** na tela de detalhe
   - Opcional: **Restaurar dados iniciais** na listagem

### Debug

1. **View → Output → MCP Logs**
2. GitHub: confirme `GITHUB_PERSONAL_ACCESS_TOKEN` no ambiente
3. Playwright: na primeira execução o `npx` pode baixar browsers (`npx playwright install` se solicitado)

## Segurança (oficial)

- Instale servidores de fontes confiáveis
- Nunca commite PATs — use `${env:...}` em `mcp.json`
- Revise permissões do token GitHub

[Security considerations](https://cursor.com/docs/context/mcp#security-considerations)

## Referências

- [MCP specification](https://modelcontextprotocol.io/)
- [Cursor MCP FAQ](https://cursor.com/docs/context/mcp#faq)
