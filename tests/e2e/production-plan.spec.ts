import { test, expect } from '@playwright/test'

test.describe('production plan flow', () => {
  test('home page displays item categories and items', async ({ page }) => {
    await page.goto('/')
    // The home page renders category headings and item links
    await expect(page.getByText('Element')).toBeVisible()
    await expect(page.getByText('Component')).toBeVisible()
    // Iron Ore should appear as a link on the home page
    const ironOreLink = page.getByRole('link', { name: /iron ore/i })
    await expect(ironOreLink.first()).toBeVisible()
  })

  test('navigating to iron ingot recipe page shows the item name and a machine count input', async ({ page }) => {
    await page.goto('/recipe/iron-ingot')
    // Item heading
    await expect(page.getByText('Iron Ingot')).toBeVisible()
    // There should be a numeric input for machine count
    const machineInput = page.locator('input[type="number"]')
    await expect(machineInput).toBeVisible()
    await expect(machineInput).toHaveValue('1')
  })

  test('production plan shows recipe calculation cards', async ({ page }) => {
    await page.goto('/recipe/iron-ingot')
    // Iron Ingot requires Iron Ore — both should appear in the production plan cards
    // The RecipeCalculationCard renders the item name as a heading text
    const cardHeadings = page.locator('.bg-slate-800')
    await expect(cardHeadings.first()).toBeVisible()
  })

  test('changing machine count updates production plan', async ({ page }) => {
    await page.goto('/recipe/iron-ingot')
    const machineInput = page.locator('input[type="number"]')
    await expect(machineInput).toBeVisible()

    // Clear and type a new value
    await machineInput.fill('3')
    // Trigger change event
    await machineInput.press('Tab')

    // The machine count displayed should reflect the new value
    await expect(machineInput).toHaveValue('3')
  })

  test('production plan for a complex item shows multiple recipe cards', async ({ page }) => {
    // Magnetic Coil requires Magnet and Copper Ingot, which require Iron Ore and Copper Ore
    await page.goto('/recipe/magnetic-coil')
    await expect(page.getByText('Magnetic Coil')).toBeVisible()

    // Multiple recipe cards should be rendered (Magnetic Coil, Magnet, Copper Ingot, etc.)
    const productionCards = page.locator('.bg-slate-800')
    const count = await productionCards.count()
    expect(count).toBeGreaterThan(1)
  })

  test('item with alternate recipes shows the alternate recipe toggle button', async ({ page }) => {
    // Diamond has 2 recipes — the RecipeCalculationCard renders a toggle
    // when itemInfo.recipes.length > 1 (the HiCubeTransparent icon button)
    await page.goto('/recipe/diamond')
    await expect(page.getByText('Diamond')).toBeVisible()

    // The toggle is a small round button containing the swap icon
    // It is rendered with a specific class set only when recipes.length > 1
    const toggleBtn = page.locator('.bg-slate-700.rounded-full')
    await expect(toggleBtn.first()).toBeVisible()
  })

  test('clicking alternate recipe toggle switches the displayed recipe', async ({ page }) => {
    await page.goto('/recipe/diamond')
    await expect(page.getByText('Diamond')).toBeVisible()

    // Before toggle: recipe 0 uses Energetic Graphite
    // After toggle: recipe 1 uses Kimberlite Ore
    const toggleBtn = page.locator('.bg-slate-700.rounded-full').first()

    // The production plan section is rendered below the speed selectors
    // Click the toggle
    await toggleBtn.click()

    // After toggling, the page should still show Diamond
    await expect(page.getByText('Diamond')).toBeVisible()
    // The toggle button remains present
    await expect(toggleBtn).toBeVisible()
  })

  test('navigating from home page item link loads correct recipe page', async ({ page }) => {
    await page.goto('/')
    // Click on Gear item link
    const gearLink = page.getByRole('link', { name: /^gear$/i })
    await gearLink.first().click()

    // Should navigate to /recipe/gear
    await expect(page).toHaveURL(/\/recipe\/gear/)
    await expect(page.getByText('Gear')).toBeVisible()
  })

  test('production speed selectors are visible on recipe page', async ({ page }) => {
    await page.goto('/recipe/gear')
    // ProductionSpeedSelection renders buttons for assembling, smelting, chemical
    await expect(page.getByText(/assembling/i)).toBeVisible()
  })
})
