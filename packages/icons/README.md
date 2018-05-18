# Icons

This package retains the source of the library of HIG icons. Consider using the `@hig/icon` package if you need to render an individual icon.

Read more about where and how to use icons on [the website](https://hig.autodesk.com/web/basics/icons).

# Developing

## Adding a New Icon

To add a new SVG icon to the library, add the `svg` file to the `src/icons` directory.

Then run the following command:

```bash
yarn build-icons
```

This will use SVGO to optimize the new icon, and update our release files. Remember to commit these changes.
