# ADR-003: Sem API nem persistência externa

## Status

Aceito

## Contexto

Requisito explícito: dados mockados, sem API. O repositório é focado em UI e em educação sobre Cursor, não em backend.

## Decisão

- Não criar `app/api/**`, Route Handlers, Server Actions de persistência ou integrações HTTP
- Fonte inicial: `src/data/*.seed.ts`
- Leitura/escrita apenas via Context no cliente

## Consequências

- Rules (`mock-data.mdc`) e `project-conventions.mdc` reforçam a restrição para o Agent
- Testes E2E via MCP browser cobrem apenas a UI local

## Referências

- [Next.js — Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) (não utilizados neste projeto)
