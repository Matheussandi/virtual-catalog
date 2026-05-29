# ADR-002: Estado em memória com React Context

## Status

Aceito

## Contexto

O catálogo deve permitir CRUD na interface sem backend. O usuário escolheu que alterações **não persistem** após recarregar a página.

## Decisão

- Estado em `ProductsProvider` (`useState`) inicializado com cópia de `productsSeed`
- Métodos: `addProduct`, `updateProduct`, `removeProduct`, `resetProducts`
- Sem `localStorage`, cookies ou banco de dados

## Consequências

- F5 restaura os dados do seed
- `resetProducts()` restaura o seed na mesma sessão sem recarregar
- Toda a app de catálogo roda no cliente após hidratação do Provider

## Alternativas consideradas

| Alternativa | Motivo da rejeição |
|-------------|-------------------|
| localStorage | Fora do escopo pedido; complicaria laboratório de reset |
| Server Actions + arquivo | Simularia API/persistência desnecessária |

## Referências

- [React Context](https://react.dev/reference/react/useContext)
- [Next.js — Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
