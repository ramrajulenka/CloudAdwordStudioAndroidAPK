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

//Verify the email toast message after entering the invalid email address

get invalidEmailToast() {
    return $('//android.widget.Toast[@text="Please enter valid email address"]');
}

async verifyInvalidEmailToast() {
    await expect(this.invalidEmailToast).toBeDisplayed();
   }
    //Verify the Deshboard page after login
    get dashboardTitle() {
    return $('//android.widget.TextView[@text="Dashboard"]');
}

async verifyDashboard() {
    await this.dashboardTitle.waitForDisplayed({
        timeout: 10000
    });

    await expect(this.dashboardTitle).toBeDisplayed();
}
    // OTP

    get verifyOtpButton() {
        return $('~Verify OTP');
    }

    get invalidOtpMessage() {
        return $('android=new UiSelector().textContains("Invalid OTP")');
    }

    async enterOTP(otp: string): Promise<void> {

        for (let i = 0; i < otp.length; i++) {

            const otpField = $(
                `android=new UiSelector().className("android.widget.EditText").instance(${i})`
            );

            await otpField.waitForDisplayed({
              //  timeout: 5000
            });

            await otpField.setValue(otp[i]);
        }
    }

    async clickVerifyOTP(): Promise<void> {
        await this.verifyOtpButton.click();
    }

    async verifyInvalidOTPMessage(): Promise<void> {

        await this.invalidOtpMessage.waitForDisplayed({
            timeout: 5000
        });

        await expect(this.invalidOtpMessage).toBeDisplayed();
    }
}

export default new LoginPage();