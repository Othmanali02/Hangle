import axios from "axios";

export function getTodaysCountry(currDate) {
	return axios.get(`http://localhost:5000/api/countries/${currDate}`);
}
