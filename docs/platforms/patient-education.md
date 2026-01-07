---
outline: deep
---

# Patient Education

## Links

| Site | Link |
|-------------|-------------|
| Patient Education | [Demo Emma Site](https://demo-emma-admin.independa.com/#/) |
| 3K Videos | [AWS S3 Bucket](https://us-west-2.console.aws.amazon.com/s3/buckets/om-assets-dev?bucketType=general&region=us-west-2&tab=objects#)  |

Download Patient Education repos

## Journey Django, Journey Admin and MDM Client
### Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- setup steps included in the readme

## Cloudflared
### Run remotely
- brew install cloudflared
- cd project root
- cloudflared login
- journey-django
```
cloudflared tunnel --url http://localhost:8000
```
- get the random.trycloudflare.com
- add it to the .env.js of admin/client repos for API_HOST_URL
- run repo locally and then run the following:
- use 2 terminal windows/tabs
- each command should be run separately
```
cloudflared tunnel --url http://localhost:8001
cloudflared tunnel --url http://localhost:8002
```
- these commands will expose random.trycloudflare.com
- .trycloudflare.com will be your access point

<!-- kian
simplicity -->

```
{

"patient_first_name": /members/[memberUUID]
"title": "Homepage", /devices/
"theme": "mdm", /sites/[siteUUID]/units/[unitUUID] 
"logo": "https://s3.amazonaws.com/mdm-client/hospital-logo.png",  /sites/[siteUUID]
"small_logo": "https://s3.amazonaws.com/mdm-client/hospital-logo-small.png",  /sites/[siteUUID]
"name_image": "https://s3.amazonaws.com/mdm-client/journey-logo.png", /sites/[siteUUID]
"name": "Grey Sloan Memorial", /sites/[siteUUID]
"location": "Seattle", /sites/[siteUUID]
"slogan": "Taking excellent care of your loved ones", /sites/[siteUUID]
"pr_photo": "https://s3.amazonaws.com/mdm-client/hospital-image.png", /sites/[siteUUID]/units/[unitUUID]
"menu_options": {  /sites/[siteUUID]/units/[unitUUID]
  "watch_tv": {
    "menu_option": 1,
    "text": "Watch TV",
    "icon": "tv"
},
  "welcome": {
    "menu_option": 2,
    "text": "Welcome",
    "icon": "welcome"
},
  "patient_services": {
    "menu_option": 3,
    "text": "Patient Services",
    "icon": "service"
},
  "surveys": {
    "menu_option": 4,
    "text": "How Are We Doing?",
    "icon": "surveys"
},
  "education": {
    "menu_option": 5,
    "text": "Your Health Education",
    "icon": "education"
},
  "relaxation": {
    "menu_option": 6,
    "text": "Relaxation Videos",
    "icon": "relaxation"
},
  "reminders": {
    "menu_option": 7,
    "text": "Reminders",
   "icon": "reminders"
},
  "espanol": {
    "menu_option": 8,
    "text": "Español",
    "icon": "language"
}
}
}
```