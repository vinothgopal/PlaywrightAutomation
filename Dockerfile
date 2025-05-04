# Use the official Playwright image with dependencies
FROM mcr.microsoft.com/playwright:v1.52.0-jammy

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Install Husky Git hooks (optional if used only in dev)
RUN npm run prepare || true

# Run tests (optional: can be overridden at runtime)
CMD ["npx", "playwright", "test"]
