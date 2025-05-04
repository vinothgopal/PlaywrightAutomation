# 🎭 Playwright Automation (JavaScript)

This repository contains an automated test framework using [Playwright](https://playwright.dev/) with JavaScript. It includes test tagging (`@sanity`, `@regression`), code formatting, linting, Git hooks with Husky, secure handling of environment files, and support for running tests in Docker.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

This sets up:

- Playwright
- Prettier
- ESLint
- Husky for Git hooks
- Lint-staged for pre-commit formatting and linting

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

This runs only tests tagged with `@sanity`:

```js
test('Login test @sanity', async ({ page }) => {
  // test code
});
```

### 🧼 Format Code

```bash
npm run format
```

Formats `.js`, `.json`, and related files using Prettier.

---

## 🧹 Pre-commit Hooks

Husky is set up to automatically run `lint-staged` before each commit. This includes:

- Fixing lint errors with ESLint
- Formatting with Prettier

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

Sensitive environment variables (like credentials) are encrypted/decrypted using a secure tool like `sops`.

### 🔒 Encrypt `.env` File

```bash
make encrypt filename=.ci/creds-pool/test-stg.env
```

### 🔓 Decrypt `.env` File

```bash
make decrypt filename=.ci/creds-pool/test-stg.env
```

Ensure decryption is done before running tests locally or in CI.

---

## 🐳 Running with Docker

### 📄 1. Build Docker Image

```bash
docker build -t playwright-tests .
```

### ▶️ 2. Run Tests in Docker (headless)

```bash
docker run --rm playwright-tests
```

### ✅ 3. Run Tagged Tests (e.g., `@sanity`)

```bash
docker run --rm playwright-tests npx playwright test --grep @sanity
```

### 📦 4. Access Test Reports

Mount volume to access `playwright-report` locally:

```bash
docker run --rm -v $(pwd)/playwright-report:/app/playwright-report playwright-tests
```

Then:

```bash
npx playwright show-report
```

---

## 🛠 Technologies Used

- [Playwright](https://playwright.dev/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Docker](https://www.docker.com/)
- [SOPS (for env encryption)](https://github.com/mozilla/sops)

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
├── Dockerfile              # Docker config
└── README.md
```

---

## 🧾 Notes

- Ensure Node.js v16+ is installed
- Use `npx playwright test --help` to explore more CLI options
- Update test tags (`@sanity`, `@regression`) to filter execution dynamically
- Docker must be installed to run tests inside containers

---

## 🧵 Author

Developed by [Vinoth Gopal](https://github.com/vinothgopal)
