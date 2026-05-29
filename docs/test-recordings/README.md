# Gravações E2E (Playwright)

## Apresentação do projeto

O vídeo exibido no [README](../../README.md) é gerado por este teste:

**[catalog-e2e.webm](./catalog-e2e.webm)**

### Cursor visível na gravação

O Playwright grava só o conteúdo do navegador, não o ponteiro do sistema. Para a demo, o teste injeta um círculo escuro (`#pw-demo-cursor`) que acompanha `page.mouse.move` antes de cada clique — ver [`e2e/helpers/presentation.ts`](../../e2e/helpers/presentation.ts).

### Ritmo da demo

- Pausas entre etapas (`pause`)
- Movimento do mouse em vários passos (`steps: 30`)
- Digitação com `pressSequentially`
- `slowMo` no `playwright.config.ts`

## Regenerar

```bash
npm run test:e2e:video
```

Copia o `.webm` mais recente para esta pasta.

## Fluxo gravado (≤ 30s)

1. Listagem do catálogo (12 produtos)
2. Filtro por **Todas**, **Eletrônicos**, **Roupas** e **Casa**
3. **Novo produto** — cadastro de "Produto Demo Vídeo"
4. **Ver detalhes** do produto recém-criado

Código: [`e2e/catalog.spec.ts`](../../e2e/catalog.spec.ts)
