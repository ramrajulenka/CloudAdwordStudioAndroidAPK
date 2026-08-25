export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',

        'appium:automationName': 'UiAutomator2',

        'appium:deviceName': 'emulator-5554',

        'appium:udid': 'emulator-5554',

        'appium:app': 'D:\\CloudAdwordAPKFinal Testing\\App\\CloudAdwordStudio27July.apk',

        'appium:autoGrantPermissions': true
    }],

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