import {BASE_URL} from "./base";

const getPages = async () => {
	return await fetch(`${BASE_URL}/skills`, {
		method: "GET"
	})
		.then((response) => {
			return response.json();
		}).then((data) => {
			return data;
		});
}

export {getPages};
