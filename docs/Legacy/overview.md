---
outline: deep
---

## Legacy

## Sites

| Name | URL |
|-------------|-------------|
| Independa | [legacy.independa.com](https://legacy.independa.com/) |
| Provision | [our.independa.com/provision](https://our.independa.com/provision/?next=/provision/devices) |
| Jenkis | [alfred.independa.com/jenkins](https://alfred.independa.com/jenkins/job/Independa/) |
| Manual | [docs.google.com/document](https://docs.google.com/document/d/1-crn9itqrVxo3WqXv7CW5m2cmLxfR9uQYT1jeqFt24g/edit?tab=t.0#heading=h.2zcbdvof6wzw) |

## IATC

https://our.independa.com/angela_app/tv?&mac=MS0206017360264&hcap=false&demo=H5lR#


## CGWA Mobile App

### IOS

 

REQUIREMENTS

2019 Mac Intel Sonoma 14.4.1

Xcode 15.3 and command line tools

install python2

Homebrew

CocoaPods

brew install cocapods

ios-deploy

brew install ios-deploy

fastlane

brew install fastlane

CORDOVA

CGWA-Mobile ~ mkdir www

npm i -g cordova

cordova add platform ios

cordova prepare

RUN LOCALLY

CGWA-Mobile ~ npm run dev || make local

config.xml line 2 id = “com.independa.mobileapp” consider updating version

localhost:8000

APPLE DEVELOPER Certificates, Profiles & Devices to be used for XCODE Deployment

Sign in using ACCTENG email credentials (In LastPass)

Account > Certificates (Download or Create a Valid Certificate)

Account > Certificates > Profiles (Download or Create a Valid Profile)

Account > Certificates > Devices (Add your laptop Device to be included)

XCODE

Download and install Permission Certificates and Provisioning profile

Click preferences

Click Accounts

Click the + at the bottom left corner to add a new account

Add a new Apple ID

Sign in with credentials required (ask an Independa team member for the credentials and Gabe for the verification code)

Exit pop up window

Open workspace “Independa Caregiver.xcworkspace” in XCode

Click "Signing & Capabilities"

Click the dropdown menu for "Provisioning Profile" under the "Signing section"

Click "Download Profile" in the dropdown menu

Select "Final Dev"

Then click "Select Profile"

Next, you will need to ask a member of the Independa engineering team for certificate files and to add your device to the app store.

Once you have the certificate(s) downloaded, double click the certificate(s).

A pop-up will appear asking if you want to add the certificate. 

Click the dropdown menu next to "KeyChain: " and select "login"

Next, click "Add"

The app "KeyChain Access" should open next.

In  KeyChain Access, make sure the "login" button is highlighted in blue in the lefthand column. If it is not, click that button and double click the certificate download again.

Under ‘Deployement Info’ Set target device to IOS 11

Set Provisioning Profile

Go to Signing&Capabilities

Select ‘Final Dev’ provisioning profile

check ‘Automatically manage signing’ and enable

select ‘Independa, Inc.’ as team

disable automatic signing

re-select ‘Final Dev’ provisioning profile if necessary

For xcode version 14

Go to Pods and select Independa, Inc. For Team for every yellow Icon on the left starting with AppAuth as seen below.

make run-ios to build and deploy

34 plugins (cordova-plugin-advanced-imagepicker) sometimes is not installed using cordova prepare.

cordova-open-native-settings 1.5.5 "Native settings"
cordova-plugin-add-swift-support 2.0.2 "AddSwiftSupport"
cordova-plugin-advanced-imagepicker 1.6.2 "AdvancedImagePicker"
cordova-plugin-android-permissions 1.1.5 "Permissions"
cordova-plugin-app-version 0.1.14 "AppVersion"
cordova-plugin-appversion 1.0.0 "App Version"
cordova-plugin-audio-recorder 1.1.0 "Cordova Audio Recorder Plugin"
cordova-plugin-audiotoggle 1.0.3 "cordova-plugin-audiotoggle"
cordova-plugin-camera 7.0.0 "Camera"
cordova-plugin-cors 1.3.0 "CORS"
cordova-plugin-crop 0.3.1 "CropPlugin"
cordova-plugin-customurlscheme 5.0.2 "Custom URL scheme"
cordova-plugin-device 2.1.0 "Device"
cordova-plugin-enable-multidex 0.2.0 "Enable Multidex"
cordova-plugin-file-transfer 2.0.0 "File Transfer"
cordova-plugin-file 8.0.1 "File"
cordova-plugin-fingerprint-aio 6.0.0 "FingerprintAllInOne"
cordova-plugin-firebasex 16.5.0 "Google Firebase Plugin"
cordova-plugin-inappbrowser 6.0.0 "InAppBrowser"
cordova-plugin-insomnia 4.3.0 "Insomnia (prevent screen sleep)"
cordova-plugin-ios-camera-permissions 1.2.0 "iOS Permissions"
cordova-plugin-iosrtc 8.0.4 "iosrtc"
cordova-plugin-k-webrtc-permission 1.0.0 "KwebRTCPermission"
cordova-plugin-media-capture 5.0.0 "Capture"
cordova-plugin-media 7.0.0 "Media"
cordova-plugin-network-information 3.0.0 "Network Information"
cordova-plugin-purchase 13.10.1 "Purchase"
cordova-plugin-screen-orientation 3.0.4 "Screen Orientation"
cordova-plugin-splashscreen 6.0.2 "Splashscreen"
cordova-plugin-statusbar 2.4.3 "StatusBar"
cordova-plugin-streaming-media 2.3.0 "StreamingMedia"
cordova-plugin-x-socialsharing 6.0.4 "SocialSharing"
cordova.plugins.diagnostic 7.1.4 "Diagnostic"
es6-promise-plugin 4.2.2 "Promise"

 Make sure build phases are in an acceptible order on xcode

 ### Android 

 TIPS:

When adding/removing cordova plugins/platforms, add or remove twice

NOTES:

minSdkVersion: 24 (increased from 22 due to Cordova upgrade, required)

targetSdkVersion: 33

compileSdkVersion: 33

REQUIREMENTS

Android Studio

SDKman

Install Java & Gradle 

sdk install java 11.0.22-amzn

sdk current java (confirm correct version)

source "$HOME/.sdkman/bin/sdkman-init.sh"

sdk install gradle 7.6.4

sdk current gradle (confirm correct version)

Android Gradle plugin 7.4.2

In Android Project - kotlin 1.7.21

brew install fastlane for deployment to store

CORDOVA

npm i -g cordova@12

RUN LOCALLY

cd CGWA-Mobile 

create www folder in CGWA-Mobile root directory

cordova platform add android@12.0.1

remove "cordova-plugin-imagepicker": "^1.1.0" from package.json and it’s components (if given error)

npm i

corodova prepare

config.xml line 2 id = “com.independa.mobile” consider updating version

Sync gradle when necessary

BUILD COMMANDS

make run-android

make deploy-android-beta

GOOGLE PLAY DEPLOYMENT

staginginfo@independa.com

make deploy-android-beta



