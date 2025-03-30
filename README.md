# README for Playwright Test Suite

## Overview

This repository contains a test suite written in JavaScript using [Playwright](https://playwright.dev/), designed to test the functionality of a web application (Swag Labs). The tests focus on verifying login functionality, adding products to the cart, and checking the shopping cart.

The test suite includes the following scenarios:
**Perform Login**: Verifies the login process, checks if the product page and shopping cart are visible, and ensures there are products listed.
    1. Perform login using "standard_user"
    2. On the opened page verify: 
        - Products (1) title is displayed
        - Shopping Cart icon (2) is displayed
        - More than 1 product (3) is displayed
**Add Product to the Cart**: Verifies adding a product to the cart, checking if the cart badge updates correctly, navigating to the cart page, and ensuring the product appears in the cart. Additionally, it checks removing a product from the cart.
    1. Perform login using "standard_user"
    2. Add the first product to the cart by clicking Add to Cart button
    3. Verify Shopping Cart icon contains the number of products added (equal 1)
    4. Open the Shopping Cart and verify the added product is displayed (the data should be taken from the Products page and used here to as an expected result)
    5. Remove the product by clicking Remove
    6. Verify no products are available in the Shopping Cart

## Prerequisites

Before running the tests, ensure the following:

- [Node.js](https://nodejs.org/) (version 14 or higher) is installed.
- [Playwright](https://playwright.dev/docs/intro) is installed.
  
To install the necessary dependencies:

```bash
npm install
```

## Running the Tests

To run the test suite, you can use the following command:

```bash
npx playwright test
```

Playwright will automatically run the tests in headless mode and provide a summary of the test results.

## Customization

You can modify the test cases to suit your needs. For example, you can change the credentials or modify the product selection logic. You can also add new test scenarios to verify additional features of the web application.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Swag Labs Application](https://www.saucedemo.com/)