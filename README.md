# CRA MB Shared UI

## Getting Started

First create your react app using this template with create-react-app (CRA)

```
yarn create react-app app-name --template cra-mb-shared-ui
```

## Configuring conventional commits

Already included in the template is the packages needed for conventional commits. What you need to do to activate them is add the following to your `package.json`

Sets up commitizen to parse your commits

```
 "config": {
    "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
    }
}
```

Setting up jest to transform SCSS and handle ES6 modules in our component library

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

## Workflow

By default CRA is used for building single page applications (SPA's). This template was made for the use of consuming a package as a bundle in existing applications. This means the default `yarn start` will not be used for building shared UI's. 

### Viewing your work

Using storybook you can work locally with different views

### Testing

This project is setup to use @testing-library/react for behavioral driven tests giving you the most confidence when shipping your application. 

### Styling

This ships with the ability to use SCSS and postcss modules that automatically inject cross browser prefixes keeping your source code concise. 

### Versioning strategy

Every commit you make will use conventional commits. This allows us to run a command line utility that will go back through your commits, save them to a changelog and update your package.json automatically. 
