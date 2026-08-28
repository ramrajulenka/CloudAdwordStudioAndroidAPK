import{$,expect} from '@wdio/globals'; 
import { testData } from '../utility/testData';




class Dashboard {

    //Getters for the elements on the dashboard page

    get cloudID() {
        return $(`android=new UiSelector().text("Cloud ID : ${testData.Cloudid}")`);
    }

  get username() {
    return $(`android=new UiSelector().textContains("Hi, ${testData.Username}.")`);
}

get locationText(){
    return $('android=new UiSelector().text("Locations ")')
}

get totalScreensText(){
    return $('android=new UiSelector().text("Total Screens")')
}

get onlineStatusText(){
    return $('android=new UiSelector().text(" ONLINE")')
}

get offlineStatusText(){
    return $('android=new UiSelector().text("OFFLINE")')
}
get viewAllButton(){
    return $('android=new UiSelector().description("View All")')
}
get screenPageTitle(){
    return $('android=new UiSelector().text("Screens")')
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
await expect(this.username).toBeDisplayed();

}

async verifyLocation(): Promise<void>{
    await this.locationText.waitForDisplayed({
        timeout:10000
    });
    await expect(this.locationText).toBeDisplayed();
}
 async verifyTotalScreens(): Promise<void>{
    await this.totalScreensText.waitForDisplayed({
        timeout:10000
    });
    await expect(this.totalScreensText).toBeDisplayed();
}
 async verifyOnlineStatus(): Promise<void>{
    await this.onlineStatusText.waitForDisplayed({
        timeout:10000
    });
    await expect(this.onlineStatusText).toBeDisplayed();
}
async verifyOfflineStatus(): Promise<void>{
    await this.offlineStatusText.waitForDisplayed({
        timeout:10000
    });
    await expect(this.offlineStatusText).toBeDisplayed();
}

async clickViewAllButton(): Promise<void>{
    await this.viewAllButton.waitForDisplayed({
        timeout:10000
    });
    await this.viewAllButton.click();

}

async verifyScreenPageTitle(): Promise<void>{
    await this.screenPageTitle.waitForDisplayed({
        timeout:10000
    });
    await expect(this.screenPageTitle).toBeDisplayed();
}
    }export default new Dashboard();