# Laboratório Cursor — índice

Este diretório documenta como este repositório usa **Rules**, **Skills**, **MCP** e **context engineering** no Cursor IDE.

## Guias

| Documento | Conteúdo |
|-----------|----------|
| [rules.md](./rules.md) | As 4 Project Rules e exercícios |
| [skills.md](./skills.md) | Skills do projeto e como invocar |
| [mcp.md](./mcp.md) | Model Context Protocol e laboratório browser |
| [context-engineering.md](./context-engineering.md) | Camadas de contexto e boas práticas |

## Decisões de arquitetura

Registros em [../decisions/](../decisions/) (ADRs).

## Documentação oficial Cursor

- [Rules](https://cursor.com/docs/context/rules)
- [Skills](https://cursor.com/docs/context/skills)
- [MCP](https://cursor.com/docs/context/mcp)
- [Plugins reference](https://cursor.com/docs/reference/plugins)

## Estrutura no repositório

```
.cursor/
  rules/          # *.mdc
  skills/         # */SKILL.md
  mcp.json.example
AGENTS.md         # instruções simples na raiz
src/components/AGENTS.md  # instruções aninhadas
```
