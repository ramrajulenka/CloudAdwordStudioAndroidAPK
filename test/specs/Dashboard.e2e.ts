
import loginPage from '../pageobjects/LoginPage';
import Dashboard from '../pageobjects/Dashboard';

describe('Verify the Dashboard Page Functionality', () => {

    beforeEach(async () => {
        // Add common setup steps here if required
    });

    it('Verify the Dashboard page after login', async () => {
        await loginPage.LoginWithValidCredentials();
        await loginPage.verifyDashboard();

        await Dashboard.verifyCloudID();

        const actualText = await Dashboard.cloudID.getText();

        console.log('================================');
        console.log('Cloud ID:', actualText);
        console.log('================================');
    });

    it('Verify the Username on the Dashboard page', async () => {
        await Dashboard.verifyUsername();

        const actualText = await Dashboard.username.getText();

        console.log('================================');
        console.log('Username:', actualText);
        console.log('================================');
    });

    it('Verify the Location on the Dashboard page', async () => {
        await Dashboard.verifyLocation();
    });

    it('Verify the Total Screens on the Dashboard page', async () => {
        await Dashboard.verifyTotalScreens();
    });

    it('Verify the Online Status on the Dashboard page', async () => {
        await Dashboard.verifyOnlineStatus();
    });

    it('Verify the Offline Status on the Dashboard page', async () => {
        await Dashboard.verifyOfflineStatus();
    });

    it('Verify the Scan QR Code button on the Dashboard page', async () => {
        await Dashboard.verifyScanQRCodePageTitle();
    });

    it('Verify the Language button on the Dashboard page', async () => {
        await Dashboard.verifyLanguagePageTitle();
    });

    it('Verify the View All button on the Dashboard page', async () => {
        await Dashboard.clickViewAllButton();
        await Dashboard.verifyScreenPageTitle();

        const actualText = await Dashboard.screenPageTitle.getText();

        console.log('================================');
        console.log('Page Title:', actualText);
        console.log('================================');
    });

    it('Verify the Add Screen button on the Dashboard page', async () => {
        await Dashboard.verifyAddScreenButton();
    });

});