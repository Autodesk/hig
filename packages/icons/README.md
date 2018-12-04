# Icons

This package retains the source of the library of HIG icons.
You can import individual icons to render on your app.
```jsx
import { Assets24 } from "@hig/icons";

const MyComponent = () => (
    <div className="my-class">
        <Assets24 />
    </div>
);

export default MyComponent
```

Read more about where and how to use icons on [the website](https://hig.autodesk.com/web/basics/icons).

# Developing

## Adding a New Icon

To add a new SVG icon to the library, add the `svg` file to the `src/icons` directory.

Then run the following command:

```bash
yarn build-icons
```

This will use SVGO to optimize the new icon, and update our release files. Remember to commit these changes.
