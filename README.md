# CRA MB Shared UI

## Getting Started

First create your react app using this template with create-react-app (CRA)

```
yarn create react-app app-name --template cra-mb-shared-ui
```

## Configuring conventional commits

Run `yarn add husky`. The `.huskyrc.json` is what triggers the conventional commits git hook to run.

## Workflow

You have two options of how you want to build your UI

- Using CRA default `yarn start` which will load your application as you would expect CRA to do. 
- Using storybook by adding a `*.stories.tsx` and viewing your application in storybook allowing for multiple instances and setups along with individual components.

### Testing

This project is setup to use @testing-library/react for behavioral driven tests giving you the most confidence when shipping your application. 

Setting up jest to transform SCSS and handle ES6 modules from our component library you will need to add this to your package.json

```
"jest": {
    "collectCoverageFrom": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "!src/**/*.stories.tsx",
        "!src/**/index.ts",
        "!src/**/index.tsx",
        "!src/**/*.d.ts"
    ],
    "transformIgnorePatterns": [
        "./node_modules/(?!(@mindbody/*)/)"
    ],
    "moduleNameMapper": {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
}
```

There are two commands included

1. `yarn test:watch` which watches tests as you change them
2. `yarn test:ci` which sets the continuous integration environment flag

You can pass `--coverage` to get the coverage output to either of these commands

### Styling

This ships with the ability to use SCSS and postcss modules that automatically inject cross browser prefixes keeping your source code concise. 

The convention needed is to name your file `*.module.scss`. Then you can import your styles as `import styles from '*.module.scss'` and consume them `<div className={styles.someClassName} />`
. This will tell react to hash the class names to avoid CSS naming collisions. 

### Versioning strategy

Every commit you make will use conventional commits. This allows us to run a command line utility that will go back through your commits, save them to a changelog and update your package.json automatically. 
