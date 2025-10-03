---
outline: deep
---

# Patient Education

## Links

| Site | Link |
|-------------|-------------|
| Patient Education | [Demo Emma Site](https://demo-emma-admin.independa.com/#/) |
| 3K Videos | [AWS S3 Bucket](https://us-west-2.console.aws.amazon.com/s3/buckets/om-assets-dev?bucketType=general&region=us-west-2&tab=objects#)  |

## Journey Django
### Setup
- Repo journey-django
- Branch main
- Have Docker running
- Update requirements
- Settings.py: use dev-journey credentials
- pip install -r requirements.txt
- venv and run manage.py show migrations
- venv and run manage.py runserver
- Create venv environment
- source venv/bin/activate
- python3 -m venv env
- pyenv install 3.7.13
- pyenv local 3.7.13

### Run Locally
- source venv/bin/activate
- python app/manage.py runserver

## Journey Admin
### Setup
- Repo journey-admin
- Branch stage

### Run Locally
- make local
- Listening at http://localhost:8001

## MDM Client
### Setup
- Repo mdm-client
- Branch stage

### Run Locally
- make local
- Result: Listening at http://localhost:8002

<!-- kian
simplicity -->

https://us-west-2.console.aws.amazon.com/s3/buckets/om-assets-dev?bucketType=general&region=us-west-2&tab=objects#

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