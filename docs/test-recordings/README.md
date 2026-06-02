# Gravações E2E (Playwright)

## Vídeo no README

O [README](../../README.md) exibe o vídeo com uma URL do GitHub (**não** com caminho relativo ao repositório):

`https://github.com/user-attachments/assets/f09aeaa0-a67d-46fd-9fe6-f6ebcd43665d`

O GitHub só embute MP4 no Markdown quando o arquivo é enviado pelo editor web (arrastar e soltar). Arquivos versionados em `docs/test-recordings/` servem como fonte local para esse upload.

## Arquivos locais

| Arquivo | Uso |
|---------|-----|
| [catalog-e2e.webm](./catalog-e2e.webm) | Saída original do Playwright |
| [catalog-e2e.mp4](./catalog-e2e.mp4) | Versão para upload no README (gerada pelo script) |

### Cursor visível na gravação

O Playwright grava só o navegador. A demo injeta um círculo escuro (`#pw-demo-cursor`) antes de cada clique — ver [`e2e/helpers/presentation.ts`](../../e2e/helpers/presentation.ts).

### Ritmo da demo

- Pausas entre etapas (`pause`)
- Movimento do mouse em vários passos (`steps: 30`)
- Digitação com `pressSequentially`
- `slowMo` no `playwright.config.ts`

## Regenerar gravação

```bash
npm run test:e2e:video
```

Isso roda os testes, copia o `.webm` e gera o `.mp4` via [`scripts/copy-e2e-video.sh`](../../scripts/copy-e2e-video.sh).

## Atualizar o vídeo no README

1. Rode `npm run test:e2e:video`.
2. No GitHub, edite o [README.md](../../README.md) (ícone de lápis).
3. Arraste `docs/test-recordings/catalog-e2e.mp4` para o editor (ou use “Attach files”).
4. O GitHub gera uma nova URL `https://github.com/user-attachments/assets/...` — use essa linha na seção **Apresentação do projeto** e apague a URL antiga.
5. Atualize também a URL de referência neste arquivo, se mudou.

## Fluxo gravado (~17s)

1. Listagem do catálogo (12 produtos)
2. Filtro por **Todas**, **Eletrônicos**, **Roupas** e **Casa**
3. **Novo produto** — cadastro de "Produto Demo Vídeo"
4. **Ver detalhes** do produto recém-criado
5. Rolagem até o fim da página, pausa e **Voltar** ao catálogo

Código: [`e2e/catalog.spec.ts`](../../e2e/catalog.spec.ts)
