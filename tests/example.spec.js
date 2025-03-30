// @ts-check
import { test, expect } from '@playwright/test';

test('Perform Login', async ({ page }) => {
  // Login method
  await login(page)
  // Find Product title
  await expect(page.locator('.header_secondary_container').getByText('Products')).toBeVisible();
  // Find shopping card icon
  await expect(page.locator('.shopping_cart_container a[data-test="shopping-cart-link"]')).toBeVisible();
  // Check product cards count
  const count = await page.locator('div.inventory_item').count()
  await expect(count).toBeGreaterThan(1);
});

test('Add product to the cart', async ({ page }) => {
  // Login method
  await login(page)
  // Add product by click "Add to cart"
  const cardLabel = await page.locator('.inventory_item div.inventory_item_name').first().textContent()
  await page.locator('.inventory_item button.btn').first().click()
  // Check badge text
  await expect(page.locator('.shopping_cart_container span.shopping_cart_badge').getByText('1')).toBeVisible();
  // Go to Cart
  await page.locator('.shopping_cart_container a[data-test="shopping-cart-link"]').click()
  // Check card compliance
  const resultLabel = await page.locator('.cart_list .cart_item_label div.inventory_item_name').textContent()
  await expect(resultLabel).toEqual(cardLabel)
  // Remove card from cart
  await page.locator('.cart_item button.cart_button').click()
  // Check on empty cart
  await expect(page.locator('cart_item')).toHaveCount(0)
});

const login = async (page) => {
  // Go to site
  await page.goto('https://www.saucedemo.com/');
  // Check is availible
  await expect(page).toHaveTitle(/Swag Labs/);
  // Type Login
  await page.locator('.login-box .form_group input#user-name').fill('standard_user')
  // Type pass
  await page.locator('.login-box .form_group input#password').fill('secret_sauce')
  // Click login button
  await page.locator('.login-box input#login-button').click()
}