module.exports = [
	{
		public: "/users",
		internal: "localhost:3000/api/v1/users",
		methods: ["GET", "POST"]
	},
	{
		public: "/dashboard/analytics",
		internal: "localhost:5000/api/v1/auth",
		methods: ["POST", "PATCH"]
	}
];
