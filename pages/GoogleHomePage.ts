import { Page } from 'playwright';

export class GoogleHomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.google.com');
    }

    async search(query: string) {
        await this.page.fill('textarea[name="q"]', query);
        await this.page.press('textarea[name="q"]', 'Enter');
    }

    async getSearchResults() {
        return await this.page.$$eval('h3', elements => elements.map(el => el.textContent));
    }
}