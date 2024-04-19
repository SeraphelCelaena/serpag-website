//.Env
require('dotenv').config();

// Imports
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

// Express app
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// Recursively import all routes
function loadRoutes(directory) {
	fs.readdirSync(directory).forEach(file => {
		const fullPath = `${directory}/${file}`;
		const stat = fs.lstatSync(fullPath);

		// If the file is a directory, recursively import its routes
		if (stat.isDirectory()) {
			loadRoutes(fullPath);
		} else if (file.endsWith('.js')) {
			// If the file is not a directory, import the route
			const relativePath = path.relative(__dirname, fullPath);
			const routePath = '/api/' + path.parse(relativePath).name;
			const route = require(fullPath);
			app.use(routePath, route);
		}
	});
}
// Auto import routes as they are made
loadRoutes(`${__dirname}/routes`);

// MongoDB connection
mongoose.connect(process.env.MONGO_SRV)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Connected to MongoDB\nServer is running on port ${process.env.PORT}`);
		});
	})
	.catch(err => console.error(err));
