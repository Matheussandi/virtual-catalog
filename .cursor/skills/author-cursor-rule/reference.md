# Referência — author-cursor-rule

## Tabela frontmatter → comportamento

| alwaysApply | description | globs | Comportamento |
|-------------|-------------|-------|---------------|
| true | — | — | Sempre incluída |
| false | — | path | Auto-attach ao abrir arquivos que batem |
| false | sim | — | Agent pode incluir quando relevante |
| false | — | — | Apenas com @mention |

## Criar via chat

- Comando `/create-rule` no Agent
- Settings → Rules, Commands → Add Rule

## Documentação oficial

- [Rules](https://cursor.com/docs/context/rules)
- [Plugins reference (skills/rules layout)](https://cursor.com/docs/reference/plugins)
- [AGENTS.md alternative](https://cursor.com/docs/context/rules#agentsmd)

## Anti-padrões

- Copiar README inteiro na rule
- `alwaysApply: true` para tudo (incha o contexto)
- Instruções vagas ("escreva código limpo")
