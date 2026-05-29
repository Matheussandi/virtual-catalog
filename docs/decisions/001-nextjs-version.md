# ADR-001: Next.js 16 com App Router

## Status

Aceito

## Contexto

O projeto precisa da versão estável recente do Next.js, com App Router e suporte a React 19, alinhado à documentação oficial e a patches de segurança de maio de 2026.

## Decisão

- Usar **Next.js 16.2.6+** (pin em `package.json`)
- **App Router** em `src/app/`
- **Turbopack** no desenvolvimento (`npm run dev`)
- TypeScript, Tailwind CSS v4, ESLint via `create-next-app`

## Consequências

- Componentes são Server Components por padrão; interatividade em arquivos com `"use client"`
- Imagens remotas exigem `remotePatterns` em `next.config.ts`
- Node.js >= 20.9.0 recomendado para Next 16

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [Vercel — Next.js May 2026 security release](https://vercel.com/changelog/next-js-may-2026-security-release)
