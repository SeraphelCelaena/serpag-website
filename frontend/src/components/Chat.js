import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";

import {useState, useEffect, useRef} from 'react';

export default function Chat({
	socket,
	username,
	selectedUser
}) {
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const [invalidMessage, setInvalidMessage] = useState(false);
	const [messageHelperText, setMessageHelperText] = useState("");
	const messageListRef = useRef(null);

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
		setInvalidMessage(false);
		setMessageHelperText("");
	};

	const submitMessage = (e) => {
		e.preventDefault();
		if (message.trim() === "") {
			setInvalidMessage(true);
			setMessageHelperText("Message cannot be empty");
			return;
		}

		if (!selectedUser) {
			setInvalidMessage(true);
			setMessageHelperText("Select a user first");
			return;
		}

		socket.emit("private message", {
			content: message,
			to: selectedUser.userID
		});

		setMessageList((prevMessageList) => [
			...prevMessageList,
			{
				id: Date.now(),
				message: `<b>You:</b> ${message}`,
				isHtml: true,
				secondary: `${new Date().toLocaleTimeString()}`
			}
		]);

		setMessage("");
	};

	useEffect(() => {
		const onPrivateMessage = ({content, from}) => {
			if (from === selectedUser?.userID) {
				setMessageList((prevMessageList) => [
					...prevMessageList,
					{
						id: Date.now(),
						message: `<b>${selectedUser.username}:</b> ${content}`,
						isHtml: true,
						secondary: `${new Date().toLocaleTimeString()}`
					}
				]);
			}
		};

		socket.on("private message", onPrivateMessage);

		return () => {
			socket.off("private message", onPrivateMessage);
		};
	}, [socket, selectedUser]);

	useEffect(() => {
		if (messageListRef.current) {
			messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
		}
	}, [messageList]);

	useEffect(() => {
		setMessageList([]);
	}, [selectedUser]);

	return <>
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "98vh"
			}}
		>
			<h1>{selectedUser ? selectedUser.username : "No user selected"}</h1>
			<List
				ref={messageListRef}
				sx={{
					flex: 1,
					overflowY: "auto",
					padding: 0
				}}
			>
				{Array.isArray(messageList) && messageList.map((messageMap) => (
					<ListItem key={messageMap.id}>
						<ListItemText
							primary={messageMap.isHtml ? (
								<span dangerouslySetInnerHTML={{ __html: messageMap.message }} />
							) : (
								messageMap.message
							)}
							secondary={messageMap.secondary}
							sx={{
								whiteSpace: "pre-wrap",
								textAlign: messageMap.message.startsWith("<b>You") ? "right" : "left"
							}}
						/>
					</ListItem>
				))}
			</List>
			<Box
				component="form"
				onSubmit={submitMessage}
			>
				<FormControl
					sx={{
						width: "100%"
					}}
				>
					<TextField
						fullWidth
						disabled={!selectedUser}
						label="Send a message"
						id="messageInput"
						onChange={handleMessageChange}
						value={message}
					/>
				</FormControl>
			</Box>
		</Container>
	</>;
}
