# Ionic 3 Toolkit
This project is a generic Ionic application with ingredients that can be part of every modern Ionic application.

## Dependecies, Run and Build

### Install Ionic CLI
To build and run this app you need to have Ionic CLI installed

```bash
$ sudo npm install -g ionic
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g {ionic version}
```

eg:
```bash
$ sudo npm install -g ionic@1.7.14
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Install plugins from package.json
Run `ionic cordova prepare ios` to install all Cordova plugins included in the package.json and add iOS platform to your project.

Run `ionic cordova prepare android` to install all Cordova plugins included in the package.json and add Android platform to your project.

### Run the app
Use `ionic serve -l` to run the app in browser and watch for changes in code

or

use `ionic serve` to just run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform
```bash
$ ionic cordova platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

### Build the app
```bash
$ ionic cordova build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic cordova emulate ios
```

Android:
```bash
$ ionic cordova emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:
```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-inappbrowser** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files(https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git).
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-network-information** - This plugin provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
* **phonegap-plugin-barcodescanner** - This plugin opens a camera view and automagically scans a barcode, returning the data back.
* **cordova-plugin-x-toast** - This plugin allows you to show a native Toast on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
* **cordova-plugin-vibration** - This plugin provides a way to vibrate the device.
* **cordova-plugin-spinner-dialog** - A waiting dialog / progress dialog plugin with spinner for Android, iOS and Windows Phone 8.
* **cordova-plugin-flashlight** - This plugin allows you to switch the flashlight / torch of the device on and off.
* **cordova-plugin-x-socialsharing** - This plugin allows you to use the native sharing window of your mobile device.
* **cordova-plugin-actionsheet** - Show a sheet of options the user can choose from.
* **cordova-plugin-sim** - This is a cordova plugin to get data from the SIM card like the carrier name, mcc, mnc and country code and other system dependent additional info.
* **cordova-plugin-brightness** - This plugin provides a simple way to interact with the brightness of your device for iOS and Android.
* **call-number** - Call a number directly from your cordova application (https://github.com/Rohfosho/CordovaCallNumberPlugin.git).
* **cordova-plugin-crop** - Crop an image in a Cordova app.
* **cordova-plugin-camera** - This plugin provides an API for taking pictures and for choosing images from the system's image library.
* **cordova-plugin-screen-orientation** - Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, WP8 and Blackberry 10.
* **com-sarriaroman-photoviewer** - This plugin is intended to show a picture from an URL into a Photo Viewer with zoom features.
* **de.appplant.cordova.plugin.local-notification** - The purpose of this plugin is to enable an application to inform its users that it has something for them when the application isn’t running in the foreground.
* **cordova-plugin-device-motion** - This plugin provides access to the device's accelerometer.
* **cordova-plugin-calendar** - This plugin allows you to add events to the Calendar of the mobile device.
* **cordova-plugin-dialogs** - This plugin provides access to some native dialog UI elements via a global object.
* **cordova-plugin-nativestorage** - This plugin enables native storage of variables in Android, iOS and Windows.
* **cordova-plugin-badge** - The essential purpose of badge numbers is to enable an application to inform its users that it has something for them when the application isn’t running in the foreground.
* **com.verso.cordova.clipboard** - Clipboard management plugin for Cordova/PhoneGap that supports iOS, Android, and Windows Phone 8 (https://github.com/VersoSolutions/CordovaClipboard.git).
* **cordova-plugin-contacts** - This plugin provides access to the device contacts database.
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-appavailability** - This plugin allows you to check if an app is installed on the user's device.
* **cordova-plugin-shake** - Detect when a physical device performs a shake gesture.
* **cordova-plugin-datepicker** - Show a native date or time picker widget.
* **cordova-plugin-tts** - Enables you to access the devices Text to Speech services.
* **uk.co.workingedge.phonegap.plugin.launchnavigator** - This Cordova/Phonegap plugin can be used to navigate to a destination by launching native navigation apps on Android and iOS (https://github.com/dpa99c/phonegap-launch-navigator.git).
* **com.bunkerpalace.cordova.YoutubeVideoPlayer** - Play Youtube Videos in a native Video Player on Android & iOS (https://github.com/Glitchbone/CordovaYoutubeVideoPlayer.git).
* **cordova-plugin-themeablebrowse** - The purpose of this plugin is to provide an in-app-browser that can also be configured to match the theme of your app.
* **cordova-plugin-insomnia** - Prevent the screen of the mobile device from falling asleep (https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git).
* **phonegap-plugin-push** - This plugin offers support to receive and handle native push notifications with a single unified API, and with no dependency on any other plugins.
* **cordova-plugin-apprate** - This plugin provide the rate this app functionality into your Cordova/Phonegap application.
* **com.paypal.cordova.mobilesdk** - Adds support for the PayPal SDK on iOS and Android platforms.
* **cordova-plugin-streaming-media** - This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
* **cordova-plugin-email-composer** - The plugin provides access to the standard interface that manages the editing and sending an email message.
* **cordova-plugin-globalization** - This plugin obtains information and performs operations specific to the user's locale, language, and timezone.
* **cordova-plugin-admobpro** - Offers an easy way to show Google AdMob banners in your app.

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `8b828c0d`

## Documentation
* [Ionic 3 Toolkit Quick Start Guide](https://docs.google.com/document/d/1Wr4_HhlAsuonR_shMnNbNWoVBjaJxA3OexfIw4Tdtw8/edit?usp=sharing)

## Changelog
```
1.20 - May 25, 2018
- Update libraries
- Capture signature using drawpad
- Demonstrate calendar with 4 different packages:
    1. Angular FullCalendar
    2. Angular Calendar
    3. Ionic2 Calendar
    4. PrimeNg Schedule
- Demonstrate pinch-to-zoom image

1.19 - March 16, 2018
- Enrich Typicons screen with more sample uses
- Rename "Ng2 Charts" menu item label to "Chart.js"
- Update chart.js library

1.18 - February 16, 2018
- Demonstrate Leaflet  interactive map
- Display Billboard charts
- Integrate Typicons and FontAwesome icons

1.17 - September 07, 2017
- Upgrade to Ionic 3.6
- Demonstrate HighCharts
- Display Tumblr posts in app
- Display Flickr posts in app
- Remove modules that use Ionic Native

1.16 - July 05, 2017
- Upgrade to Ionic 3.4.2
- Upgrade to Ionic Native 3.12.1
- Demonstration of OneSignal Push Notifications
- Use of Ionic's SplitPane for keeping the side menu open on screens larger than 768px
- Fixed IDs for the call-number and streaming-media plugins
- Updated Firebase npm package
- On Database screens, a message is displayed when no entries
- On Database screens, an Ionic FAB button is displayed as an additional button for adding a new record

1.15 - June 05, 2017
- Support for development on Windows
- Usage of the Ionic Native Stripe plugin for the Stripe feature
- All plugins saved in the config.xml file
- Support for Ionic CLI 3.x - Required Plugins added
- Updated README and Documentation

1.14 - April 21, 2017
- Upgrade to Ionic 3
- Firebase CRUD demo
- CRUD demo and data synchronization with a remote PouchDB
- Name changed from "Barebone Ionic 2" to "Ionic 3 Toolkit"

1.13 - March 30, 2017
- Slack webhook integration
- Google Places autocomplete
- Tabs with badges
- Google Analytics demo
- Libraries fix

1.12 - February 23, 2017
- Fix libraries
- AdMob demo
- Login with Instagram and display Instagram posts
- Keep device screen awake

1.11 - February 03, 2017
- Stripe payments
- Twitter, GitHub and Linked In authentication providers
- Tinder cards
- Update to Ionic 2 final
- Fix of typescript library version

1.10 - January 26, 2017
- Update to Ionic 2 RC5

1.9 - January 12, 2017
- Contacts feature improved: Contact addition functionality and Contact details viewed on selection
- New features: Add rate, i18n

1.8 - January 5, 2017
- New features: Charts, Custom Flash Card

1.7 - December 22, 2016
- Update to Ionic 2 RC4
- New features: Youtube Video Player, Streaming Media and Themeable Browser

1.6 - December 16, 2016
- Update to Ionic 2 RC3
- New feature: Sqlite Storage

1.5 - December 1, 2016
- Paypal payments feature added

1.4 - November 25, 2016
- New features/screens added: Photo Viewer, Date Picker, Launch Navigator, RSS feeds, Galleries, Barcode Scanner and Components

1.3 - October 20, 2016
- Update to Ionic 2 RC0

1.2 - August 12, 2016
- Update to Ionic 2 Beta 11

1.1 - June 03, 2016
- Update to Ionic 2 Beta 7

1.0 - May 04, 2016
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)
* [Ionic 2.0](http://ionic.io/2)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
