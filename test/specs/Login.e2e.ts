import { browser, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/LoginPage.js';

describe("Verify The LoginPage functionality", () => {

    it("Verify the Logo", async () => {
        await expect(LoginPage.logo).toBeDisplayed();
    });

    it("Verify the Sign-in with Google text", async () => {
        await expect(LoginPage.siginwithgoogle).toBeDisplayed();
    });

    it("Verify the SignUp Text", async () => {
        await expect(LoginPage.signupText).toBeDisplayed();
    });

    it("Verify the Email Field", async () => {
        await expect(LoginPage.emailField).toBeDisplayed();
    });

   /* it("Verify the inavlid email toast message after entering the invalid email address", async () => {
        await LoginPage.emailField.setValue(
            'invalid-email'
        );
        await LoginPage.continueButton.click();
        await browser.pause(2000);
        await LoginPage.verifyInvalidEmailToast();
        
    });

*/
    it("Verify the Terms and Privacy text", async () => {
        await expect(LoginPage.termsPrivacyText).toBeDisplayed();
    });



    it("Verify the valid user able to login", async () => {
        await LoginPage.emailField.setValue(
            'iamkira134@gmail.com'
        );
        await LoginPage.continueButton.click();
        await browser.pause(15000);
        await LoginPage.enterOTP('123456');
        await browser.pause(15000);
        await expect(LoginPage.dashboardTitle).toBeDisplayed();
    
    })


});