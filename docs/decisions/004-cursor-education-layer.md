# ADR-004: Camada educacional Cursor no repositório

## Status

Aceito

## Contexto

O repositório será publicado no GitHub para ensinar Rules, Skills, MCP e context engineering com um app real.

## Decisão

Versionar no Git:

| Artefato | Caminho |
|----------|---------|
| Project Rules | `.cursor/rules/*.mdc` (4 exemplos de modos) |
| Agent Skills | `.cursor/skills/*/SKILL.md` |
| Instruções simples | `AGENTS.md` + `src/components/AGENTS.md` |
| MCP exemplo | `.cursor/mcp.json.example` |
| Guias | `docs/cursor/` |
| ADRs | `docs/decisions/` |

Cada decisão técnica relevante ganha ADR com link para documentação oficial.

## Consequências

- Contribuidores devem atualizar `docs/cursor/` ao adicionar rules/skills
- O app permanece simples; a complexidade didática fica na pasta `docs/` e `.cursor/`

## Referências

- [Cursor Rules](https://cursor.com/docs/context/rules)
- [Cursor Skills](https://cursor.com/docs/context/skills)
- [Cursor MCP](https://cursor.com/docs/context/mcp)
- [Plugins reference](https://cursor.com/docs/reference/plugins)
