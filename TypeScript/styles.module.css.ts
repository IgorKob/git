// main.module.css
// https://www.npmjs.com/package/typescript-plugin-css-modules
// https://spin.atomicobject.com/2020/06/22/css-module-typescript/
npm install typescript-plugin-css-modules --save-dev
yarn add -D typescript-plugin-css-modules

// .src/styles.d.ts
// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For LESS
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
