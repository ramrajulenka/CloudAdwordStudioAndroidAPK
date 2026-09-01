
import { $, expect } from '@wdio/globals';
import { testData } from '../utility/testData';

class Dashboard {
    // ==============================
    // Dashboard Page Locators
    // ==============================

    get cloudID() {
        return $(
            `android=new UiSelector().text("Cloud ID : ${testData.Cloudid}")`
        );
    }

    get username() {
        return $(
            `android=new UiSelector().textContains("Hi, ${testData.Username}.")`
        );
    }

    get locationText() {
        return $('android=new UiSelector().text("Locations ")');
    }

    get totalScreensText() {
        return $('android=new UiSelector().text("Total Screens")');
    }

    get onlineStatusText() {
        return $('android=new UiSelector().text(" ONLINE")');
    }

    get offlineStatusText() {
        return $('android=new UiSelector().text("OFFLINE")');
    }

    get viewAllButton() {
        return $('android=new UiSelector().description("View All")');
    }

    get screenPageTitle() {
        return $('android=new UiSelector().text("Screens")');
    }

    get scanQRCodeButton() {
        return $(
            'android=new UiSelector().className("android.widget.ImageView").instance(0)'
        );
    }

    get languageButton() {
        return $(
            'android=new UiSelector().className("android.widget.ImageView").instance(1)'
        );
    }

    get scanQRCodePageTitle() {
        return $('android=new UiSelector().text("Scan QR to add screen")');
    }

    get scanQRCodePageBackButton() {
        return $(
            'android=new UiSelector().className("android.widget.ImageView").instance(0)'
        );
    }

    get languagePageTitle() {
        return $('android=new UiSelector().text("Select Language")');
    }

    get closeLanguageButton() {
        return $('android=new UiSelector().text("Close")');
    }

    get addScreenButton() {
        return $('android=new UiSelector().text("󰐕")');
    }

    get addScreenPageTitle() {
        return $('android=new UiSelector().text("Add Screen")');
    }

    // ==============================
    // Dashboard Page Methods
    // ==============================

    async verifyCloudID(): Promise<void> {
        await this.cloudID.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.cloudID).toBeDisplayed();
    }

    async verifyUsername(): Promise<void> {
        await this.username.waitForDisplayed({
            timeout: 15000,
        });

        await expect(this.username).toBeDisplayed();
    }

    async verifyLocation(): Promise<void> {
        await this.locationText.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.locationText).toBeDisplayed();
    }

    async verifyTotalScreens(): Promise<void> {
        await this.totalScreensText.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.totalScreensText).toBeDisplayed();
    }

    async verifyOnlineStatus(): Promise<void> {
        await this.onlineStatusText.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.onlineStatusText).toBeDisplayed();
    }

    async verifyOfflineStatus(): Promise<void> {
        await this.offlineStatusText.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.offlineStatusText).toBeDisplayed();
    }

    async clickViewAllButton(): Promise<void> {
        await this.viewAllButton.waitForDisplayed({
            timeout: 10000,
        });

        await this.viewAllButton.click();
    }

    async verifyScreenPageTitle(): Promise<void> {
        await this.screenPageTitle.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.screenPageTitle).toBeDisplayed();
    }

    async verifyScanQRCodePageTitle(): Promise<void> {
        await this.scanQRCodeButton.waitForDisplayed({
            timeout: 10000,
        });

        await this.scanQRCodeButton.click();

        await this.scanQRCodePageTitle.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.scanQRCodePageTitle).toBeDisplayed();

        await this.scanQRCodePageBackButton.click();
    }

    async verifyLanguagePageTitle(): Promise<void> {
        await this.languageButton.waitForDisplayed({
            timeout: 10000,
        });

        await this.languageButton.click();

        await this.languagePageTitle.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.languagePageTitle).toBeDisplayed();

        await this.closeLanguageButton.click();
    }

    async verifyAddScreenButton(): Promise<void> {
        await this.addScreenButton.waitForDisplayed({
            timeout: 10000,
        });

        await this.addScreenButton.click();

        await this.addScreenPageTitle.waitForDisplayed({
            timeout: 10000,
        });

        await expect(this.addScreenPageTitle).toBeDisplayed();
    }
}

export default new Dashboard();