# PlaywrightAutomation

Here’s your complete `README.md` content tailored to your `package.json` and setup, including test commands, Prettier/ESLint usage, and environment file encryption/decryption:

---

````markdown
# 🎭 Playwright Automation (JavaScript)

This repository contains an automated test framework using [Playwright](https://playwright.dev/) with JavaScript. It includes test tagging (`@sanity`, `@regression`), code formatting, linting, Git hooks with Husky, and secure handling of environment files using encryption.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
````

This sets up:

* Playwright
* Prettier
* ESLint
* Husky for Git hooks
* Lint-staged for pre-commit formatting and linting

---

## 🧪 Running Test Cases

### ▶ Run All Tests (Headed Mode)

```bash
npm run regression
```


### ✅ Run Sanity Suite

```bash
npm run sanity
```
```

### 🧼 Format Code

```bash
npm run format
```

Formats `.js`, `.json`, and related files using Prettier.

---

## 🧹 Pre-commit Hooks

Husky is set up to automatically run lint-staged before each commit. This includes:

* Fixing lint errors with ESLint
* Formatting with Prettier

### To install Husky hooks after `npm install`:

```bash
npm run prepare
```

### Lint-Staged Configuration

```json
"lint-staged": {
  "*.{js,ts,jsx,tsx,json}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

---

## 🔐 Encrypt & Decrypt Environment Files

Sensitive environment variables (like credentials) are managed securely.

### 🔒 Encrypt `.env` File

```bash
make encrypt filename=.ci/creds-pool/test-stg.env
```

This uses tools like `sops` to encrypt the file safely for version control.

### 🔓 Decrypt `.env` File

```bash
make decrypt filename=.ci/creds-pool/test-stg.env
```

Ensure decryption before running tests locally or in CI pipelines.

---

## 🛠 Technologies Used

* [Playwright](https://playwright.dev/)
* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)
* [Husky](https://typicode.github.io/husky/)
* [lint-staged](https://github.com/okonet/lint-staged)
* [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Project Structure

```
PlaywrightAutomation/
├── .ci/                    # Encrypted environment files
├── .husky/                 # Git hooks
├── pageobject/             # Page Object Model files
├── tests/                  # Test specs
├── utils/                  # Fixtures and test data
├── playwright.config.js    # Playwright config
├── package.json
└── README.md
```

---

## 🧾 Notes

* Ensure Node.js v16+ is installed
* Use `npx playwright test --help` to explore more CLI options
* Update test tags (`@sanity`, `@regression`) to filter execution dynamically


---

## 🧵 Author

Developed by [Vinoth Gopal](https://github.com/vinothgopal)


