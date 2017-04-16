const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const auth = require("./src/auth");
const mapper = require("./src/mapper");
const passport = require("passport");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json({ type: "application/*+json" }));

// auth module with passport for username + password combo
auth(passport);
// register API endpoints using mapper
mapper(app, passport);

app.get("/", (req, res) => {
	console.log("Running !!!");
});

// listen on env PORT or defaults to 8080
app.listen(PORT, () => {
	console.log(`Lighthouse API gateway running at port: ${PORT}`);
});
