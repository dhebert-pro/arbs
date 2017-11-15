/*eslint-disable no-console */
const next = require("next");
const routes = require("./src/routes");
const app = next({dir: "src", dev: false});
const handler = routes.getRequestHandler(app);

const {createServer} = require("http");

const port = 8081;

app.prepare().then(() => {
    createServer(handler).listen(port);
    console.log("Server started on port " + port);
});
