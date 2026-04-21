import Chat from "@/components/Chat";
import GetUsername from "@/components/GetUsername";
import UserList from "@/components/UserList";

import { useState, useEffect } from "react";
import socket from "@/middleware/socket";

export default function Home() {
	const [username, setUsername] = useState("");
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		const storedUsername = localStorage.getItem("username");
		if (storedUsername) {
			setUsername(storedUsername);
			socket.auth = { username: storedUsername };
			socket.connect();
		}
	}, []);

	useEffect(() => {
		const onConnectError = (err) => {
			if (err.message === "Invalid Username") {
				localStorage.removeItem("username");
				setUsername("");
			}
		};

		socket.on("connect_error", onConnectError);

		return () => {
			socket.off("connect_error", onConnectError);
		};
	}, []);

	return <>
		{!username ?
		<GetUsername
			setUsername={setUsername}
			socket={socket}
		/> :
		<>
			<Chat
				socket={socket}
				username={username}
				selectedUser={selectedUser}
			/>
			<UserList
				socket={socket}
				selectedUser={selectedUser}
				setSelectedUser={setSelectedUser}
			/>
		</>
		}
	</>
}
