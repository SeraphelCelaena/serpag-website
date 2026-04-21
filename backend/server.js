import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";

const PORT = process.env.PORT || 8000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000", "serpag.ca", "http://api.serpag.ca", "https://serpag.ca", "https://api.serpag.ca"]
	},
	connectionStateRecovery: {}
});

io.use((socket, next) => {
	const username = socket.handshake.auth.username;
	if (!username) {
		return next(new Error("Invalid Username"));
	}

	socket.username = username;
	console.log(username);
	next();
})

io.on("connection", (socket) => {
	const users = [];
	for (let [id, socket] of io.of("/").sockets) {
		users.push({
			userID: id,
			username: socket.username
		});
	}
	socket.emit("users", users);

	socket.broadcast.emit("user connected", {
		userID: socket.id,
		username: socket.username
	})

	socket.on("private message", ({content, to}) => {
		io.to(to).emit("private message", {
			content,
			from: socket.id
		});
	});
});

server.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
