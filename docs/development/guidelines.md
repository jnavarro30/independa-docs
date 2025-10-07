---
outline: deep
---
# Guidelines
## Table of Contents
1. [General Coding Guidelines](#general-coding-guidelines)
2. [Coding Standards & Tools](#coding-standards-&-tools)
3. [Code Style & Formatting](#code-style-&-formatting)  
4. [Linting](#linting)  
5. [Continuous Integration](#continuous-integration)

## General Coding Guidelines

- Follow clean code principles (small functions, meaningful variable names).

- Document public functions and components with docstrings/JSDoc.

- Avoid duplicating code (DRY) — prefer utility functions.

- Always write/update unit tests for new features or fixes.

## Coding Standards & Tools

To maintain consistency, readability, and quality across the Independa/EverThrive codebase, all contributors must follow the standards below.

## Code Style & Formatting

- All code must be auto-formatted before commit.

- Use the configured formatter for your language/framework:

- JavaScript → Prettier

- CSS/SCSS → Prettier + Stylelint

### Prettier

| Option | Value | Description |
| ----------- | ----------- | ----------- |
| singleQuote | true | - |
| semi | true | - |
| trailingComma | 'all' | - |
| bracketSpacing | true | - |
| arrowParens | 'always' | functions should always have parens around it's args |
| printWidth | 400 | Let's try and avoid wrapping |
| endOfLine | 'auto' | Don’t force any particular newline style — just match what’s already in the file or system. |

### Pug (if necessary)

| Option | Value | Description |
| ----------- | ----------- | ----------- |
| pugSingleQuote | true | - |
| pugPrintWidth | 400 | - |
| pugClassNotation | 'attribute' | - |
| pugBracketSpacing | null | - |

## Linting

- Linters must pass with no errors before code can be merged.

- Configurations are defined in the repo (.eslintrc.js).

### ESLint

| Rule | Value | Description |
| ----------- | ----------- | ----------- |
| 'no-console' | process.env.NODE_ENV === 'production' ? 'warn' : 'off' | - |
| 'no-debugger' | process.env.NODE_ENV === 'production' ? 'warn' : 'off' | - |
| eqeqeq | ['warn', 'always'] | strict === |
| 'object-curly-spacing' | ['warn', 'always'] | - |
| 'no-unused-vars' | 'warn' | - |
| 'vue/max-attributes-per-line' | ['warn', { singleline: { max: 100 }, multiline: { max: 1 } } ], | - |

Run manually:

- npm run lint       # JS/TS/CSS lint check

## Continuous Integration

- CI pipeline will run lint/format checks on all pull requests.

- Pull requests will not be merged if:

- Lint errors exist

- Code is not formatted properly

- Tests fail

<!-- ## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->