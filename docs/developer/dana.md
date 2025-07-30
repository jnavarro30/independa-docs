---
outline: deep
---

## DANA Mobile Setup

- iOS
- Android

| Name | URL |
|-------------|-------------|
| DANA Mobile SDK| [Documentation](https://docs.google.com/document/d/1MBFUDMvw7YNl3bFS72_jNQqxCFXbfnYIQGKJqEocQck/edit?tab=t.0) |
| Code Implementation| [Snapshots](https://docs.google.com/document/d/1xx1bF9B_5gUFGg__Fy4MRFiGl608S9n49hmZGq9aGd0/edit?tab=t.0) |

### iOS Integration

1. Find or create .netrc in /home directory and add:
```
machine danabrainvital.jfrog.io 
login yourArtifactoryUsername 
password yourArtifactoryIosPasskey
```

2. Install SDK, in your Podfile add:
```
source "https://danabrainvital.jfrog.io/artifactory/api/pods/dana-ios-sdk-dana-sdk" 
pod 'DANA_API' 
```

3. Add the DANA repository to your CDN, in the terminal:
```
pod repo add-cdn dana-ios-sdk-dana-sdk "https://danabrainvital.jfrog.io/artifactory/api/pods/dana-ios-sdk-dana-sdk" 
```

4. Check Docs

Other steps I did:

Adding missing files to compile sources on xcode