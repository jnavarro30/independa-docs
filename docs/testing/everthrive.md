---
outline: deep
---
# EverThrive

### Project Name: EverThrive
### Version: 1.0
### Prepared By: EverThrive Team
### Date: September 23, 2025 

<br>

## Table of Contents
1. [Introduction](#introduction)
2. [Objectives](#objectives)  
3. [Scope](#scope)  
4. [Test Approach](#test-approach)  
5. [Test Execution Strategy](#test-execution-strategy)   
6. [Test Environments](#test-environments)  
7. [Roles & Responsibilities](#roles--responsibilities)  
8. [Time Scale](#time-scale)

## Introduction

The focus of this project:

- Simplicity of use in all areas
- Realiable user log in, payments and other transactions
- Secure using OTP
- Check-Ins
- Partners

## Objectives

- Ensure high-quality user experience across the chrome browser and tv devices.

- Catch regressions early by running Playwright tests after every commit.

- Use data-testid attributes to make tests stable and independent of UI layout changes.

- Creating Pull Requests (PRs) for code and test reviews before merging.

- Automate testing where possible.

## Scope
#### In-Scope

- Browser Testing: Chrome (latest stable version) on desktop.

- Mobile Devices: Verify calls and browser actions triggered from Android and iOS devices.

- Happy Path: Key workflows automated end-to-end using Playwright.

- Exploratory testing: (usability, accessibility, error-handling).

- New Feature Testing: Verify the new feature in isolation and related existing features to prevent regressions.

- Error cases: Show user specific erros for guidance

#### Out-of-Scope

- Non Chrome Browsers and legacy chrome browsers

- Performance/stress testing (handled separately).

- Security penetration testing (separate team).

## Test Approach
#### Risk-Based Testing

- Prioritize testing of high-risk features (authentication, payments, caregiver-patient interactions).

- Automate high-value regression scenarios.

- Apply exploratory testing for high-risk edge cases.

#### Scenario-Based Testing

- Focus on end-to-end user workflows (e.g., login → complete action → validate result).

- Use BDD-style scenarios that can be run manually or automated.

#### Data-Driven Testing

- Automate tests using parameterized datasets (roles, input variations).

- Test using Multiple Accounts (Empty and Populated for Manager, CR and at least 1 Contact)

- Reuse data pools for manual and automated test execution.

#### Exploratory Testing

- Use session-based charters (time-boxed sessions).

- Target areas automation cannot cover (UI/UX, accessibility, unexpected flows).

## Test Execution Strategy
#### Manual Testing

- Exploratory testing of new features and around it.

- Usability and accessibility validation.

- Rare or complex edge cases.

#### Automated Testing

- Playwright: Chrome browser regression, smoke tests, and workflow automation.

- Nightly CI/CD regression runs + smoke tests on each pull request.

## Test Environments

- Staging environment mirrors production setup for final validation.

- Device/browser coverage includes:

    - Mobile: Latest Android/iOS, plus one legacy OS version.

    - Web: Chrome.

## Roles & Responsibilities

- QA Engineers → Test design, automation, exploratory testing.

- Developers → Unit tests, CI/CD integration.

- Test Lead → Test planning, risk assessment, reporting.

- Product Owners → Acceptance criteria validation, sign-off.

## Time Scale

- 1 hour of exploratory testing
- 1 hour of sanity testing
- Specific related regression test on every commit
<!-- ## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->