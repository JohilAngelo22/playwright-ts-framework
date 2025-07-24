Extend my existing Playwright + TypeScript test automation framework to include modern, scalable API testing in the same codebase.

Requirements:
• Use Playwright’s built-in APIRequestContext to write REST API tests.
• Tests must be organized under a `tests/api/` folder.
• Test data and endpoints should be separate from test logic — store them in a `data/` or `fixtures/` folder.
• Use TypeScript best practices for types and interfaces if needed.
• Use Playwright Test Runner to run API and UI tests together or independently.
• Reuse existing config (`playwright.config.ts`).
• Add sample REST API tests: 
   - ✅ 1 GET request test (e.g., fetch Google homepage and check 200 OK).
   - ✅ 1 POST request test (use httpbin.org/post or a placeholder public API).
   - ✅ 1 negative test (expect 404 for a wrong endpoint).
• Results must integrate into the same HTML and Allure reports.
• Ensure the CI pipeline in GitHub Actions also runs the API tests and uploads results.
• Add clear README instructions on how to run only API tests or both together.

Sample site: google.com (for GET) and public placeholder APIs for POST tests.

Use Playwright’s `request.newContext()` or `test.request` fixture for clean API sessions.

Ensure the structure works well for adding more APIs in the future.
