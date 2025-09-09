---
outline: deep
---
# Twilio

## Numbers

| Type | Number |
|-------------|-------------|
| Call | (800) 815-7829 |
| SMS | (858) 367-3998 |


## Campaigns

### Low Volume Mix
- $1.50/Month

#### Description
These are not "campaigns" per se. They are notifications for when certain events take place and the user needs to be notified, such as when a video call is coming in, a photo is received, a message is received, a calendar event is occurring, etc. These text messages notify the user even when they are offline, so they can react to the alerts if they so choose. Screenshots and further information available on the following google doc: https://docs.google.com/document/d/1KTJnIpP_wzZTDU1pPtPNX65n7BMSl6hmmyEzTHtvdIc/edit

#### Sending Messages
|  |  |
|-------------|-------------|
| Sending messages with embedded links? | Yes |
| Sending messages with embedded phone numbers? | No |
| Sending messages with age-gated content? | No |
| Sending messages with content related to direct lending or other loan arrangement? | No |

#### Sample Messages
- You have a {notification type} from {first name} {last initial}. As in, "You have a photo from Jane W."
- It is time for {activity}. As in, "It's time for lunch."
- You have - a video call from {first name last initial}. As in "You have a video call from John S."
- You have a message from {first name last initial}. As in "You have a message from John S."
- You have a video clip from {first name last initial}. As in "You have a video clip from John S."

### End User Consent

#### How do end-users consent to receive messages?

End users opt in by registering with Independa, and by this registration, they confirm our Terms of Use and Privacy Policy, which are accessible as part of the registration and cover notifications. Note, these are not marketing messages, but notifications that occur only if the end user has set up the system to do so. Business url: https://independa.com/independa-healthy-and-well/ Privacy Policy url (Information Choices and Changes Section): https://independa.com/privacy-policy/ Text message are currently the only source to OPT out of notifications (screenshots not available because we are unable to use text messaging at this time due to this current issue we are attempting to resolve). Here is the wording of our text messages: Send "STOP" to stop receiving text messages from Independa. You have been removed from receiving text messages. Please note: You will no longer receive notifications when thresholds are received, when messages or other content is received, when you receive a video call, etc. Do you wish to "opt in"? "Y" or “yes” to opt back in. All other responses, including no responses, you remain opted out. // if yes You are "opted in". Number that sends the text messages: 18008157829 Screenshots and further information available on the following google doc: https://docs.google.com/document/d/1KTJnIpP_wzZTDU1pPtPNX65n7BMSl6hmmyEzTHtvdIc/edit

#### Opting Messages

| Type | Message |
|-------------|-------------|
| Opt-in | You are now opted in to receive notifications from Independa. To end notifications, change within your admin tool or reply with "STOP" here. |
| Opt-out | Are you SURE you want ALL notifications from Independa to stop? Yes / Cancel |
| Help | Thank you for your request. Please call Independa at 800.815.7829 during Pacific business hours, or you can email us at support@independa.com. |

### Two-Factor authentication (2FA)
- $10/Month

#### Description
This campaign delivers one-time passcodes (OTP) via text message to users whom have given consent when signing up on one of our Independa platforms. These OTP messages will only be sent when a user attempts to log into the Independa/Everthrive web or mobile apps using their mobile numbers, ensuring secure access and notifying them of login activity. OTP information can be viewed here in our Privacy Policy https://independa.com/privacy-policy/.

#### Sending Messages
|  |  |
|-------------|-------------|
| Sending messages with embedded links? | Yes |
| Sending messages with embedded phone numbers? | No |
| Sending messages with age-gated content? | No |
| Sending messages with content related to direct lending or other loan arrangement? | No |

#### Sample Messages
- Your one-time passcode for Independa Health Hub is 123456.
- Your verification code for Independa Health Hub is 123456.
- Your Independa code is 123456. Please do not share this code with anyone.
- Your EverThrive code is 123456. Please do not share this code with anyone.

### End User Consent

#### How do end-users consent to receive messages?

End users opt in by registering with Independa, and by this registration, they confirm our Terms of Use and Privacy Policy, which are accessible as part of the registration and cover OTPs. Note, these are not marketing messages, but notifications that occur only if the end user attempts to log in. Business url: https://independa.com/independa-healthy-and-well/ Privacy Policy url (Information Choices and Changes Section): https://independa.com/privacy-policy/. A user will never receive an OTP other than when atempting to log in so deleteing or never using your account would be "opting out".

#### Opting Messages

| Type | Message |
|-------------|-------------|
| Opt-in | You are now opted in to receive notifications from Independa. To end notifications, change within your admin tool or reply with "STOP" here. |
| Opt-out | Are you SURE you want ALL notifications from Independa to stop? Yes / Cancel |
| Help | Thank you for your request. Please call Independa at 800.815.7829 during Pacific business hours, or you can email us at support@independa.com. |

## India
[Limitations](https://help.twilio.com/articles/223134167) for SMS
- When sending messages to India, your Twilio phone number will not appear as the sender of the message.
- Your Twilio number will be seen as a random short number between 5 and 9 digits long, e.g. 5NNNN - 5NNNNNNN to the end users.
- Messages from Twilio will not be affected by India's national "Do Not Disturb" (DND) list for SMS.
- Due to the sender ID change, recipients are unable to send a reply back to your Twilio phone number; SMS messaging to India is 1-way (outbound) only.