import type { Locator, Page } from "@playwright/test";

/** Pausa curta entre passos (demo ≤ 30s). */
export async function pause(page: Page, ms = 300) {
  await page.waitForTimeout(ms);
}

export async function injectDemoCursor(page: Page) {
  await page.addInitScript(() => {
    if (document.getElementById("pw-demo-cursor")) return;

    const cursor = document.createElement("div");
    cursor.id = "pw-demo-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.style.cssText = [
      "position: fixed",
      "left: 0",
      "top: 0",
      "width: 22px",
      "height: 22px",
      "border: 2px solid #ffffff",
      "background: rgba(15, 15, 15, 0.92)",
      "border-radius: 50%",
      "box-shadow: 0 2px 10px rgba(0, 0, 0, 0.45)",
      "pointer-events: none",
      "z-index: 2147483647",
      "transform: translate(-50%, -50%)",
      "transition: left 50ms ease-out, top 50ms ease-out",
    ].join(";");

    const move = (x: number, y: number) => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    document.addEventListener(
      "mousemove",
      (event) => move(event.clientX, event.clientY),
      true,
    );

    document.documentElement.appendChild(cursor);
    move(window.innerWidth / 2, window.innerHeight / 3);
  });
}

async function moveMouseToLocator(
  page: Page,
  locator: Locator,
  steps = 12,
) {
  await locator.scrollIntoViewIfNeeded();
  const box = await locator.boundingBox();
  if (!box) {
    throw new Error("Elemento não visível para mover o cursor.");
  }
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, {
    steps,
  });
}

export async function moveAndClick(page: Page, locator: Locator) {
  await moveMouseToLocator(page, locator);
  await pause(page, 180);
  await locator.click();
  await pause(page, 220);
}

export async function moveAndFill(page: Page, locator: Locator, value: string) {
  await moveMouseToLocator(page, locator, 8);
  await pause(page, 120);
  await locator.click();
  await locator.fill(value);
  await pause(page, 150);
}
