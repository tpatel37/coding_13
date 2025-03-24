# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




# UI Component Library - Assignment 13

This project is part of **Assignment 13** for the **UI Component Library** course. The goal of this assignment is to enhance an existing **React Component Library** by integrating **Husky pre-commit hooks**, **ESLint**, **Prettier**, **Jest tests**, **Docker**, and **GitHub Actions** for a **CI/CD pipeline**.

## Tools & Technologies Used

- **React** - JavaScript library for UI development.
- **Storybook** - A tool for developing and testing UI components in isolation.
- **TypeScript** - A statically typed JavaScript superset.
- **ESLint** - Linting tool to maintain code quality.
- **Prettier** - Code formatter for consistent styling.
- **Jest & Testing Library** - Testing framework for unit testing React components.
- **Husky** - Git hooks manager to enforce pre-commit rules.
- **Docker** - Used to containerize the project.
- **GitHub Actions** - Automated CI/CD pipeline to ensure code quality in every commit.

---

## Steps to Set Up the Project

### Clone the Repository & Install Dependencies


git clone https://github.com/tpatel37/coding_13
cd UI-Component-Library_Assignment-13
npm install


### Add Husky for Pre-commit Hooks


npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "prettier --write . && eslint . --fix && npm test"


### Configure ESLint & Prettier


npx eslint --init



### Edit package.json to include:

"scripts": {
  "lint": "eslint src/",
  "format:check": "prettier --check ."
},
"husky": {
  "hooks": {
    "pre-commit": "prettier --write . && eslint . --fix && npm test"
  }
}



### Run ESLint & Fix Issues


npx eslint src/ --fix



### To test the component library:


npm test



### Edit the Dockerfile

```dockerfile
# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /patel_tiyaben_ui_garden_build_checks

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Storybook instead of the React app
RUN npm run build-storybook

# Install `http-server` to serve Storybook
RUN npm install -g http-server

# Expose port 8018
EXPOSE 8018

# Start Storybook server
CMD ["npx", "http-server", "storybook-static", "-p", "8018", "--cors", "--no-cache", "--log-ip"]


### Build & Run the Docker Container - Storybook loads at http://localhost:8018


docker build -t patel_tiyaben_coding_assignment13 .
docker run -d -p 8018:8018 --name patel_tiyaben_coding_assignment13 patel_tiyaben_coding_assignment13



## Setting Up GitHub Actions for CI/CD

### Create .github/workflows/ci.yml


name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run ESLint
        run: npm run lint

      - name: Run Tests
        run: npm test


### Commit & Push to Trigger CI/CD


git add .
git commit -m "Add GitHub Actions workflow"
git push origin main


