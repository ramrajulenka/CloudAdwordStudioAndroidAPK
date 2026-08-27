export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.ts'],

    maxInstances: 1,

  capabilities: [{
        platformName: 'Android',

        'appium:automationName': 'UiAutomator2',

        'appium:deviceName': 'emulator-5554',

        'appium:udid': 'emulator-5554',

        'appium:app': 'C:\\Users\\L Rama Raju\\OneDrive - FUERTE SOLUTIONS PRIVATE LIMITED\\ClonProject\\CloudAdwordStudioAndroidAPK\\App\\CloudAdwordStudio27July.apk',

        'appium:autoGrantPermissions': true
    }],

 /* 
capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:udid': 'adb-10BF840D050012D-ejkpaC._adb-tls-connect._tcp',
    'appium:app': 'C:\\Users\\L Rama Raju\\OneDrive - FUERTE SOLUTIONS PRIVATE LIMITED\\ClonProject\\CloudAdwordStudioAndroidAPK\\App\\CloudAdwordStudio27July.apk',
    'appium:autoGrantPermissions': true
}],   */
    services: [
        ['appium', {
            command: 'appium'
        }]
    ],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        timeout: 60000
    }
};