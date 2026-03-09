import { expect, test } from '@playwright/test';

test('home renders and top navigation works', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#started .h-title span')).toHaveText('Alef Barbeli');
  await expect(page.getByRole('link', { name: 'Portfolio' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contato' })).toBeVisible();

  await page.getByRole('link', { name: 'Contato' }).click();
  await expect(page).toHaveURL(/\/contato$/);
});

test('portfolio shows 2-column grid and filter works', async ({ page }) => {
  await page.goto('/portfolio');

  const cards = page.locator('.box-items > .box-item');
  await expect(cards.first()).toBeVisible();
  await expect(cards).toHaveCount(8);

  const gridColumns = await page.locator('.box-items').evaluate((el) => getComputedStyle(el).gridTemplateColumns);
  expect(gridColumns.trim().split(' ').length).toBe(2);

  const filterButtons = page.locator('.filter-menu .btn-group button');
  await expect(filterButtons).toHaveCount(4);
  await filterButtons.nth(1).click({ force: true });
  await expect(cards.first()).toBeVisible();
});

test('portfolio item detail page is browseable from listing', async ({ page }) => {
  await page.goto('/portfolio');

  await page.locator('a[href="/portfolio/work1"]').first().click();

  await expect(page).toHaveURL(/\/portfolio\/work1$/);
  await expect(page.getByRole('heading', { level: 1, name: /Athleisure Landing Mockup/i })).toBeVisible();
  await expect(page.getByText(/Figma \+ Design System \+ Prototipacao/i)).toBeVisible();
});

test('locale switching updates UI language', async ({ page }) => {
  await page.goto('/');

  const visibleFlag = page.locator('.flag:not(.hidden)').first();
  await expect(visibleFlag).toBeVisible();

  await visibleFlag.click({ force: true });
  await expect(page.locator('.section.about .title_inner')).toBeVisible();
});

test('scroll resets to top when navigating from listing to case detail', async ({ page }) => {
  await page.goto('/portfolio');

  const wrapper = page.locator('.wrapper');
  await wrapper.evaluate((el) => {
    (el as HTMLElement).scrollTop = 900;
  });

  await page.locator('a[href="/portfolio/work1"]').first().click();
  await expect(page).toHaveURL(/\/portfolio\/work1$/);

  const scrollTop = await wrapper.evaluate((el) => (el as HTMLElement).scrollTop);
  expect(scrollTop).toBeLessThanOrEqual(2);
});
