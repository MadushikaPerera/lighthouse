const mapper = require("./api-mapping");

module.exports = (app, passport) => {
	//todo: use passport middlware - for now this is auth free

	// map API endpoint avaiable at ./api-mapping.js see: ./api-mapping.js
	mapper.map(mappedRoute => {
		if (mappedRoute.methods.length < 1) {
			if (mappedRoute.method === "GET") {
				app.get(mappedRoute.public, (req, res) => {
					request(mappedRoute.internal, function(
						error,
						response,
						body
					) {
						console.log("error:", error); // Print the error if one occurred
						console.log(
							"statusCode:",
							response && response.statusCode
						); // Print the response status code if a response was received
						console.log("body:", body); // Print the HTML for the Google homepage.
					});
				});
			} else if (mappedRoute.method === "POST") {
				app.post(mappedRoute.public, (req, res) => {
					request.post({ url: mappedRoute.internal }, function(
						e,
						r,
						body
					) {
						console.log(body);
					});
				});
			} else if (mappedRoute.method === "PATCH") {
				app.patch(mappedRoute.public, (req, res) => {
					request.patch({ url: mappedRoute.internal }, function(
						e,
						r,
						body
					) {
						console.log(body);
					});
				});
			} else if (mappedRoute.method === "DELETE") {
				app.delete(mappedRoute.public, (req, res) => {
					request.delete(mappedRoute.internal, function(e, r, body) {
						if (err) throw e;
						console.log(r, body);
					});
				});
			}
		}
	});
};
