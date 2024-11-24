## Book Shop 📚
---
### Assignment Variant Set-1
---
### Live Application
[Book Shop Live](https://book-shop-plum-theta.vercel.app)

---
### Video Presentation
 [Video Presentation](https://drive.google.com/file/d/1tqPWmb1X_WGa-qlkZxw36oRBeM_B_5sR/view?usp=sharing)

---
### GitHub Repository

 [GitHub Repository](https://github.com/omarfaruk75/book-shop)

---
Welcome to **Book Shop**, an online platform for buying and selling books seamlessly. This repository contains the source code for the Book Shop application, which is built using **Node.js**, **Express**, and **MongoDB** with TypeScript for type safety.

---
###  Features

- **Book Listing**: View a wide range of books available for purchase.
- **User Authentication**: Secure user authentication and registration.
- **Book Management**: Add, update, and delete book entries.
- **Search and Filter**: Easily search for books by category, author, or title.
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices.
---
###  Technologies Used
#### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **TypeScript**

#### Development Tools
- **ESLint** for linting
- **Prettier** for code formatting
- **Ts-node-dev** for TypeScript development
---
#### Setup Process
- **npm init-y** for initiate npm package
- **npm i express cors dotenv** install the packages
- **npm install mongoose --save** to install the mongoose
- **npm install typescript --save-dev** to install typescript as a dependency
- **tsc -init** to open tsconfig.json file for typescript configure rootDir and outDir
- **npm i --save-dev @gype/express** for import express to remove error
- **npm i -D eslint@9.14.0 @eslint/js @types/eslint__js typescript typescript-eslint** for adding eslint
- **npx eslint --init**version of eslint: "^9.14.0" has been changed to eslint: "^9.15.0" by install the following two steps
- **npm remove eslint**
- **npm i -D eslint@9.14.0**
  
  ---
  #### to add the data in eslint.config.mjs
  ```
  {
    ignores: ["node_modules", "dist"],
    rules: {
      "no-unused-vars": "error",
    },
  },
  ```
  #### to add the command in script of package.json
  ```
  "scripts": {
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix"
  },
  ```
  #### adding prettier
  -  **npm i -D --exact prettier** for installing prettier and create **.prettierrc** and **.prettierignore** file
  -  **in** **.prettierrc** the below code added
  ```
    {
  "semi": true,
  "singleQuote": true
}
 ```
```
`  **in**  **.prettierignore**  dist is added
#### Finally

in  **package.json** the following data are added 
```
"scripts": {
    "format": "prettier . --write",
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix"
  },
```
