module.exports = {
	apps: [{
		name: "Backend",
		script: "npm",
		args: "dev",
		cwd: "./",
		watch: true,
		env: {
			NODE_ENV: "development",
		}
	}]
}
