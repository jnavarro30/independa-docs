---
outline: deep
---

## HIPAA

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