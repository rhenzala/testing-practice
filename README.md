# testing-practice
JavaScript testing practice project using Jest

## Installation
1. Install the babel-jest
```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
2. Create `babel.config.js` in the root directory, then add this:
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Run the test
To run the test, use this command:
```
npx jest
```

