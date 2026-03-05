---
outline: deep
---

## Lucid Hearing 

| DEV | Endpoint |
| ----------- | ----------- |
| PROD | https://api-v2.independa.com/partner/lucid/care-recipient?uid= |
| PROD | https://hearingcheck-independa.gc.lucidhearing.com/?userid=&device= |
| STAGE | https://api-stage.independa.com/partner/lucid/care-recipient?uid= |
| STAGE | https://hearingcheck-independa-uat.gc.lucidhearing.com/?userid= |

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