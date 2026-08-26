import { $, expect } from '@wdio/globals';

class LoginPage {

    get logo() {
        return $('//android.widget.ImageView[1]');
    }

    get emailField() {
        return $('//android.widget.EditText[@resource-id="text-input-flat"]');
    }

    get signupText() {
        return $('//android.widget.TextView[contains(@text,"Sign Up")]');
    }

    get continueButton() {
        return $('~Continue');
    }

    get siginwithgoogle() {
        return $('~Sign in with Google');
    }

    get termsPrivacyText() {
        return $('android=new UiSelector().text("By signing up, you confirm that you have read and agree to the Terms & Privacy Policy")');
    }

    async verifyLogo(): Promise<boolean> {
        await this.logo.waitForDisplayed({
            timeout: 10000
        });

        return await this.logo.isDisplayed();
    }

    async verifysiginwithgoogle(): Promise<void> {
        await expect(this.siginwithgoogle).toBeDisplayed();
    }

    async verifyTermsPrivacyText(): Promise<void> {
        await expect(this.termsPrivacyText).toBeDisplayed();

        await expect(this.termsPrivacyText).toHaveText(
            'By signing up, you confirm that you have read and agree to the Terms & Privacy Policy'
        );
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailField.waitForDisplayed({
            timeout: 10000
        });

        await this.emailField.click();
        await this.emailField.setValue(email);
    }
}

export default new LoginPage();