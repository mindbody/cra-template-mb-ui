# Create-React-App Template | Mindbody UI

This template will get you started with all [create-react-app](https://create-react-app.dev/docs/getting-started) features as well as:

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
- Use the docker files to determine which yarn scripts are run during gated/builds

### Deployment

**Single Page Application (SPA)**

Use the `yarn build` to produce a `build/{all application assets}` directory which contains the assets needed to publish. 

**Shared UI**

If you are building a shared UI you will need to follow the version strategy described below. Before each PR completion you need to update the version using the `yarn version:bump` script included in this template. For bundling use the `yarn build:ui` which does a check to see if the version exists on the CDN you are deploying to. 

Create a `.env` file for the build pipeline with the following:

```
PUBLIC_URL=https://your.cdn.com/path/to/assets/
```

This will produce a `build/1.2.3/{all application assets}` along with a `build/1.2.3/app.js` which you will reference in the consuming application. 

An example of consumption if your `.env` file looked like the example above and your package version contained `1.2.3`:

```html
<script src="https://your.cdn.com/path/to/assets/1.2.3/app.js"></script>
```

_For local development you may want a different `PUBLIC_URL`, if so you can create a `.env.local` with overrides needed. Please see the [offical documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used) for priority and other development features this file can do for you._

### Testing

1. `yarn test:watch` watches tests as you change them
2. `yarn test:ci` sets the continuous integration environment flag

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

Follow the [conventional commit template](https://www.conventionalcommits.org/en/v1.0.0/#summary) for each commit. 

This allows you to run `yarn version:bump` that saves your commits to a changelog and updates your package.json automatically. Do this before merging a pull request to deploy a versioned bundle of your shared UI application.

**Configuring conventional commits**

Run `yarn add husky`. The `.huskyrc.json` is what triggers the conventional commits git hook to run.
