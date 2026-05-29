import { expect, test } from "@playwright/test";

import {
  injectDemoCursor,
  moveAndClick,
  moveAndFill,
  pause,
} from "./helpers/presentation";

const NEW_PRODUCT_NAME = "Produto Demo Vídeo";
const CATEGORY_TABS = ["Todas", "Eletrônicos", "Roupas", "Casa"] as const;
const IMAGE_URL =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop";

test.describe("Catálogo virtual", () => {
  test("apresentação: listagem, filtros, criar produto e detalhe", async ({
    page,
  }) => {
    await injectDemoCursor(page);
    await page.goto("/");
    await pause(page, 400);

    await expect(
      page.getByRole("heading", { name: "Catálogo virtual" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Ver detalhes" }).first()).toBeVisible();
    await expect(page.getByText(/12 produtos no catálogo/i)).toBeVisible();
    await pause(page, 250);

    for (const category of CATEGORY_TABS) {
      await moveAndClick(page, page.getByRole("tab", { name: category }));
      if (category === "Todas") {
        await expect(page.getByText(/12 produtos no catálogo/i)).toBeVisible();
      } else {
        await expect(page.getByText(/produtos nesta categoria/i)).toBeVisible();
      }
      await pause(page, 200);
    }

    await moveAndClick(page, page.getByRole("tab", { name: "Todas" }));
    await moveAndClick(page, page.getByRole("button", { name: "Novo produto" }));
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await moveAndFill(page, dialog.getByLabel("Nome"), NEW_PRODUCT_NAME);
    await moveAndFill(
      page,
      dialog.getByLabel("Descrição"),
      "Produto criado na demonstração do catálogo virtual.",
    );
    await moveAndFill(page, dialog.getByLabel("Preço (R$)"), "199.9");
    await moveAndFill(page, dialog.getByLabel("URL da imagem"), IMAGE_URL);

    await moveAndClick(page, page.getByRole("button", { name: "Adicionar produto" }));
    await expect(dialog).not.toBeVisible();
    await expect(page.getByText(NEW_PRODUCT_NAME)).toBeVisible();
    await pause(page, 250);

    const newProductCard = page
      .getByRole("listitem")
      .filter({ hasText: NEW_PRODUCT_NAME });
    await moveAndClick(
      page,
      newProductCard.getByRole("link", { name: "Ver detalhes" }),
    );

    await expect(page).toHaveURL(/\/produtos\//);
    await expect(
      page.getByRole("heading", { name: NEW_PRODUCT_NAME }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Editar produto" })).toBeVisible();
    await pause(page, 400);
  });
});
