import { $ } from '@wdio/globals';

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

    async verifyLogo() {
        await this.logo.waitForDisplayed({
            timeout: 10000
        });

        return await this.logo.isDisplayed();
    }


    async verifysiginwithgoogle() {
      await expect(this.siginwithgoogle).toBeDisplayed();
   }


    async enterEmail(email) {
        await this.emailField.waitForDisplayed({
            timeout: 10000
        });

        await this.emailField.click();
        await this.emailField.setValue(email);
    }
}

export default new LoginPage();