---
outline: deep
---

## Dentulu

| DEV | Endpoint |
| ----------- | ----------- |
| PROD | https://app.dentulu.com |
| PROD | https://api-v2.independa.com/partner/dentulu/care-recipient?uid= |
| PROD | https://app.dentulu.com/lg/registration?uuid= |
| STAGE | https://api-stage.independa.com/partner/dentulu/care-recipient?uid= |
| STAGE | https://www.dentulustaging.com/lg/registration?uuid= |

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

Visit https://www.backofficing.com/dashboard/index for status 

### ISSUES
- 'https://www.dentulustaging.com/api/v3/User/getAppointmentInfo' 200 OK
- {"msg":"column \"date_of_birth\" does not exist"}