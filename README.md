This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Express Generator](https://expressjs.com/en/starter/generator.html).

## App Template

In the project directory, you can run:

### `npm start`

Express back end with CRA front end to avoid CORS issues.

Runs both the server and the client.  The client runs on `:5000` and the client runs on `:3000`. 
The `proxy` setting in the client's `package.json` tells webpack to proxy the api requests to the node app.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The client will reload if you make edits.<br />
You must restart for changes to the back-end app to take effect.

### `npm run server`

Just the server application without the client.

