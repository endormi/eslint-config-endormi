#  ESLint Config [![npm](https://img.shields.io/npm/v/eslint-config-endormi?color=blue)](https://www.npmjs.com/package/eslint-config-endormi) [![npm](https://img.shields.io/npm/dt/eslint-config-endormi)](https://www.npmjs.com/package/eslint-config-endormi) [![Travis (.org)](https://img.shields.io/travis/endormi/eslint-config-endormi)](https://travis-ci.org/endormi/eslint-config-endormi)

Inspired by Wes Bos' awesome [eslint-config](https://github.com/wesbos/eslint-config-wesbos). Updated to my own liking.

## Installation & Usage

Either install locally or globally.

### Locally

Create a `package.json` file (`npm init`).

Then install config by running:

```js
npx install-peerdeps --dev eslint-config-endormi
```

After the installation.

Create a `.eslintrc.js` file in the same directory as your `package.json` file and add this code:

```js
module.exports = {
  extends: "endormi"
};
```

Add these scripts to your `package.json` file

```js
"scripts": {
  "linter": "eslint .",
  "linter:fix": "eslint . --fix"
},
```

Now you can lint your code by running `npm run linter` and fix all fixable issues with `npm run linter:fix`.

### Globally

Install everything

```js
npx install-peerdeps --global eslint-config-endormi
```

Then make a global `.eslintrc` file:

ESLint will look for one in your home directory

`C:\Users\username\.eslintrc` for windows

`~/.eslintrc` for mac

Add this to your `.eslintrc` file:

```js
module.exports = {
  extends: "endormi"
};
```

To use from the `CLI`, you can now run `eslint .`

#### If it's not working

This way you can start fresh

Remove all:

```js
npm remove --global eslint-config-endormi babel-eslint eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-react prettier
```
To do the above for local, omit the `--global` flag.

If you are using a local install, remove your `package-lock.json` file and delete the `node_modules/` directory.

Then follow the instructions again.