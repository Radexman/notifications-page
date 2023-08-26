# **Modern JavaScript Web Dev Environment**

This project boilerplate was created for instant jump into development without need to worry about setting everything up from scratch, it is framework agnostic. TypeScript with ESLint makes your code more robust and less error prone, Tailwind CSS with Prettier class auto-sorting plugin makes writing styles more comfortable without constant need to peek at your HTML for referance. Multiple config files makes it easy to customize your TypeScript, Tailwind and ESLint settings as you see them fit. ESLint and Prettier are set up to not conflict with each other. ESLint is focused on enforcing ECMAScript standards while Prettier is focused on formatting code. This documentation includes step by step setup, all the npm scripts and documentation referances for your convenience.

![Alt text](./dist/assets/modern-web-dev-logo.png 'a title')

## **Tech Stack**

-   TypeScript
-   ESLint
-   Tailwind CSS

## **NPM Scripts**

To run one of the following scripts type in your terminal following prefix:

```npm
npm run
```

And finish the command with one of the following afixes:

```npm
	"scripts": {
		"build": "tailwindcss -i src/css/index.css -o dist/css/main.css",
		"watch": "tailwindcss -i src/css/index.css -o dist/css/main.css --watch",
		"dev": "tsc --watch",
		"lint": "eslint --ignore-path .eslintignore --ext .js,.ts .",
		"format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\""
	},

```

## **Quick Start**

### **Environment Extensions**

Before proceeding with installation I recommend dowloading couple **VS Code extensions** that work well with featured technologies.
Some of them are requiered for this whole setup to work and others are really convenient additions to your workflow.

-   Error Lens - Displays error messages in more readable way.
-   ESLint - Integrates ESLint to VS Code.
-   Live Server - Runs your project on local host.
-   PostCSS Language Support - Adds support for modern and experimental CSS.
-   Prettier - Code Formatter - Formats your code and can be easily customizable.
-   Tailwind CSS IntelliSense - Gives you better cues while writing Tailwind code.

---

### **Install**

Clone or download this repository via github and install all dev dependencies with npm or yarn:

```npm
npm install
yarn install
```

---

### **Build**

For single build run this command in the terminal:

```npm
npm run build
```

---

### **Watch**

To watch for constant changes in Tailwind CSS type this command:

```npm
npm run watch
```

---

### **Compile**

To watch for constant changes in Typescript type this command:

```npm
npm run dev
```

---

### **Lint**

For ESLint to start linting your TypeScript code run this command:

```npm
npm run lint
```

---

### **Format**

To format your code I recommed to turn on format on save in your enviroment settings and run this command:

```npm
npm run format
```

## **Documentation Referances**

-   TypeScript - https://www.typescriptlang.org/docs/
-   Tailwind CSS -https://v2.tailwindcss.com/docs
-   ESLint - https://eslint.org/
-   Prettier - https://prettier.io/docs/en/index.html
-   Prettier auto-sorting plugin - https://tailwindcss.com/blog/automatic-class-sorting-with-prettier

## **Happy Coding!**
