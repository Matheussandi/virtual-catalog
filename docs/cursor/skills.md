# Agent Skills neste repositório

[Agent Skills](https://cursor.com/docs/context/skills) são pacotes versionados que ensinam o Agent fluxos multi-passo. Neste projeto ficam em `.cursor/skills/<nome>/SKILL.md`.

## Skills disponíveis

| Skill | Invocação | Uso |
|-------|-----------|-----|
| `catalog-crud` | `/catalog-crud` ou descreva CRUD | Alterar criar/editar/excluir produtos |
| `verify-catalog-ui` | `/verify-catalog-ui` | Testar UI com MCP browser |
| `author-cursor-rule` | `/author-cursor-rule` | Criar ou revisar `.mdc` |

Cada pasta pode incluir `reference.md` com checklists e links.

## Rules vs Skills

| | Rules | Skills |
|---|--------|--------|
| **Função** | Guardrails persistentes | Playbooks de tarefa |
| **Formato** | `.mdc` + frontmatter | `SKILL.md` + frontmatter |
| **Exemplo** | "Sempre PT-BR, sem API" | "Passo 1: editar Provider…" |

## Exercício 1 — CRUD

1. Inicie `npm run dev`
2. No Agent: `/catalog-crud adicionar campo marca ao produto`
3. Compare o diff com os arquivos listados na skill

## Exercício 2 — Nova skill

1. Copie `.cursor/skills/catalog-crud/` como modelo
2. Crie `SKILL.md` com `name` e `description` no frontmatter
3. Documente aqui na tabela

## Referências

- [Plugins reference — skills discovery](https://cursor.com/docs/reference/plugins)
- Estrutura recomendada: [Cursor create-skill](https://cursor.com/docs/context/skills) (oficial)
