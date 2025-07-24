# Playwright TypeScript Framework

## Overview
This framework is a modern, scalable, and modular end-to-end test automation framework built using Playwright with TypeScript. It supports cross-browser testing (Chromium, Firefox, WebKit) and includes features like logging, reporting, and CI/CD integration.

## Features
- **Playwright Test Runner**: Efficient and reliable test execution.
- **Page Object Model (POM)**: Encapsulation of page interactions.
- **Cross-Browser Testing**: Supports Chromium, Firefox, and WebKit.
- **Logging**: Playwright tracing for detailed logs.
- **Reporting**: HTML and Allure reports.
- **Parallel Execution**: Faster test runs.
- **GitHub Actions CI**: Automated test execution and report uploads.
- **Test Data Separation**: Keeps test data separate from logic.
- **LambdaTest Support**: Cloud-based browser testing.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-ts-framework
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Run tests locally:
   ```bash
   npx playwright test
   ```
2. View HTML report:
   ```bash
   npx playwright show-report
   ```
3. Generate Allure report:
   ```bash
   allure generate allure-results --clean -o allure-report
   allure open allure-report
   ```

## Running Tests

### Run All Tests (UI + API)
To run all tests together, use the following command:
```bash
npx playwright test
```

### Run Only API Tests
To run only the API tests, use:
```bash
npx playwright test tests/api
```

### Run Only UI Tests
To run only the UI tests, use:
```bash
npx playwright test tests
```

## CI/CD
GitHub Actions workflow is set up to run tests on every push to the `main` branch. Reports are uploaded as artifacts.

## Test Scenarios
- Check if none of the links are broken.
- Check number of images > 1.
- Google search tests (some fail, some pass).

## LambdaTest Integration
To enable LambdaTest support, update the Playwright configuration file with LambdaTest credentials and capabilities.

## Adding API Tests
1. Place your API test files in the `tests/api/` folder.
2. Use the `test.request` fixture or `request.newContext()` for clean API sessions.
3. Store test data and endpoints in the `data/` or `fixtures/` folder.
4. Follow TypeScript best practices for types and interfaces.

## Folder Structure
```
playwright.config.ts
PROMPT.md
pages/
    GoogleHomePage.ts
tests/
    google.spec.ts
.github/
    workflows/
        playwright-tests.yml
```

## License
This project is licensed under the MIT License.