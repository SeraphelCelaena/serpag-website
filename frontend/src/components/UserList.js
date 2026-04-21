import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import {useState, useEffect} from 'react';

export default function UserList({
	socket,
	selectedUser,
	setSelectedUser
}) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const onUsers = (nextUsers) => {
			const usersArray = Array.isArray(nextUsers) ? nextUsers : [];
			const sortedUsers = usersArray
				.map((user) => ({
					...user,
					self: user.userID === socket.id,
				}))
				.sort((a, b) => {
					if (a.self) return -1;
					if (b.self) return 1;
					return (a.username || "").localeCompare(b.username || "");
				});

			setUsers(sortedUsers);
		};

		socket.on("users", onUsers);

		const onUserConnected = (user) => {
			setUsers((prevUsers) => {
				const prevUsersArray = Array.isArray(prevUsers) ? prevUsers : [];
				if (!user?.userID) {
					return prevUsersArray;
				}

				const withoutDuplicate = prevUsersArray.filter((existingUser) => existingUser.userID !== user.userID);
				const nextUsers = [
					...withoutDuplicate,
					{
						...user,
						self: user.userID === socket.id,
					},
				];

				return nextUsers.sort((a, b) => {
					if (a.self) return -1;
					if (b.self) return 1;
					return (a.username || "").localeCompare(b.username || "");
				});
			});
		};

		socket.on("user connected", onUserConnected);

		return () => {
			socket.off("users", onUsers);
			socket.off("user connected", onUserConnected);
		};
	}, [socket]);



	return <Drawer
		sx={{
			width: 240,
			flexShrink: 0,
			"& .MuiDrawer-paper": {
				width: 240,
				boxSizing: "border-box",
			},
		}}
		variant="permanent"
		anchor="left"
	>
		<List>
			{users.map((user) => (
				<ListItem
					key={user.userID}
					disablePadding
				>
					<ListItemButton
						selected={selectedUser?.userID === user.userID}
						onClick={() => setSelectedUser(user)}
						disabled={user.self}
					>
						<ListItemText
							primary={user.username}
						/>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</Drawer>
}
