import{$,expect} from '@wdio/globals'; 
import { testData } from '../utility/testData';




class Dashboard {

    //Getters for the elements on the dashboard page

    get cloudID() {
        return $(`android=new UiSelector().text("Cloud ID : ${testData.Cloudid}")`);
    }

  get username() {
    return $(`android=new UiSelector().text("Hi, ${testData.Username}")`);
}

  //Methods to verify the elements on the dashboard page
    async verifyCloudID(): Promise<void> {
    await this.cloudID.waitForDisplayed({
        timeout: 10000
    });

    await expect(this.cloudID).toBeDisplayed();
}

 async verifyUsername(): Promise<void>{
 await this.username.waitForDisplayed({

    timeout:15000
 });
await expect(this.username).toBeDisplayer();


 }





    }export default new Dashboard();