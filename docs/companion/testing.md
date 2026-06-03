---
outline: deep
---

## Table of Contents
1. [iOS](#ios)
2. [Android](#android)  

# Overview

Testing of the EverThrive/Indpenda Companion app for both iOS and Android

## Deployment Pre Check
- Is it an improvement from the previous release?
- Login
- Navigate around main dashboard
- Video Call
- Picture
- Test around the new changes/features

## Automated Testing

Playwright

## Manual Testing

### Video Call
- iOS Mobile <-> Android Mobile
- Mobile <-> HH
- Connection
- Leave recording when recipient is not available
- Video
- Audio
- Notification
- Ringing

| Type | Action | Expected |
| ----------- | ----------- | ----------- |
| iOS -> Android | Member -> Contact | Connect Audio/Video |
| iOS -> Android | Contact -> Member | Connect Audio/Video |
| Android -> iOS | Member -> Contact | Connect Audio/Video |
| Android -> iOS | Contact -> Member | Connect Audio/Video |