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

Parameters can be passed into the shared UI a couple of different ways. One option is to set a global variable (`window.siteLocale = 'en';`) in the consuming application and read that variable from the shared UI.

For passing multiple parameters, here's another option:

#### Within the Shared UI `index.tsx`

```
import React from 'react';
import ReactDOM from 'react-dom';
import MySharedUi from './MySharedUi/MySharedUi';

declare global {
  interface Window {
    loadSharedUi: (data: Data, mount: HTMLElement | null) => void;
  }
}

export type Data = {
  userId: string;
};

window.loadSharedUi = (data: Data, mount: HTMLElement | null = document.getElementById('root')) => {
  ReactDOM.render(<MySharedUi data={data} />, mount);
};
```

### Within the Shared UI `MySharedUi.tsx`

```
import { Data } from '..';

type MySharedUiProps = {
  data: Data;
};

export const MySharedUi = (props: MySharedUiProps) => {
  const { userId } = props.data;

  // The props can be used in here, example:
  return (
    <p>{userId}</p>
  );
};

export default MySharedUi;
```

#### Within the Consuming Application

```
<script type="text/javascript" src="https://static-content.mindbodyonline.com/ui/my-shared-ui/0.1.1/app.js"></script>

<script>
  const data = {
    userId: '123';
  };

  const loadApp = () => {
    try {
      window.loadSharedUi(data);
    } catch (e) {
      setTimeout(() => loadApp(), 100);
    }
  }

  loadApp();
</script>
```
And place the `root` where the shared UI should load in the consuming application:
```
<div id="root"></div>
```
