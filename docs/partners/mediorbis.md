---
outline: deep
---

## MediOrbis 

| DEV | Endpoint | Example |
| ----------- | ----------- | ----------- |
| PROD | https://api-v2.independa.com/partner/mediorbis/care-recipient?uid= | https://api-v2.independa.com/partner/mediorbis/care-recipient?uid=6ab3c3cd-0440-48ab-a6f2-27b7bf0e20f2 |
| PROD | https://mediorbis.com/msmd-patient/enrollMemberForSponsor.htm?spnsr=INDEPENDA220105--83741079&uid= |
| STAGE | https://api-stage.independa.com/partner/mediorbis/care-recipient?uid= | https://api-stage.independa.com/partner/mediorbis/care-recipient?uid=3946992d-6fdb-4152-a125-6c32e403d574 |
| STAGE | https://test3.mediorbis.com/msmd-patient/enrollMemberForSponsor.htm?spnsr=INDEPENDA220105--83741079&uid= |

- Query Parameters: uid (string, required): Unique identifier for the user.

- Request Example

```
Request METHOD: GET
Status Code: 200 OK
{
	"id": 3299,
	"uid": "3946992d-6fdb-4152-a125-6c32e403d574",
	"firstName": "Premjith",
	"lastName": "CT",
	"email": "premjith.p@consciotech.com",
	"phone": "8892929292",
	"zip": "90001",
	"time_zone": null,
	"user_address": [
		{
			"city": "",
			"state": "Hawaii",
			"address": "",
			"country": "United States",
			"phone_number": "8892929292"
		}
	]
}
```

### ISSUES
- DOB field is the current issue