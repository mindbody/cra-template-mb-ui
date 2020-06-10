# Your Shared UI

Tell us the purpose of the shared UI and how to consume it and any other notes

## You're almost set to go

You'll need to run `yarn add husky` to get conventional commits to work correctly

For jest you will need to add this to your package.json

```
"jest": {
    "collectCoverageFrom": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "!src/**/*.stories.tsx",
        "!src/**/*.d.ts"
    ],
    "moduleNameMapper": {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
}
```
