---
name: author-cursor-rule
description: Cria ou revisa Project Rules (.mdc) neste repositório com frontmatter correto. Use quando pedirem nova rule, /create-rule, ou padrões persistentes para o Agent.
---

# Autorar Project Rules

Guia para adicionar regras em `.cursor/rules/` neste projeto educacional.

## Formato obrigatório

- Extensão **`.mdc`** (arquivos `.md` em `.cursor/rules/` são ignorados)
- Frontmatter YAML com `description`, `globs` e/ou `alwaysApply`

## Escolher o modo

| Objetivo | Configuração |
|----------|----------------|
| Sempre no contexto | `alwaysApply: true` |
| Ao editar certos arquivos | `globs: src/foo/**` + `alwaysApply: false` |
| Agent decide pela descrição | `description` rica + `alwaysApply: false` (sem globs) |
| Só quando @mencionar | sem description/globs, `alwaysApply: false` |

Referência: [Cursor Rules](https://cursor.com/docs/context/rules)

## Template mínimo

```markdown
---
description: Uma linha clara do que esta rule faz e quando usar
globs: src/components/catalog/**
alwaysApply: false
---

# Título

- Instrução acionável 1
- Referencie @src/types/product.ts em vez de colar código inteiro
```

## Boas práticas (oficial)

- Menos de 500 linhas por rule
- Uma preocupação por arquivo — dividir se crescer
- Não duplicar o ESLint
- Versionar no Git para o time

## Neste repo

Exemplos existentes:

- `project-conventions.mdc` — always apply
- `catalog-domain.mdc` — apply intelligently
- `react-ui.mdc` — globs em componentes
- `mock-data.mdc` — globs em `src/data/`

Após criar, documentar em `docs/cursor/rules.md`.

Detalhes: [reference.md](reference.md)
