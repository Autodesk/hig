# Developing

## Running visual regression tests

- Make sure `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` are set in `/.env`.
- Install http-server packcage via `npm install http-server -g`
- In the root directory of the project run command `http-server` from command line
- In separate command line windo run the tests and generate a report: `$ npm run gemini-report`
- View the report: `$ open ./gemini-report/index.html`