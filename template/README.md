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
        "!src/**/index.ts",
        "!src/**/index.tsx",
        "!src/**/*.d.ts"
    ],
    "transformIgnorePatterns": [
        "./node_modules/(?!(@mbkit/*)/)"
    ],
    "moduleNameMapper": {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
}
```

## Implementation Notes

With a typical implementation, the consuming application can pull in your shared UI using two lines of code:

```
<script type="text/javascript" src="https://static-content.mindbodyonline.com/ui/my-shared-ui/0.1.1/app.js"></script>
```
Be sure to adjust the name and version to match your shared UI.

```
<div id="root"></div>
```
If you change `root` to another name in `index.tsx`, be sure to change it here as well.

### Passing Parameters

To pass parameters into the shared UI from the consuming application:

#### Within the Shared UI `index.tsx`

```
import React from 'react';
import ReactDOM from 'react-dom';
import MySharedUI from './MySharedUI/MySharedUI';

declare global {
  interface Window {
    loadSharedUI: any;
  }
}

export type Data = {
  userId: string;
};

// Parameters to pass
const data = {
  userId: '123',
};

window.loadSharedUI = (data: Data, mount = document.getElementById('root')) => {
  ReactDOM.render(<MySharedUI data={data} />, mount);
};
```

#### Within the Consuming Application

```
<script type="text/javascript" src="https://static-content.mindbodyonline.com/ui/my-shared-ui/0.1.1/app.js"></script>
<script>window.loadSharedUI(data)</script> // This must load after the first script
```