import { expect } from '@wdio/globals';

class Actions {

    async click(element: WebdriverIO.Element): Promise<void> {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }

    async enterText(
        element: WebdriverIO.Element,
        text: string
    ): Promise<void> {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.setValue(text);
    }

    async verifyDisplayed(
        element: WebdriverIO.Element
    ): Promise<void> {
        await element.waitForDisplayed({ timeout: 10000 });
        await expect(element).toBeDisplayed();
    }

    async verifyText(
        element: WebdriverIO.Element,
        expectedText: string
    ): Promise<void> {
        await element.waitForDisplayed({ timeout: 10000 });
        await expect(element).toHaveText(expectedText);
    }

    async clear(element: WebdriverIO.Element): Promise<void> {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.clearValue();
    }

}

export default new Actions();