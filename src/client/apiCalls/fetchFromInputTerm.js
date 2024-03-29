/*
	Smart Mobiles
	Started on December 2022
	By Arnaud De Baerdemaeker
*/

import axios from "axios";

import {baseURL} from "../App";

const getResultsFromSearchQuery = async (query) => {
	const request = await axios({
		method: "GET",
		url: `${baseURL}/search`,
		headers: {
			"content-type": "application/json"
		},
		params: {
			query: query
		}
	});

	return request;
};

export {getResultsFromSearchQuery};
