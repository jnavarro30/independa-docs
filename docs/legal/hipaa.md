---
outline: deep
---

## HIPAA

- The effective date of this policy is Feb 2, 2026.

| Page | Name |
| ----------- | ----------- |
| 1 | [Privacy Policy](https://docs.google.com/document/d/1_8Bun4cIYcUHez45S2C284O0SFBdDHE0qgj3kmuZ85s/edit?tab=t.0#heading=h.daqz3gss2y0t) |
| 2 | [Security Policy](https://docs.google.com/document/d/1Mef6MyZmygUNmyUSel8dCZwAkR5g-hJ1XqKPXXaGqfQ/edit?tab=t.0#heading=h.m2aul5nogrys) |
| 3 | [Breach Notification Policy](https://docs.google.com/document/d/1EeSBn41zq8CESAfQjOav2exFDcduJhK3nuCBl39qvEQ/edit?tab=t.0#heading=h.5jzmr17of0cx) |
| 4 | [Risk Analysis](https://docs.google.com/document/d/16GUSuUFlNbUjltXfpwohbrBlW5NRc8q6ZiH5iy9VFJY/edit?tab=t.0#heading=h.9kdskf3tpnzd) |
| 5 | [Notice of Privacy Practices (NPP)](https://docs.google.com/document/d/1eEBF0RzRckDPwA_JUnXagM4mSx8BdLWE4YpC5d7tI0k/edit?tab=t.0#heading=h.rho2zomzw7an) |
| 6 | [Business Associate Agreement (BAA)](https://docs.google.com/document/d/1OhmALieNE6L2BJGoQ0--5MTWN4RcnA4gIOpb6HwKlg8/edit?tab=t.0#heading=h.cyhp41e862nj) |
| 7 | [Training Log](https://docs.google.com/document/d/1-jzTbP8j4VO3onSE95LSwRoUqee9zD5_ugiQweBw0Fc/edit?tab=t.0#heading=h.21z8f4948tvw) |
| 8 | [Employee Confidentiality Agreement](https://docs.google.com/document/d/1YqZwHOWf-Ijrmd0dRnnH6ilAwaF3mBWVhB8IYsjKEnk/edit?tab=t.0#heading=h.f6wuzoi1o90n) |

| Acronyms | Full Name |
| ----------- | ----------- |
| PHI | Protected Health Information |
|  |  |
|  |  |
|  |  |
|  |  |



1. What is HIPAA?
- Health Insurance Portability and Accountability Act (HIPAA) is a U.S. law that protects sensitive patient health information from being disclosed without the patient’s consent or knowledge.

HIPAA protects PHI (Protected Health Information)

PHI includes things like:

- Name
- Date of birth
- Medical records
- Diagnosis or conditions
- Lab results
- Insurance info
- Appointment records
- Device health readings
- Any health data tied to an identifiable person

Example:

| Data | Protected |
| ----------- | ----------- |
| Heart rate without identity | ❌ No |
| Heart rate + name/email | ✅ Yes|
| Medication list | ✅ Yes |
| Appointment reminders | ✅ Yes |

2. When an App Must Be HIPAA Compliant

HIPAA usually applies if your app works with:

- Healthcare providers
- Health insurers
- Healthcare clearinghouses
- Business associates of the above

Example:

Your caregiver or health monitoring app (like the one you mentioned previously with the Independa Health Hub) may fall under Business Associate if it processes patient data for providers.

3. Main HIPAA Requirements

HIPAA compliance generally requires:

- Administrative Safeguards
- Risk assessments
- Security policies
- Employee training
- Incident response plans
- Physical Safeguards
- Secure servers
- Restricted physical access
- Device protections
- Technical Safeguards
- Encryption (data at rest & in transit)
- Access control
- Authentication
- Audit logs
- Automatic logoff

Example:

Requirement	Example

- Encryption	TLS for API calls
- Access control	Role-based permissions
- Audit logs	Track who viewed patient data
- Authentication	MFA for staff accounts

4. Other Compliance Standards Apps Often Need

Depending on your users and location, you may also need other regulations.

1️⃣ General Data Protection Regulation (GDPR)

Applies if any EU users use your app.

Requirements:

- User consent for data collection
- Right to delete data
- Data portability
- Breach notification
- Privacy by design
- Right to know what data is collected
Even U.S. companies must comply if they have EU users.

2️⃣ California Consumer Privacy Act (CCPA)

Applies to many companies with California users.

Users must be able to:

- See collected data
- Request deletion
- Opt-out of selling data

The newer version is California Privacy Rights Act.

3️⃣ Children's Online Privacy Protection Act (COPPA)

If your app collects data from children under 13, you must:

- Get parental consent
- Limit data collection
- Protect child privacy

4️⃣ Payment Card Industry Data Security Standard

Needed if your app processes:

- credit cards
- payments
- subscriptions
- Example:
- Stripe
- PayPal
- in-app purchases

5️⃣ SOC 2

Not a law but important for SaaS platforms.

- Focuses on:
- security
- availability
- confidentiality
- processing integrity
- privacy
- Hospitals and enterprise clients often require SOC 2.

6. Typical Compliance Stack for Health Apps

Most health or caregiver apps follow something like:

| Compliance | Reason |
| ----------- | ----------- |
| HIPAA | Health data protection |
| SOC 2 | Enterprise security |
| GDPR | EU users |
| CCPA / CPRA | California users |
| PCI DDS | Payments |

7. Common Technical Requirements for Compliance

Apps usually implement:

- TLS encryption
- Encrypted databases
- Access control (RBAC)
- Audit logging
- Secure backups
- Data retention policies
- User consent tracking
- Data deletion mechanisms