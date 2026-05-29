# MCP (Model Context Protocol)

O [MCP](https://cursor.com/docs/context/mcp) conecta o Cursor a ferramentas externas. Neste laboratório usamos principalmente o **browser** para validar o catálogo.

## Conceitos

| Conceito | Descrição |
|----------|-----------|
| **Servidor MCP** | Processo que expõe *tools* (funções) ao Agent |
| **Transporte** | `stdio` (local), HTTP/SSE (remoto) |
| **Config** | `.cursor/mcp.json` (projeto) ou `~/.cursor/mcp.json` (global) |

Documentação: [Installing MCP servers](https://cursor.com/docs/context/mcp#installing-mcp-servers)

## Configuração neste repo

Exemplo de servidor `stdio` (filesystem) sem secrets: [.cursor/mcp.json.example](../../.cursor/mcp.json.example)

Para usar:

1. Copie para `.cursor/mcp.json` se sua equipe precisar versionar config
2. Para testes do catálogo, habilite o servidor **browser** em **Cursor Settings → Features → MCP** (integrado ao IDE; não exige entrada no JSON na maioria dos ambientes)
3. Nunca commite API keys — use `${env:NOME}` conforme [config interpolation](https://cursor.com/docs/context/mcp#config-interpolation)

## Laboratório — validar o catálogo

### Pré-requisitos

```bash
npm run dev
```

### Passos

1. No chat do Agent, invoque `/verify-catalog-ui`
2. Aprove chamadas MCP quando solicitado (ou configure Run Mode)
3. O Agent deve:
   - Navegar para `http://localhost:3000`
   - Filtrar categoria **Roupas**
   - Criar um produto de teste
   - Editar e excluir
   - Opcional: **Restaurar dados iniciais**

### Debug

1. **View → Output → MCP Logs**
2. Verifique se o servidor browser está habilitado
3. Confirme que a porta 3000 está livre

## Segurança (oficial)

- Instale servidores de fontes confiáveis
- Revise permissões e código de servidores críticos
- Use variáveis de ambiente para tokens

[Security considerations](https://cursor.com/docs/context/mcp#security-considerations)

## Referências

- [MCP specification](https://modelcontextprotocol.io/)
- [Cursor MCP FAQ](https://cursor.com/docs/context/mcp#faq)
