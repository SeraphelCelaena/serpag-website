module.exports = {
	apps: [{
		name: "Frontend",
		script: "npm",
		args: "prod",
		cwd: "./",
		watch: true,
		env: {
			NODE_ENV: "development",
		}
	}]
}
