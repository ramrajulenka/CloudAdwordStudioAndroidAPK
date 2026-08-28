import loginPage from '../pageobjects/LoginPage';
import Dashboard from '../pageobjects/Dashboard';

describe("Verify the Dashboard page Functionality", () => {

beforeEach(async () =>{

await loginPage.LoginWithValidCredentials();

});


it("Verify the Dashboard page after login", async () => {
    
await loginPage.verifyDashboard();
await Dashboard.verifyCloudID();

/*
const actualText = await Dashboard.cloudID.getText();
console.log("================================");
console.log(actualText);
console.log("================================");
*/
});

it("Verify the Username on the Dashboard page", async () => {
await Dashboard.verifyUsername();           

});

})