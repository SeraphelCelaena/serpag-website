import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import { useState } from "react";

export default function GetUsername({
	setUsername,
	socket
}) {
	const [draftUsername, setDraftUsername] = useState("");
	const [invalidUsername, setInvalidUsername] = useState(false);
	const [usernameHelperText, setUsernameHelperText] = useState("");

	const handleUsernameChange = (e) => {
		setDraftUsername(e.target.value);
		setInvalidUsername(false);
		setUsernameHelperText("");
	};

	const submitUsername = (e) => {
		e.preventDefault();
		const trimmedUsername = draftUsername.trim();

		if (trimmedUsername === "") {
			setInvalidUsername(true);
			setUsernameHelperText("Username cannot be empty");
			return;
		}

		localStorage.setItem("username", trimmedUsername);
		setUsername(trimmedUsername);

		socket.auth = { username: trimmedUsername };
		socket.connect();
	};

	return <Container>
			<h1>Welcome to the home page for SerpagChat</h1>
			<form onSubmit={submitUsername}>
				<FormControl>
					<TextField
						id="Username"
						label="Enter Username"
						variant="outlined"
						error={invalidUsername}
						helperText={usernameHelperText}
						onChange={handleUsernameChange}
						value={draftUsername}
					/>
					<Button
						variant="contained"
						type="submit"
					>
						Submit
					</Button>
				</FormControl>
			</form>
		</Container>
}
