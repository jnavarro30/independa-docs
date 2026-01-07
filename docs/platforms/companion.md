---
outline: deep
---

## Table of Contents
1. [iOS](#ios)
2. [Android](#android)  

# Overview

This page demonstrates the setup, installation and deployment of the EverThrive/Indpenda Companion app for both iOS and Android

## iOS

### EverThrive / Independa
- https://github.com/Independa1/everthrive-mobile.git
- https://github.com/Independa1/independa-mobile.git

### Setup
- reademe.md files will be included in project
- npm i
- make sure you have the Users/{username}/.netrc file with the following:
```
machine danabrainvital.jfrog.io 
login yourArtifactoryUsername 
password yourArtifactoryIosPasskey
```
- pod install and potentially delete Podfile.lock
```
cd ios
pod install --repo-update
```

#### Deployment
- EverThrive stage-common and Independa main-common branch
- update version number in the following files: package.json, appConfig.js, build.gradle
- open project in Xcode everthrive-mobile/ios/EverThriveMobile.xcworkspace
- open project in Xcode independa-mobile/ios/IndependaMobile.xcworkspace
- The following steps have screenshots for reference:
- Xcode General Settings (be sure to update the version number accordingly)
- signing & capabilities
- EverThrive build phases

![Xcode General](./assets/xcode_general.png)

![Xcode Signing & Capabilities](./assets/xcode_signing_capabilities.png)

![Xcode Compile Sources](./assets/bp_compile_sources.png)

![Xcode Link Binary](./assets/bp_link_binary_libraries.png)

![Xcode Bundle Resources](./assets/bp_bundle_resources.png)

- Independa build phases

![Xcode General](./assets/independa_general.png)

![Xcode Signing & Capabilities](./assets/independa_signing_capabilities.png)

![Xcode Compile Sources](./assets/independa_compile_sources.png)

![Xcode Link Binary](./assets/independa_link_binary.png)

![Xcode Bundle Resources](./assets/independa_bundle_resources.png)

- build
- test if working
- archive when satisfied
- distribute to app store
- the app will now be in TestFlight in about 20 minutes

#### TestFlight
- https://appstoreconnect.apple.com/login
- select apps > EverThrive or Independa Companion > TestFlight
- select uploaded build and fill in Test Details for developers
- manage and select standard encryption and app is unavilable in France
- download TestFlight on iOS
- should get a code or invite
- start testing

#### Misc
- It might be outdated, but some certificates would have to be added to the keychain:
![Keychain](./assets/key_chain.png)

## Android

### EverThrive
- https://github.com/Independa1/everthrive-mobile.git

#### Deployment
- use the stage-common branch
- update version number in the following files: package.json, appConfig.js, build.gradle
- update versionCode in build.gradle as well format example: version 1.3.1 would be versionCode 103010 (add a zero after every digit in the version number)
- go to project in terminal everthrive-mobile/
```
npm run android
```
- this should build the android app in a connected device or a simulator
- after successfully testing, create a signed adb file
```
cd android
./gradlew clean
./gradlew bundleRelease
```
- app-release.aab will be created
- upload release to Google play and delete .aab file from repo

#### Google Play Console
- The following steps have screenshots for reference:
- https://play.google.com/console/u/0/developers/5202719745219847485/app-list
- select app > test and release > testing > internal testing > create new release button
- use the version number as the release name
- share downloadable link to developers for access

![Upload .aab file](./assets/google_test_release.png)

#### Play Store
- use link to download app from the play store for testing

### Simulators
<pre>{{ page }}</pre>

### Deployment
<pre>{{ page }}</pre>
- Android https://github.com/Independa1/independa-android.git
- LG https://github.com/Independa/IndependaLGWebOSApp.git
