# CRA MB Shared UI

This template will get you started with all features in CRA as well as:

- TypeScript
- SCSS
- Storybook (if you want to use it)
- React Testing Library (see below for setting up test coverage)
- Conventional Commits (see below for some setup required)

## Getting Started

First create your react app using this template with create-react-app (CRA)

```
npx create-react-app your-app-name --template mb-ui
```

## Workflow

You have two options of how you want to build your UI

- Using CRA default `yarn start` which will load your application as you would expect CRA to do. 
- Using storybook by adding a `*.stories.tsx` and viewing your application in storybook allowing for multiple instances and setups along with individual components.

### Testing

1. `yarn test:watch` which watches tests as you change them
2. `yarn test:ci` which sets the continuous integration environment flag

You can pass `--coverage` to get the coverage output to either of these commands

This project is setup to use @testing-library/react for behavioral driven tests giving you the most confidence when shipping your application. 

Add this to your `package.json` to collect coverage from some files found in your `src` directory:

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
}
```


### Styling

This ships with the ability to use SCSS and postcss modules that automatically inject cross browser prefixes keeping your source code concise. 

The convention needed is to name your file `*.module.scss`. Then you can import your styles as `import styles from '*.module.scss'` and consume them `<div className={styles.someClassName} />`
. This will tell react to hash the class names to avoid CSS naming collisions. 

### Versioning strategy

**Using conventional commits**

Follow the (conventional commits)[https://www.conventionalcommits.org/en/v1.0.0/#summary] commit template for every commit you make. 

This will allow you to run the command `yarn version:bump` that will go back through your commits, save them to a changelog and update your package.json automatically. Do this before every PR merge when building a shared UI so the ADO pipeline will deploy a versioned bundle of your application. 

**Configuring conventional commits**

Run `yarn add husky`. The `.huskyrc.json` is what triggers the conventional commits git hook to run.
