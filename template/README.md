# Your Shared UI

## You're almost set to build

1. Run `yarn add husky` to get conventional commits to work. This needs to happen after the app is initialized because it does the initial commit for you.
2. Create a `.env` file for the build pipeline with the following:
```
PUBLIC_URL=https://static-content.mindbodyonline.com/ui/path/to/shared-ui/
```
3. Update the `azure-pipelines.build.yml` file and replace `{Your url path here}` with the url path (`path/to/shared-ui` part of the ".env" file) that the application will be deployed to

_More [details about environment files](https://github.com/mindbody/cra-template-mb-ui#deployment) can be found on the templates readme_

## Shared UI Implementation Notes

With a typical implementation, the consuming application can pull in your shared UI using two lines of code:

```
<script type="text/javascript" src="https://static-content.mindbodyonline.com/ui/my-shared-ui/0.1.1/app.js"></script>
```
Be sure to adjust the name and version to match your shared UI.

```
<div id="root"></div>
```
If you change `root` to another name in `index.tsx`, be sure to change it here as well.

### Getting Data

There are 3 ways to get data into the shared UI from the consuming application:

1. Use an API endpoint
2. Mount the app on script load and get data from a window variable (whether it be a single value, array, or object), e.g. `window.siteLocale = 'en';`
3. Mount the app from within consuming application and pass parameters

#### (3) Passing Parameters

1. Within the shared UI `index.tsx`
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
2. Within the shared UI `MySharedUi.tsx`
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
3. Within the consuming application, load the app and pass in the data
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
4. Within the consuming application, place the `root` where the shared UI should load
    ```
    <div id="root"></div>
    ```
