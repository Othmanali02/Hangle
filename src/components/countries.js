const countries = [
	{
		name: "Palestine",
		ContinentName: "Asia",
		date: "2023-03-19",
	},
	{
		name: "France",
		ContinentName: "Europe",
		date: "2023-03-20",
	},
	{
		name: "Italy",
		ContinentName: "Europe",
		date: "2023-03-21",
	},
	{
		name: "Netherlands",
		ContinentName: "Europe",
		date: "2023-03-22",
	},
	{
		name: "Morocco",
		ContinentName: "Africa",
		date: "2023-03-23",
	},
	{
		name: "Mongolia",
		ContinentName: "Asia",
		date: "2023-03-24",
	},
	{
		name: "India",
		ContinentName: "Asia",
		date: "2023-03-25",
	},
	{
		name: "Singapore",
		ContinentName: "Asia",
		date: "2023-03-26",
	},
	{
		name: "Egypt",
		ContinentName: "Africa",
		date: "2023-03-27",
	},
	{
		name: "Gabon",
		ContinentName: "Africa",
		date: "2023-03-28",
	},
	{
		name: "Equatorial Guinea",
		ContinentName: "Africa",
		date: "2023-03-29",
	},
	{
		name: "Brunei",
		ContinentName: "Asia",
		date: "2023-03-30",
	},
	{
		name: "Papua New Guinea",
		ContinentName: "Oceania",
		date: "2023-03-31",
	},
	{
		name: "Ethiopia",
		ContinentName: "Africa",
		date: "2023-04-01",
	},
	{
		name: "Serbia",
		ContinentName: "Europe",
		date: "2023-04-02",
	},
	{
		name: "Seychelles",
		ContinentName: "Africa",
		date: "2023-04-03",
	},
	{
		name: "Solomon Islands",
		ContinentName: "Oceania",
		date: "2023-04-04",
	},
	{
		name: "Fiji",
		ContinentName: "Oceania",
		date: "2023-04-05",
	},
	{
		name: "China",
		ContinentName: "Asia",
		date: "2023-04-06",
	},
	{
		name: "Portugal",
		ContinentName: "Europe",
		date: "2023-04-07",
	},
	{
		name: "Lithuania",
		ContinentName: "Europe",
		date: "2023-04-08",
	},
	{
		name: "Bangladesh",
		ContinentName: "Asia",
		date: "2023-04-09",
	},
	{
		name: "Philippines",
		ContinentName: "Asia",
		date: "2023-04-10",
	},
	{
		name: "United States of America",
		ContinentName: "US",
		date: "2023-04-11",
	},
	{
		name: "Andorra",
		ContinentName: "Europe",
		date: "2023-04-12",
	},
	{
		name: "Laos",
		ContinentName: "Asia",
		date: "2023-04-13",
	},
	{
		name: "Federated States of Micronesia",
		ContinentName: "Oceania",
		date: "2023-04-14",
	},
	{
		name: "Costa Rica",
		ContinentName: "Central America",
		date: "2023-04-15",
	},
	{
		name: "Myanmar",
		ContinentName: "Asia",
		date: "2023-04-16",
	},
	{
		name: "Senegal",
		ContinentName: "Africa",
		date: "2023-04-17",
	},
	{
		name: "Maldives",
		ContinentName: "Asia",
		date: "2023-04-18",
	},
	{
		name: "Colombia",
		ContinentName: "South America",
		date: "2023-04-19",
	},
	{
		name: "Trinidad and Tobago",
		ContinentName: "North America",
		date: "2023-04-20",
	},
	{
		name: "Cuba",
		ContinentName: "North America",
		date: "2023-04-21",
	},
	{
		name: "Zambia",
		ContinentName: "Africa",
		date: "2023-04-22",
	},
	{
		name: "Armenia",
		ContinentName: "Europe",
		date: "2023-04-23",
	},
	{
		name: "Dominica",
		ContinentName: "North America",
		date: "2023-04-24",
	},
	{
		name: "Afghanistan",
		ContinentName: "Asia",
		date: "2023-04-25",
	},
	{
		name: "North Korea",
		ContinentName: "Asia",
		date: "2023-04-26",
	},
	{
		name: "Jamaica",
		ContinentName: "North America",
		date: "2023-04-27",
	},
	{
		name: "Haiti",
		ContinentName: "North America",
		date: "2023-04-28",
	},
	{
		name: "Austria",
		ContinentName: "Europe",
		date: "2023-04-29",
	},
	{
		name: "Georgia",
		ContinentName: "Europe",
		date: "2023-04-30",
	},
	{
		name: "Nicaragua",
		ContinentName: "Central America",
		date: "2023-05-01",
	},
	{
		name: "Somalia",
		ContinentName: "Africa",
		date: "2023-05-02",
	},
	{
		name: "Hungary",
		ContinentName: "Europe",
		date: "2023-05-03",
	},
	{
		name: "Finland",
		ContinentName: "Europe",
		date: "2023-05-04",
	},
	{
		name: "New Zealand",
		ContinentName: "Oceania",
		date: "2023-05-05",
	},
	{
		name: "Guatemala",
		ContinentName: "Central America",
		date: "2023-05-06",
	},
	{
		name: "The Gambia",
		ContinentName: "Africa",
		date: "2023-05-07",
	},
	{
		name: "Bolivia",
		ContinentName: "South America",
		date: "2023-05-08",
	},
	{
		name: "El Salvador",
		ContinentName: "Central America",
		date: "2023-05-09",
	},
	{
		name: "Sierra Leone",
		ContinentName: "Africa",
		date: "2023-05-10",
	},
	{
		name: "Albania",
		ContinentName: "Europe",
		date: "2023-05-11",
	},
	{
		name: "Nauru",
		ContinentName: "Oceania",
		date: "2023-05-12",
	},
	{
		name: "Libya",
		ContinentName: "Africa",
		date: "2023-05-13",
	},
	{
		name: "Nepal",
		ContinentName: "Asia",
		date: "2023-05-14",
	},
	{
		name: "Tuvalu",
		ContinentName: "Oceania",
		date: "2023-05-15",
	},
	{
		name: "Nigeria",
		ContinentName: "Africa",
		date: "2023-05-16",
	},
	{
		name: "Liechtenstein",
		ContinentName: "Europe",
		date: "2023-05-17",
	},
	{
		name: "American Samoa",
		ContinentName: "Oceania",
		date: "2023-05-18",
	},
	{
		name: "Palau",
		ContinentName: "Oceania",
		date: "2023-05-19",
	},
	{
		name: "Panama",
		ContinentName: "Central America",
		date: "2023-05-20",
	},
	{
		name: "Qatar",
		ContinentName: "Asia",
		date: "2023-05-21",
	},
	{
		name: "Central African Republic",
		ContinentName: "Africa",
		date: "2023-05-22",
	},
	{
		name: "Indonesia",
		ContinentName: "Asia",
		date: "2023-05-23",
	},
	{
		name: "Ivory Coast",
		ContinentName: "Africa",
		date: "2023-05-24",
	},
	{
		name: "Iraq",
		ContinentName: "Asia",
		date: "2023-05-25",
	},
	{
		name: "Malta",
		ContinentName: "Europe",
		date: "2023-05-26",
	},
	{
		name: "Djibouti",
		ContinentName: "Africa",
		date: "2023-05-27",
	},
	{
		name: "Angola",
		ContinentName: "Africa",
		date: "2023-05-28",
	},
	{
		name: "Spain",
		ContinentName: "Europe",
		date: "2023-05-29",
	},
	{
		name: "Saudi Arabia",
		ContinentName: "Asia",
		date: "2023-05-30",
	},
	{
		name: "Botswana",
		ContinentName: "Africa",
		date: "2023-05-31",
	},
	{
		name: "Barbados",
		ContinentName: "North America",
		date: "2023-06-01",
	},
	{
		name: "Suriname",
		ContinentName: "South America",
		date: "2023-06-02",
	},
	{
		name: "Sri Lanka",
		ContinentName: "Asia",
		date: "2023-06-03",
	},
	{
		name: "Luxembourg",
		ContinentName: "Europe",
		date: "2023-06-04",
	},
	{
		name: "Cayman Islands",
		ContinentName: "North America",
		date: "2023-06-05",
	},
	{
		name: "Democratic Republic of the Congo",
		ContinentName: "Africa",
		date: "2023-06-06",
	},
	{
		name: "Samoa",
		ContinentName: "Oceania",
		date: "2023-06-07",
	},
	{
		name: "Saint Kitts and Nevis",
		ContinentName: "North America",
		date: "2023-06-08",
	},
	{
		name: "Ghana",
		ContinentName: "Africa",
		date: "2023-06-09",
	},
	{
		name: "Slovenia",
		ContinentName: "Europe",
		date: "2023-06-10",
	},
	{
		name: "South Korea",
		ContinentName: "Asia",
		date: "2023-06-11",
	},
	{
		name: "Kosovo",
		ContinentName: "Europe",
		date: "2023-06-12",
	},
	{
		name: "Ecuador",
		ContinentName: "South America",
		date: "2023-06-13",
	},
	{
		name: "Kiribati",
		ContinentName: "Oceania",
		date: "2023-06-14",
	},
	{
		name: "Iran",
		ContinentName: "Asia",
		date: "2023-06-15",
	},
	{
		name: "Slovakia",
		ContinentName: "Europe",
		date: "2023-06-16",
	},
	{
		name: "Sao Tome and Principe",
		ContinentName: "Africa",
		date: "2023-06-17",
	},
	{
		name: "Canada",
		ContinentName: "North America",
		date: "2023-06-18",
	},
	{
		name: "United Arab Emirates",
		ContinentName: "Asia",
		date: "2023-06-19",
	},
	{
		name: "Tunisia",
		ContinentName: "Africa",
		date: "2023-06-20",
	},
	{
		name: "Marshall Islands",
		ContinentName: "Oceania",
		date: "2023-06-21",
	},
	{
		name: "Lebanon",
		ContinentName: "Asia",
		date: "2023-06-22",
	},
	{
		name: "Kuwait",
		ContinentName: "Asia",
		date: "2023-06-23",
	},
	{
		name: "East Timor",
		ContinentName: "Asia",
		date: "2023-06-24",
	},
	{
		name: "Cape Verde",
		ContinentName: "Africa",
		date: "2023-06-25",
	},
	{
		name: "Grenada",
		ContinentName: "North America",
		date: "2023-06-26",
	},
	{
		name: "Guinea",
		ContinentName: "Africa",
		date: "2023-06-27",
	},
	{
		name: "United Kingdom",
		ContinentName: "Europe",
		date: "2023-06-28",
	},
	{
		name: "Brazil",
		ContinentName: "South America",
		date: "2023-06-29",
	},
	{
		name: "France",
		ContinentName: "Europe",
		date: "2023-06-30",
	},
	{
		name: "Mexico",
		ContinentName: "Central America",
		date: "2023-07-01",
	},
	{
		name: "Peru",
		ContinentName: "South America",
		date: "2023-07-02",
	},
	{
		name: "Pakistan",
		ContinentName: "Asia",
		date: "2023-07-03",
	},
	{
		name: "Republic of the Congo",
		ContinentName: "Africa",
		date: "2023-07-04",
	},
	{
		name: "Tanzania",
		ContinentName: "Africa",
		date: "2023-07-05",
	},
	{
		name: "Cyprus",
		ContinentName: "Europe",
		date: "2023-07-06",
	},
	{
		name: "Switzerland",
		ContinentName: "Europe",
		date: "2023-07-07",
	},
	{
		name: "Jordan",
		ContinentName: "Asia",
		date: "2023-07-08",
	},
	{
		name: "Vatican City",
		ContinentName: "Europe",
		date: "2023-07-09",
	},
	{
		name: "Kazakhstan",
		ContinentName: "Asia",
		date: "2023-07-10",
	},
	{
		name: "Argentina",
		ContinentName: "South America",
		date: "2023-07-11",
	},
	{
		name: "Uganda",
		ContinentName: "Africa",
		date: "2023-07-12",
	},
	{
		name: "Latvia",
		ContinentName: "Europe",
		date: "2023-07-13",
	},
	{
		name: "Saint Lucia",
		ContinentName: "North America",
		date: "2023-07-14",
	},
	{
		name: "Bahrain",
		ContinentName: "Asia",
		date: "2023-07-15",
	},
	{
		name: "Mozambique",
		ContinentName: "Africa",
		date: "2023-07-16",
	},
	{
		name: "Burkina Faso",
		ContinentName: "Africa",
		date: "2023-07-17",
	},
	{
		name: "Puerto Rico",
		ContinentName: "North America",
		date: "2023-07-18",
	},
	{
		name: "Monaco",
		ContinentName: "Europe",
		date: "2023-07-19",
	},
	{
		name: "Comoros",
		ContinentName: "Africa",
		date: "2023-07-20",
	},
	{
		name: "Moldova",
		ContinentName: "Europe",
		date: "2023-07-21",
	},
	{
		name: "Iceland",
		ContinentName: "Europe",
		date: "2023-07-22",
	},
	{
		name: "Croatia",
		ContinentName: "Europe",
		date: "2023-07-23",
	},
	{
		name: "New Caledonia",
		ContinentName: "Oceania",
		date: "2023-07-24",
	},
	{
		name: "Germany",
		ContinentName: "Europe",
		date: "2023-07-25",
	},
	{
		name: "Rwanda",
		ContinentName: "Africa",
		date: "2023-07-26",
	},
	{
		name: "South Africa",
		ContinentName: "Africa",
		date: "2023-07-27",
	},
	{
		name: "Montenegro",
		ContinentName: "Europe",
		date: "2023-07-28",
	},
	{
		name: "Namibia",
		ContinentName: "Africa",
		date: "2023-07-29",
	},
	{
		name: "Uruguay",
		ContinentName: "South America",
		date: "2023-07-30",
	},
	{
		name: "Kenya",
		ContinentName: "Africa",
		date: "2023-07-31",
	},
	{
		name: "Chad",
		ContinentName: "Africa",
		date: "2023-08-01",
	},
	{
		name: "Chile",
		ContinentName: "South America",
		date: "2023-08-02",
	},
	{
		name: "Malaysia",
		ContinentName: "Asia",
		date: "2023-08-03",
	},
	{
		name: "Paraguay",
		ContinentName: "South America",
		date: "2023-08-04",
	},
	{
		name: "Turkmenistan",
		ContinentName: "Asia",
		date: "2023-08-05",
	},
	{
		name: "Australia",
		ContinentName: "Oceania",
		date: "2023-08-06",
	},
	{
		name: "Taiwan",
		ContinentName: "Asia",
		date: "2023-08-07",
	},
	{
		name: "Azerbaijan",
		ContinentName: "Europe",
		date: "2023-08-08",
	},
	{
		name: "Denmark",
		ContinentName: "Europe",
		date: "2023-08-09",
	},
	{
		name: "British Virgin Islands",
		ContinentName: "North America",
		date: "2023-08-10",
	},
	{
		name: "Ukraine",
		ContinentName: "Europe",
		date: "2023-08-11",
	},
	{
		name: "Ireland",
		ContinentName: "Europe",
		date: "2023-08-12",
	},
	{
		name: "Estonia",
		ContinentName: "Europe",
		date: "2023-08-13",
	},
	{
		name: "Antigua and Barbuda",
		ContinentName: "North America",
		date: "2023-08-14",
	},
	{
		name: "Turkey",
		ContinentName: "Europe",
		date: "2023-08-15",
	},
	{
		name: "Greece",
		ContinentName: "Europe",
		date: "2023-08-16",
	},
	{
		name: "South Sudan",
		ContinentName: "Africa",
		date: "2023-08-17",
	},
	{
		name: "Vietnam",
		ContinentName: "Asia",
		date: "2023-08-18",
	},
	{
		name: "Venezuela",
		ContinentName: "South America",
		date: "2023-08-19",
	},
	{
		name: "Czech Republic",
		ContinentName: "Europe",
		date: "2023-08-20",
	},
	{
		name: "Canada",
		ContinentName: "Central America",
		date: "2023-08-21",
	},
	{
		name: "Lesotho",
		ContinentName: "Africa",
		date: "2023-08-22",
	},
	{
		name: "Mauritania",
		ContinentName: "Africa",
		date: "2023-08-23",
	},
	{
		name: "Guyana",
		ContinentName: "South America",
		date: "2023-08-24",
	},
	{
		name: "Isle of Man",
		ContinentName: "Europe",
		date: "2023-08-25",
	},
	{
		name: "Honduras",
		ContinentName: "Central America",
		date: "2023-08-26",
	},
	{
		name: "French Polynesia",
		ContinentName: "Oceania",
		date: "2023-08-27",
	},
	{
		name: "Vanuatu",
		ContinentName: "Oceania",
		date: "2023-08-28",
	},
	{
		name: "Syria",
		ContinentName: "Asia",
		date: "2023-08-29",
	},
	{
		name: "Japan",
		ContinentName: "Asia",
		date: "2023-08-30",
	},
	{
		name: "Liberia",
		ContinentName: "Africa",
		date: "2023-08-31",
	},
	{
		name: "Poland",
		ContinentName: "Europe",
		date: "2023-09-01",
	},
	{
		name: "Tonga",
		ContinentName: "Oceania",
		date: "2023-09-02",
	},
	{
		name: "Mali",
		ContinentName: "Africa",
		date: "2023-09-03",
	},
	{
		name: "Algeria",
		ContinentName: "Africa",
		date: "2023-09-04",
	},
	{
		name: "Macedonia",
		ContinentName: "Europe",
		date: "2023-09-05",
	},
	{
		name: "Oman",
		ContinentName: "Asia",
		date: "2023-09-06",
	},
	{
		name: "Uzbekistan",
		ContinentName: "Asia",
		date: "2023-09-07",
	},
	{
		name: "Niger",
		ContinentName: "Africa",
		date: "2023-09-08",
	},
	{
		name: "Burundi",
		ContinentName: "Africa",
		date: "2023-09-09",
	},
	{
		name: "Guinea-Bissau",
		ContinentName: "Africa",
		date: "2023-09-10",
	},
	{
		name: "Belgium",
		ContinentName: "Europe",
		date: "2023-09-11",
	},
	{
		name: "Saint Vincent and the Grenadines",
		ContinentName: "Central America",
		date: "2023-09-12",
	},
	{
		name: "Zimbabwe",
		ContinentName: "Africa",
		date: "2023-09-13",
	},
	{
		name: "Cameroon",
		ContinentName: "Africa",
		date: "2023-09-14",
	},
	{
		name: "Dominican Republic",
		ContinentName: "North America",
		date: "2023-09-15",
	},
	{
		name: "Sudan",
		ContinentName: "Africa",
		date: "2023-09-16",
	},
	{
		name: "Benin",
		ContinentName: "Africa",
		date: "2023-09-17",
	},
	{
		name: "San Marino",
		ContinentName: "Europe",
		date: "2023-09-18",
	},
	{
		name: "Kyrgyzstan",
		ContinentName: "Asia",
		date: "2023-09-19",
	},
	{
		name: "Mauritius",
		ContinentName: "Africa",
		date: "2023-09-20",
	},
	{
		name: "Bulgaria",
		ContinentName: "Europe",
		date: "2023-09-21",
	},
	{
		name: "Malawi",
		ContinentName: "Africa",
		date: "2023-09-22",
	},
	{
		name: "Bosnia and Herzegovina",
		ContinentName: "Europe",
		date: "2023-09-23",
	},
	{
		name: "Madagascar",
		ContinentName: "Africa",
		date: "2023-09-24",
	},
	{
		name: "Norway",
		ContinentName: "Europe",
		date: "2023-09-25",
	},
	{
		name: "Belarus",
		ContinentName: "Europe",
		date: "2023-09-26",
	},
	{
		name: "Tajikistan",
		ContinentName: "Asia",
		date: "2023-09-27",
	},
	{
		name: "Bhutan",
		ContinentName: "Asia",
		date: "2023-09-28",
	},
	{
		name: "Sweden",
		ContinentName: "Europe",
		date: "2023-09-29",
	},
	{
		name: "Romania",
		ContinentName: "Europe",
		date: "2023-09-30",
	},
	{
		name: "Eritrea",
		ContinentName: "Africa",
		date: "2023-10-01",
	},
	{
		name: "Togo",
		ContinentName: "Africa",
		date: "2023-10-02",
	},
	{
		name: "Yemen",
		ContinentName: "Asia",
		date: "2023-10-03",
	},
	{
		name: "Bahamas",
		ContinentName: "North America",
		date: "2023-10-04",
	},
	{
		name: "Russia",
		ContinentName: "Europe",
		date: "2023-10-05",
	},
	{
		name: "Hong Kong",
		ContinentName: "Asia",
		date: "2023-10-06",
	},
	{
		name: "Thailand",
		ContinentName: "Asia",
		date: "2023-10-07",
	},

	{
		name: "Romania",
		ContinentName: "Europe",
		date: "2023-10-08",
	},
	{
		name: "Eritrea",
		ContinentName: "Africa",
		date: "2023-10-09",
	},
	{
		name: "Slovakia",
		ContinentName: "Europe",
		date: "2023-10-10",
	},
	{
		name: "Bahrain",
		ContinentName: "Asia",
		date: "2023-10-11",
	},
	{
		name: "Bangladesh",
		ContinentName: "Asia",
		date: "2023-10-12",
	},
	{
		name: "Peru",
		ContinentName: "South America",
		date: "2023-10-13",
	},
	{
		name: "Mauritania",
		ContinentName: "Africa",
		date: "2023-10-14",
	},
	{
		name: "Samoa",
		ContinentName: "Oceania",
		date: "2023-10-15",
	},
	{
		name: "Malta",
		ContinentName: "Europe",
		date: "2023-10-16",
	},
	{
		name: "Bhutan",
		ContinentName: "Asia",
		date: "2023-10-17",
	},
	{
		name: "Isle of Man",
		ContinentName: "Europe",
		date: "2023-10-18",
	},
	{
		name: "Montenegro",
		ContinentName: "Europe",
		date: "2023-10-19",
	},
	{
		name: "Belgium",
		ContinentName: "Europe",
		date: "2023-10-20",
	},
	{
		name: "Hong Kong",
		ContinentName: "Asia",
		date: "2023-10-21",
	},
	{
		name: "Azerbaijan",
		ContinentName: "Europe",
		date: "2023-10-22",
	},
	{
		name: "Latvia",
		ContinentName: "Europe",
		date: "2023-10-23",
	},
	{
		name: "Algeria",
		ContinentName: "Africa",
		date: "2023-10-24",
	},
	{
		name: "Comoros",
		ContinentName: "Africa",
		date: "2023-10-25",
	},
	{
		name: "Uganda",
		ContinentName: "Africa",
		date: "2023-10-26",
	},
	{
		name: "Norway",
		ContinentName: "Europe",
		date: "2023-10-27",
	},
	{
		name: "Guyana",
		ContinentName: "South America",
		date: "2023-10-28",
	},
	{
		name: "Yemen",
		ContinentName: "Asia",
		date: "2023-10-29",
	},
	{
		name: "Chile",
		ContinentName: "South America",
		date: "2023-10-30",
	},
	{
		name: "Armenia",
		ContinentName: "Europe",
		date: "2023-10-31",
	},
	{
		name: "Syria",
		ContinentName: "Asia",
		date: "2023-11-01",
	},
	{
		name: "Madagascar",
		ContinentName: "Africa",
		date: "2023-11-02",
	},
	{
		name: "American Samoa",
		ContinentName: "Oceania",
		date: "2023-11-03",
	},
	{
		name: "Ghana",
		ContinentName: "Africa",
		date: "2023-11-04",
	},
	{
		name: "Egypt",
		ContinentName: "Africa",
		date: "2023-11-05",
	},
	{
		name: "Cambodia",
		ContinentName: "Asia",
		date: "2023-11-06",
	},
	{
		name: "Slovenia",
		ContinentName: "Europe",
		date: "2023-11-07",
	},
	{
		name: "Cyprus",
		ContinentName: "Europe",
		date: "2023-11-08",
	},
	{
		name: "Greece",
		ContinentName: "Europe",
		date: "2023-11-09",
	},
	{
		name: "Myanmar",
		ContinentName: "Asia",
		date: "2023-11-10",
	},
	{
		name: "Panama",
		ContinentName: "Central America",
		date: "2023-11-11",
	},
	{
		name: "Sierra Leone",
		ContinentName: "Africa",
		date: "2023-11-12",
	},
	{
		name: "San Marino",
		ContinentName: "Europe",
		date: "2023-11-13",
	},
	{
		name: "Haiti",
		ContinentName: "North America",
		date: "2023-11-14",
	},
	{
		name: "Serbia",
		ContinentName: "Europe",
		date: "2023-11-15",
	},
	{
		name: "Malawi",
		ContinentName: "Africa",
		date: "2023-11-16",
	},
	{
		name: "Chad",
		ContinentName: "Africa",
		date: "2023-11-17",
	},
	{
		name: "Tonga",
		ContinentName: "Oceania",
		date: "2023-11-18",
	},
	{
		name: "Honduras",
		ContinentName: "Central America",
		date: "2023-11-19",
	},
	{
		name: "Vanuatu",
		ContinentName: "Oceania",
		date: "2023-11-20",
	},
	{
		name: "New Caledonia",
		ContinentName: "Oceania",
		date: "2023-11-21",
	},
	{
		name: "Solomon Islands",
		ContinentName: "Oceania",
		date: "2023-11-22",
	},
	{
		name: "Sao Tome and Principe",
		ContinentName: "Africa",
		date: "2023-11-23",
	},
	{
		name: "Somaliland",
		ContinentName: "Africa",
		date: "2023-11-24",
	},
	{
		name: "Bulgaria",
		ContinentName: "Europe",
		date: "2023-11-25",
	},
	{
		name: "South Korea",
		ContinentName: "Asia",
		date: "2023-11-26",
	},
	{
		name: "Guatemala",
		ContinentName: "Central America",
		date: "2023-11-27",
	},
	{
		name: "Luxembourg",
		ContinentName: "Europe",
		date: "2023-11-28",
	},
	{
		name: "United States of America",
		ContinentName: "US",
		date: "2023-11-29",
	},
	{
		name: "Malaysia",
		ContinentName: "Asia",
		date: "2023-11-30",
	},
	{
		name: "Argentina",
		ContinentName: "South America",
		date: "2023-12-01",
	},
	{
		name: "Papua New Guinea",
		ContinentName: "Oceania",
		date: "2023-12-02",
	},
	{
		name: "Guinea-Bissau",
		ContinentName: "Africa",
		date: "2023-12-03",
	},
	{
		name: "North Korea",
		ContinentName: "Asia",
		date: "2023-12-04",
	},
	{
		name: "Palestine",
		ContinentName: "Asia",
		date: "2023-12-05",
	},
	{
		name: "Mozambique",
		ContinentName: "Africa",
		date: "2023-12-06",
	},
	{
		name: "France",
		ContinentName: "Europe",
		date: "2023-12-07",
	},
	{
		name: "Turkey",
		ContinentName: "Europe",
		date: "2023-12-08",
	},
	{
		name: "British Virgin Islands",
		ContinentName: "North America",
		date: "2023-12-09",
	},
	{
		name: "Morocco",
		ContinentName: "Africa",
		date: "2023-12-10",
	},
	{
		name: "Saint Lucia",
		ContinentName: "North America",
		date: "2023-12-11",
	},
	{
		name: "Belarus",
		ContinentName: "Europe",
		date: "2023-12-12",
	},
	{
		name: "Fiji",
		ContinentName: "Oceania",
		date: "2023-12-13",
	},
	{
		name: "Lesotho",
		ContinentName: "Africa",
		date: "2023-12-14",
	},
	{
		name: "Jordan",
		ContinentName: "Asia",
		date: "2023-12-15",
	},
	{
		name: "Bolivia",
		ContinentName: "South America",
		date: "2023-12-16",
	},
	{
		name: "Australia",
		ContinentName: "Oceania",
		date: "2023-12-17",
	},
	{
		name: "Ireland",
		ContinentName: "Europe",
		date: "2023-12-18",
	},
	{
		name: "India",
		ContinentName: "Asia",
		date: "2023-12-19",
	},
	{
		name: "Kuwait",
		ContinentName: "Asia",
		date: "2023-12-20",
	},
	{
		name: "Tanzania",
		ContinentName: "Africa",
		date: "2023-12-21",
	},
	{
		name: "Cape Verde",
		ContinentName: "Africa",
		date: "2023-12-22",
	},
	{
		name: "Macedonia",
		ContinentName: "Europe",
		date: "2023-12-23",
	},
	{
		name: "Zambia",
		ContinentName: "Africa",
		date: "2023-12-24",
	},
	{
		name: "Poland",
		ContinentName: "Europe",
		date: "2023-12-25",
	},
	{
		name: "Lithuania",
		ContinentName: "Europe",
		date: "2023-12-26",
	},
	{
		name: "Vatican City",
		ContinentName: "Europe",
		date: "2023-12-27",
	},
	{
		name: "Afghanistan",
		ContinentName: "Asia",
		date: "2023-12-28",
	},
	{
		name: "Paraguay",
		ContinentName: "South America",
		date: "2023-12-29",
	},
	{
		name: "Russia",
		ContinentName: "Europe",
		date: "2023-12-30",
	},
	{
		name: "Angola",
		ContinentName: "Africa",
		date: "2023-12-31",
	},
	{
		name: "Canada",
		ContinentName: "Central America",
		date: "2024-01-01",
	},
	{
		name: "Monaco",
		ContinentName: "Europe",
		date: "2024-01-02",
	},
	{
		name: "Mauritius",
		ContinentName: "Africa",
		date: "2024-01-03",
	},
	{
		name: "Marshall Islands",
		ContinentName: "Oceania",
		date: "2024-01-04",
	},
	{
		name: "Oman",
		ContinentName: "Asia",
		date: "2024-01-05",
	},
	{
		name: "Ivory Coast",
		ContinentName: "Africa",
		date: "2024-01-06",
	},
	{
		name: "Liberia",
		ContinentName: "Africa",
		date: "2024-01-07",
	},
	{
		name: "Albania",
		ContinentName: "Europe",
		date: "2024-01-08",
	},
	{
		name: "Pakistan",
		ContinentName: "Asia",
		date: "2024-01-09",
	},
	{
		name: "Burundi",
		ContinentName: "Africa",
		date: "2024-01-10",
	},
	{
		name: "Austria",
		ContinentName: "Europe",
		date: "2024-01-11",
	},
	{
		name: "Philippines",
		ContinentName: "Asia",
		date: "2024-01-12",
	},
	{
		name: "Germany",
		ContinentName: "Europe",
		date: "2024-01-13",
	},
	{
		name: "Palau",
		ContinentName: "Oceania",
		date: "2024-01-14",
	},
	{
		name: "Vietnam",
		ContinentName: "Asia",
		date: "2024-01-15",
	},
	{
		name: "Tajikistan",
		ContinentName: "Asia",
		date: "2024-01-16",
	},
	{
		name: "South Sudan",
		ContinentName: "Africa",
		date: "2024-01-17",
	},
	{
		name: "Finland",
		ContinentName: "Europe",
		date: "2024-01-18",
	},
	{
		name: "Laos",
		ContinentName: "Asia",
		date: "2024-01-19",
	},
	{
		name: "Saint Kitts and Nevis",
		ContinentName: "North America",
		date: "2024-01-20",
	},
	{
		name: "Kiribati",
		ContinentName: "Oceania",
		date: "2024-01-21",
	},
	{
		name: "Bahamas",
		ContinentName: "North America",
		date: "2024-01-22",
	},
	{
		name: "Lebanon",
		ContinentName: "Asia",
		date: "2024-01-23",
	},
	{
		name: "United Kingdom",
		ContinentName: "Europe",
		date: "2024-01-24",
	},
	{
		name: "Kazakhstan",
		ContinentName: "Asia",
		date: "2024-01-25",
	},
	{
		name: "Nepal",
		ContinentName: "Asia",
		date: "2024-01-26",
	},
	{
		name: "Japan",
		ContinentName: "Asia",
		date: "2024-01-27",
	},
	{
		name: "Belize",
		ContinentName: "Central America",
		date: "2024-01-28",
	},
	{
		name: "Djibouti",
		ContinentName: "Africa",
		date: "2024-01-29",
	},
	{
		name: "Iran",
		ContinentName: "Asia",
		date: "2024-01-30",
	},
	{
		name: "Brunei",
		ContinentName: "Asia",
		date: "2024-01-31",
	},
	{
		name: "Croatia",
		ContinentName: "Europe",
		date: "2024-02-01",
	},
	{
		name: "Dominican Republic",
		ContinentName: "North America",
		date: "2024-02-02",
	},
	{
		name: "Barbados",
		ContinentName: "North America",
		date: "2024-02-03",
	},
	{
		name: "Kosovo",
		ContinentName: "Europe",
		date: "2024-02-04",
	},
	{
		name: "Moldova",
		ContinentName: "Europe",
		date: "2024-02-05",
	},
	{
		name: "Iraq",
		ContinentName: "Asia",
		date: "2024-02-06",
	},
	{
		name: "Sudan",
		ContinentName: "Africa",
		date: "2024-02-07",
	},
	{
		name: "Spain",
		ContinentName: "Europe",
		date: "2024-02-08",
	},
	{
		name: "Zimbabwe",
		ContinentName: "Africa",
		date: "2024-02-09",
	},
	{
		name: "Seychelles",
		ContinentName: "Africa",
		date: "2024-02-10",
	},
	{
		name: "Netherlands",
		ContinentName: "Europe",
		date: "2024-02-11",
	},
	{
		name: "Georgia",
		ContinentName: "Europe",
		date: "2024-02-12",
	},
	{
		name: "Benin",
		ContinentName: "Africa",
		date: "2024-02-13",
	},
	{
		name: "Bosnia and Herzegovina",
		ContinentName: "Europe",
		date: "2024-02-14",
	},
	{
		name: "Maldives",
		ContinentName: "Asia",
		date: "2024-02-15",
	},
	{
		name: "Ecuador",
		ContinentName: "South America",
		date: "2024-02-16",
	},
	{
		name: "Sweden",
		ContinentName: "Europe",
		date: "2024-02-17",
	},
	{
		name: "Central African Republic",
		ContinentName: "Africa",
		date: "2024-02-18",
	},
	{
		name: "Kenya",
		ContinentName: "Africa",
		date: "2024-02-19",
	},
	{
		name: "Sri Lanka",
		ContinentName: "Asia",
		date: "2024-02-20",
	},
	{
		name: "Italy",
		ContinentName: "Europe",
		date: "2024-02-21",
	},
	{
		name: "Tunisia",
		ContinentName: "Africa",
		date: "2024-02-22",
	},
	{
		name: "Jamaica",
		ContinentName: "North America",
		date: "2024-02-23",
	},
	{
		name: "Singapore",
		ContinentName: "Asia",
		date: "2024-02-24",
	},
	{
		name: "Guinea",
		ContinentName: "Africa",
		date: "2024-02-25",
	},
	{
		name: "Mexico",
		ContinentName: "Central America",
		date: "2024-02-26",
	},
	{
		name: "Niger",
		ContinentName: "Africa",
		date: "2024-02-27",
	},
	{
		name: "Cuba",
		ContinentName: "North America",
		date: "2024-02-28",
	},
	{
		name: "Tuvalu",
		ContinentName: "Oceania",
		date: "2024-02-29",
	},
	{
		name: "Togo",
		ContinentName: "Africa",
		date: "2024-03-01",
	},
	{
		name: "El Salvador",
		ContinentName: "Central America",
		date: "2024-03-02",
	},
	{
		name: "Dominica",
		ContinentName: "North America",
		date: "2024-03-03",
	},
	{
		name: "Kyrgyzstan",
		ContinentName: "Asia",
		date: "2024-03-04",
	},
	{
		name: "Saudi Arabia",
		ContinentName: "Asia",
		date: "2024-03-05",
	},
	{
		name: "Cayman Islands",
		ContinentName: "North America",
		date: "2024-03-06",
	},
	{
		name: "Equatorial Guinea",
		ContinentName: "Africa",
		date: "2024-03-07",
	},
	{
		name: "Mongolia",
		ContinentName: "Asia",
		date: "2024-03-08",
	},
	{
		name: "Somalia",
		ContinentName: "Africa",
		date: "2024-03-09",
	},
	{
		name: "Ethiopia",
		ContinentName: "Africa",
		date: "2024-03-10",
	},
	{
		name: "Venezuela",
		ContinentName: "South America",
		date: "2024-03-11",
	},
	{
		name: "Turkmenistan",
		ContinentName: "Asia",
		date: "2024-03-12",
	},
	{
		name: "Suriname",
		ContinentName: "South America",
		date: "2024-03-13",
	},
	{
		name: "Costa Rica",
		ContinentName: "Central America",
		date: "2024-03-14",
	},
	{
		name: "Cameroon",
		ContinentName: "Africa",
		date: "2024-03-15",
	},
	{
		name: "Taiwan",
		ContinentName: "Asia",
		date: "2024-03-16",
	},
	{
		name: "Burkina Faso",
		ContinentName: "Africa",
		date: "2024-03-17",
	},
	{
		name: "Saint Vincent and the Grenadines",
		ContinentName: "Central America",
		date: "2024-03-18",
	},
	{
		name: "Senegal",
		ContinentName: "Africa",
		date: "2024-03-19",
	},
	{
		name: "Denmark",
		ContinentName: "Europe",
		date: "2024-03-20",
	},
	{
		name: "Brazil",
		ContinentName: "South America",
		date: "2024-03-21",
	},
	{
		name: "Hungary",
		ContinentName: "Europe",
		date: "2024-03-22",
	},
	{
		name: "Czech Republic",
		ContinentName: "Europe",
		date: "2024-03-23",
	},
	{
		name: "Antigua and Barbuda",
		ContinentName: "North America",
		date: "2024-03-24",
	},
	{
		name: "Gabon",
		ContinentName: "Africa",
		date: "2024-03-25",
	},
	{
		name: "Portugal",
		ContinentName: "Europe",
		date: "2024-03-26",
	},
	{
		name: "Grenada",
		ContinentName: "North America",
		date: "2024-03-27",
	},
	{
		name: "United Arab Emirates",
		ContinentName: "Asia",
		date: "2024-03-28",
	},
	{
		name: "China",
		ContinentName: "Asia",
		date: "2024-03-29",
	},
	{
		name: "Puerto Rico",
		ContinentName: "North America",
		date: "2024-03-30",
	},
	{
		name: "Botswana",
		ContinentName: "Africa",
		date: "2024-03-31",
	},
	{
		name: "Colombia",
		ContinentName: "South America",
		date: "2024-04-01",
	},
	{
		name: "East Timor",
		ContinentName: "Asia",
		date: "2024-04-02",
	},
	{
		name: "Federated States of Micronesia",
		ContinentName: "Oceania",
		date: "2024-04-03",
	},
	{
		name: "Republic of the Congo",
		ContinentName: "Africa",
		date: "2024-04-04",
	},
	{
		name: "Uzbekistan",
		ContinentName: "Asia",
		date: "2024-04-05",
	},
	{
		name: "Indonesia",
		ContinentName: "Asia",
		date: "2024-04-06",
	},
	{
		name: "Qatar",
		ContinentName: "Asia",
		date: "2024-04-07",
	},
	{
		name: "South Africa",
		ContinentName: "Africa",
		date: "2024-04-08",
	},
	{
		name: "Liechtenstein",
		ContinentName: "Europe",
		date: "2024-04-09",
	},
	{
		name: "Switzerland",
		ContinentName: "Europe",
		date: "2024-04-10",
	},
	{
		name: "Rwanda",
		ContinentName: "Africa",
		date: "2024-04-11",
	},
	{
		name: "Libya",
		ContinentName: "Africa",
		date: "2024-04-12",
	},
	{
		name: "French Polynesia",
		ContinentName: "Oceania",
		date: "2024-04-13",
	},
	{
		name: "New Zealand",
		ContinentName: "Oceania",
		date: "2024-04-14",
	},
	{
		name: "Nauru",
		ContinentName: "Oceania",
		date: "2024-04-15",
	},
	{
		name: "Democratic Republic of the Congo",
		ContinentName: "Africa",
		date: "2024-04-16",
	},
	{
		name: "Mali",
		ContinentName: "Africa",
		date: "2024-04-17",
	},
	{
		name: "Nicaragua",
		ContinentName: "Central America",
		date: "2024-04-18",
	},
	{
		name: "Uruguay",
		ContinentName: "South America",
		date: "2024-04-19",
	},
	{
		name: "Ukraine",
		ContinentName: "Europe",
		date: "2024-04-20",
	},
	{
		name: "Thailand",
		ContinentName: "Asia",
		date: "2024-04-21",
	},
	{
		name: "Estonia",
		ContinentName: "Europe",
		date: "2024-04-22",
	},
	{
		name: "Namibia",
		ContinentName: "Africa",
		date: "2024-04-23",
	},
	{
		name: "The Gambia",
		ContinentName: "Africa",
		date: "2024-04-24",
	},
	{
		name: "Andorra",
		ContinentName: "Europe",
		date: "2024-04-25",
	},
	{
		name: "Nigeria",
		ContinentName: "Africa",
		date: "2024-04-26",
	},
	{
		name: "Iceland",
		ContinentName: "Europe",
		date: "2024-04-27",
	},
	{
		name: "Trinidad and Tobago",
		ContinentName: "North America",
		date: "2024-04-28",
	},

	{
		name: "Moldova",
		ContinentName: "Europe",
		date: "2024-04-29",
	},
	{
		name: "Belarus",
		ContinentName: "Europe",
		date: "2024-04-30",
	},
	{
		name: "Norway",
		ContinentName: "Europe",
		date: "2024-05-01",
	},
	{
		name: "Belgium",
		ContinentName: "Europe",
		date: "2024-05-02",
	},
	{
		name: "China",
		ContinentName: "Asia",
		date: "2024-05-03",
	},
	{
		name: "Lithuania",
		ContinentName: "Europe",
		date: "2024-05-04",
	},
	{
		name: "Saint Lucia",
		ContinentName: "North America",
		date: "2024-05-05",
	},
	{
		name: "Mali",
		ContinentName: "Africa",
		date: "2024-05-06",
	},
	{
		name: "Comoros",
		ContinentName: "Africa",
		date: "2024-05-07",
	},
	{
		name: "Bhutan",
		ContinentName: "Asia",
		date: "2024-05-08",
	},
	{
		name: "Turkmenistan",
		ContinentName: "Asia",
		date: "2024-05-09",
	},
	{
		name: "Kiribati",
		ContinentName: "Oceania",
		date: "2024-05-10",
	},
	{
		name: "New Zealand",
		ContinentName: "Oceania",
		date: "2024-05-11",
	},
	{
		name: "Solomon Islands",
		ContinentName: "Oceania",
		date: "2024-05-12",
	},
	{
		name: "Portugal",
		ContinentName: "Europe",
		date: "2024-05-13",
	},
	{
		name: "East Timor",
		ContinentName: "Asia",
		date: "2024-05-14",
	},
	{
		name: "Rwanda",
		ContinentName: "Africa",
		date: "2024-05-15",
	},
	{
		name: "Dominica",
		ContinentName: "North America",
		date: "2024-05-16",
	},
	{
		name: "Mongolia",
		ContinentName: "Asia",
		date: "2024-05-17",
	},
	{
		name: "Philippines",
		ContinentName: "Asia",
		date: "2024-05-18",
	},
	{
		name: "United Kingdom",
		ContinentName: "Europe",
		date: "2024-05-19",
	},
	{
		name: "Argentina",
		ContinentName: "South America",
		date: "2024-05-20",
	},
	{
		name: "Laos",
		ContinentName: "Asia",
		date: "2024-05-21",
	},
	{
		name: "Grenada",
		ContinentName: "North America",
		date: "2024-05-22",
	},
	{
		name: "Taiwan",
		ContinentName: "Asia",
		date: "2024-05-23",
	},
	{
		name: "Ghana",
		ContinentName: "Africa",
		date: "2024-05-24",
	},
	{
		name: "Ivory Coast",
		ContinentName: "Africa",
		date: "2024-05-25",
	},
	{
		name: "Afghanistan",
		ContinentName: "Asia",
		date: "2024-05-26",
	},
	{
		name: "Republic of the Congo",
		ContinentName: "Africa",
		date: "2024-05-27",
	},
	{
		name: "Yemen",
		ContinentName: "Asia",
		date: "2024-05-28",
	},
	{
		name: "Antigua and Barbuda",
		ContinentName: "North America",
		date: "2024-05-29",
	},
	{
		name: "Vietnam",
		ContinentName: "Asia",
		date: "2024-05-30",
	},
	{
		name: "Panama",
		ContinentName: "Central America",
		date: "2024-05-31",
	},
	{
		name: "Vatican City",
		ContinentName: "Europe",
		date: "2024-06-01",
	},
	{
		name: "Serbia",
		ContinentName: "Europe",
		date: "2024-06-02",
	},
	{
		name: "Albania",
		ContinentName: "Europe",
		date: "2024-06-03",
	},
	{
		name: "Grenada",
		ContinentName: "North America",
		date: "2024-06-04",
	},
	{
		name: "Singapore",
		ContinentName: "Asia",
		date: "2024-06-05",
	},
	{
		name: "Oman",
		ContinentName: "Asia",
		date: "2024-06-06",
	},
	{
		name: "Barbados",
		ContinentName: "North America",
		date: "2024-06-07",
	},
	{
		name: "United Arab Emirates",
		ContinentName: "Asia",
		date: "2024-06-08",
	},
	{
		name: "Egypt",
		ContinentName: "Africa",
		date: "2024-06-09",
	},
	{
		name: "Finland",
		ContinentName: "Europe",
		date: "2024-06-10",
	},
	{
		name: "Zimbabwe",
		ContinentName: "Africa",
		date: "2024-06-11",
	},
	{
		name: "Burundi",
		ContinentName: "Africa",
		date: "2024-06-12",
	},
	{
		name: "Norway",
		ContinentName: "Europe",
		date: "2024-06-13",
	},
	{
		name: "Egypt",
		ContinentName: "Africa",
		date: "2024-06-14",
	},
	{
		name: "Brunei",
		ContinentName: "Asia",
		date: "2024-06-15",
	},
	{
		name: "Finland",
		ContinentName: "Europe",
		date: "2024-06-16",
	},
	{
		name: "Nauru",
		ContinentName: "Oceania",
		date: "2024-06-17",
	},
	{
		name: "Chad",
		ContinentName: "Africa",
		date: "2024-06-18",
	},
	{
		name: "Slovenia",
		ContinentName: "Europe",
		date: "2024-06-19",
	},
	{
		name: "Kyrgyzstan",
		ContinentName: "Asia",
		date: "2024-06-20",
	},
	{
		name: "Central African Republic",
		ContinentName: "Africa",
		date: "2024-06-21",
	},
	{
		name: "Tunisia",
		ContinentName: "Africa",
		date: "2024-06-22",
	},
	{
		name: "New Caledonia",
		ContinentName: "Oceania",
		date: "2024-06-23",
	},
	{
		name: "Fiji",
		ContinentName: "Oceania",
		date: "2024-06-24",
	},
	{
		name: "Lebanon",
		ContinentName: "Asia",
		date: "2024-06-25",
	},
	{
		name: "Solomon Islands",
		ContinentName: "Oceania",
		date: "2024-06-26",
	},
	{
		name: "Romania",
		ContinentName: "Europe",
		date: "2024-06-27",
	},
	{
		name: "Kazakhstan",
		ContinentName: "Asia",
		date: "2024-06-28",
	},
	{
		name: "Armenia",
		ContinentName: "Europe",
		date: "2024-06-29",
	},
	{
		name: "Lesotho",
		ContinentName: "Africa",
		date: "2024-06-30",
	},
	{
		name: "Chile",
		ContinentName: "South America",
		date: "2024-07-01",
	},
	{
		name: "Netherlands",
		ContinentName: "Europe",
		date: "2024-07-02",
	},
	{
		name: "Somaliland",
		ContinentName: "Africa",
		date: "2024-07-03",
	},
	{
		name: "Luxembourg",
		ContinentName: "Europe",
		date: "2024-07-04",
	},
	{
		name: "San Marino",
		ContinentName: "Europe",
		date: "2024-07-05",
	},
	{
		name: "Spain",
		ContinentName: "Europe",
		date: "2024-07-06",
	},
	{
		name: "Belize",
		ContinentName: "Central America",
		date: "2024-07-07",
	},
	{
		name: "Guyana",
		ContinentName: "South America",
		date: "2024-07-08",
	},
	{
		name: "Saint Vincent and the Grenadines",
		ContinentName: "Central America",
		date: "2024-07-09",
	},
	{
		name: "Italy",
		ContinentName: "Europe",
		date: "2024-07-10",
	},
	{
		name: "Kuwait",
		ContinentName: "Asia",
		date: "2024-07-11",
	},
	{
		name: "Croatia",
		ContinentName: "Europe",
		date: "2024-07-12",
	},
	{
		name: "United States of America",
		ContinentName: "US",
		date: "2024-07-13",
	},
	{
		name: "Poland",
		ContinentName: "Europe",
		date: "2024-07-14",
	},
	{
		name: "Sweden",
		ContinentName: "Europe",
		date: "2024-07-15",
	},
	{
		name: "Haiti",
		ContinentName: "North America",
		date: "2024-07-16",
	},
	{
		name: "Taiwan",
		ContinentName: "Asia",
		date: "2024-07-17",
	},
	{
		name: "Myanmar",
		ContinentName: "Asia",
		date: "2024-07-18",
	},
	{
		name: "Lithuania",
		ContinentName: "Europe",
		date: "2024-07-19",
	},
	{
		name: "Tunisia",
		ContinentName: "Africa",
		date: "2024-07-20",
	},
	{
		name: "Slovakia",
		ContinentName: "Europe",
		date: "2024-07-21",
	},
	{
		name: "Malawi",
		ContinentName: "Africa",
		date: "2024-07-22",
	},
	{
		name: "Bahrain",
		ContinentName: "Asia",
		date: "2024-07-23",
	},
	{
		name: "Benin",
		ContinentName: "Africa",
		date: "2024-07-24",
	},
	{
		name: "Bosnia and Herzegovina",
		ContinentName: "Europe",
		date: "2024-07-25",
	},
	{
		name: "Jordan",
		ContinentName: "Asia",
		date: "2024-07-26",
	},
	{
		name: "Tajikistan",
		ContinentName: "Asia",
		date: "2024-07-27",
	},
	{
		name: "Venezuela",
		ContinentName: "South America",
		date: "2024-07-28",
	},
	{
		name: "Paraguay",
		ContinentName: "South America",
		date: "2024-07-29",
	},
	{
		name: "Latvia",
		ContinentName: "Europe",
		date: "2024-07-30",
	},
	{
		name: "Cameroon",
		ContinentName: "Africa",
		date: "2024-07-31",
	},
	{
		name: "Libya",
		ContinentName: "Africa",
		date: "2024-08-01",
	},
	{
		name: "Papua New Guinea",
		ContinentName: "Oceania",
		date: "2024-08-02",
	},
	{
		name: "Brazil",
		ContinentName: "South America",
		date: "2024-08-03",
	},
	{
		name: "Qatar",
		ContinentName: "Asia",
		date: "2024-08-04",
	},
	{
		name: "Guinea",
		ContinentName: "Africa",
		date: "2024-08-05",
	},
	{
		name: "Kuwait",
		ContinentName: "Asia",
		date: "2024-08-06",
	},
	{
		name: "British Virgin Islands",
		ContinentName: "North America",
		date: "2024-08-07",
	},
	{
		name: "Guyana",
		ContinentName: "South America",
		date: "2024-08-08",
	},
	{
		name: "Morocco",
		ContinentName: "Africa",
		date: "2024-08-09",
	},
	{
		name: "Puerto Rico",
		ContinentName: "North America",
		date: "2024-08-10",
	},
	{
		name: "Guinea",
		ContinentName: "Africa",
		date: "2024-08-11",
	},
	{
		name: "Cape Verde",
		ContinentName: "Africa",
		date: "2024-08-12",
	},
	{
		name: "Mexico",
		ContinentName: "Central America",
		date: "2024-08-13",
	},
	{
		name: "Sierra Leone",
		ContinentName: "Africa",
		date: "2024-08-14",
	},
	{
		name: "Syria",
		ContinentName: "Asia",
		date: "2024-08-15",
	},
	{
		name: "Indonesia",
		ContinentName: "Asia",
		date: "2024-08-16",
	},
	{
		name: "Isle of Man",
		ContinentName: "Europe",
		date: "2024-08-17",
	},
	{
		name: "Peru",
		ContinentName: "South America",
		date: "2024-08-18",
	},
	{
		name: "Sri Lanka",
		ContinentName: "Asia",
		date: "2024-08-19",
	},
	{
		name: "Japan",
		ContinentName: "Asia",
		date: "2024-08-20",
	},
	{
		name: "Kazakhstan",
		ContinentName: "Asia",
		date: "2024-08-21",
	},
	{
		name: "Malaysia",
		ContinentName: "Asia",
		date: "2024-08-22",
	},
	{
		name: "Iran",
		ContinentName: "Asia",
		date: "2024-08-23",
	},
	{
		name: "Saint Vincent and the Grenadines",
		ContinentName: "Central America",
		date: "2024-08-24",
	},
	{
		name: "El Salvador",
		ContinentName: "Central America",
		date: "2024-08-25",
	},
	{
		name: "Gabon",
		ContinentName: "Africa",
		date: "2024-08-26",
	},
	{
		name: "Montenegro",
		ContinentName: "Europe",
		date: "2024-08-27",
	},
	{
		name: "Switzerland",
		ContinentName: "Europe",
		date: "2024-08-28",
	},
	{
		name: "France",
		ContinentName: "Europe",
		date: "2024-08-29",
	},
	{
		name: "Liechtenstein",
		ContinentName: "Europe",
		date: "2024-08-30",
	},
	{
		name: "Tuvalu",
		ContinentName: "Oceania",
		date: "2024-08-31",
	},
	{
		name: "Mauritius",
		ContinentName: "Africa",
		date: "2024-09-01",
	},
	{
		name: "Czech Republic",
		ContinentName: "Europe",
		date: "2024-09-02",
	},
	{
		name: "Pakistan",
		ContinentName: "Asia",
		date: "2024-09-03",
	},
	{
		name: "Chad",
		ContinentName: "Africa",
		date: "2024-09-04",
	},
	{
		name: "Belize",
		ContinentName: "Central America",
		date: "2024-09-05",
	},
	{
		name: "Mauritania",
		ContinentName: "Africa",
		date: "2024-09-06",
	},
	{
		name: "Algeria",
		ContinentName: "Africa",
		date: "2024-09-07",
	},
	{
		name: "Luxembourg",
		ContinentName: "Europe",
		date: "2024-09-08",
	},
	{
		name: "Liechtenstein",
		ContinentName: "Europe",
		date: "2024-09-09",
	},
	{
		name: "Tonga",
		ContinentName: "Oceania",
		date: "2024-09-10",
	},
	{
		name: "Kiribati",
		ContinentName: "Oceania",
		date: "2024-09-11",
	},
	{
		name: "Turkey",
		ContinentName: "Europe",
		date: "2024-09-12",
	},
	{
		name: "Russia",
		ContinentName: "Europe",
		date: "2024-09-13",
	},
	{
		name: "Greece",
		ContinentName: "Europe",
		date: "2024-09-14",
	},
	{
		name: "Hong Kong",
		ContinentName: "Asia",
		date: "2024-09-15",
	},
	{
		name: "Palestine",
		ContinentName: "Asia",
		date: "2024-09-16",
	},
	{
		name: "Paraguay",
		ContinentName: "South America",
		date: "2024-09-17",
	},
	{
		name: "Cayman Islands",
		ContinentName: "North America",
		date: "2024-09-18",
	},
	{
		name: "Ireland",
		ContinentName: "Europe",
		date: "2024-09-19",
	},
	{
		name: "French Polynesia",
		ContinentName: "Oceania",
		date: "2024-09-20",
	},
	{
		name: "Guatemala",
		ContinentName: "Central America",
		date: "2024-09-21",
	},
	{
		name: "Federated States of Micronesia",
		ContinentName: "Oceania",
		date: "2024-09-22",
	},
	{
		name: "Tanzania",
		ContinentName: "Africa",
		date: "2024-09-23",
	},
	{
		name: "Gabon",
		ContinentName: "Africa",
		date: "2024-09-24",
	},
	{
		name: "Guinea-Bissau",
		ContinentName: "Africa",
		date: "2024-09-25",
	},
	{
		name: "Niger",
		ContinentName: "Africa",
		date: "2024-09-26",
	},
	{
		name: "Belgium",
		ContinentName: "Europe",
		date: "2024-09-27",
	},
	{
		name: "Bulgaria",
		ContinentName: "Europe",
		date: "2024-09-28",
	},
	{
		name: "Maldives",
		ContinentName: "Asia",
		date: "2024-09-29",
	},
	{
		name: "Uganda",
		ContinentName: "Africa",
		date: "2024-09-30",
	},
	{
		name: "Netherlands",
		ContinentName: "Europe",
		date: "2024-10-01",
	},
	{
		name: "Albania",
		ContinentName: "Europe",
		date: "2024-10-02",
	},
	{
		name: "Honduras",
		ContinentName: "Central America",
		date: "2024-10-03",
	},
	{
		name: "Ivory Coast",
		ContinentName: "Africa",
		date: "2024-10-04",
	},
	{
		name: "Zimbabwe",
		ContinentName: "Africa",
		date: "2024-10-05",
	},
	{
		name: "Mali",
		ContinentName: "Africa",
		date: "2024-10-06",
	},
	{
		name: "Sudan",
		ContinentName: "Africa",
		date: "2024-10-07",
	},
	{
		name: "Indonesia",
		ContinentName: "Asia",
		date: "2024-10-08",
	},
	{
		name: "Mexico",
		ContinentName: "Central America",
		date: "2024-10-09",
	},
	{
		name: "Vanuatu",
		ContinentName: "Oceania",
		date: "2024-10-10",
	},
	{
		name: "Iran",
		ContinentName: "Asia",
		date: "2024-10-11",
	},
	{
		name: "Latvia",
		ContinentName: "Europe",
		date: "2024-10-12",
	},
	{
		name: "Serbia",
		ContinentName: "Europe",
		date: "2024-10-13",
	},
	{
		name: "Bangladesh",
		ContinentName: "Asia",
		date: "2024-10-14",
	},
	{
		name: "Brazil",
		ContinentName: "South America",
		date: "2024-10-15",
	},
	{
		name: "Saudi Arabia",
		ContinentName: "Asia",
		date: "2024-10-16",
	},
	{
		name: "South Korea",
		ContinentName: "Asia",
		date: "2024-10-17",
	},
	{
		name: "Ghana",
		ContinentName: "Africa",
		date: "2024-10-18",
	},
	{
		name: "Somalia",
		ContinentName: "Africa",
		date: "2024-10-19",
	},
	{
		name: "India",
		ContinentName: "Asia",
		date: "2024-10-20",
	},
	{
		name: "Ukraine",
		ContinentName: "Europe",
		date: "2024-10-21",
	},
	{
		name: "Uruguay",
		ContinentName: "South America",
		date: "2024-10-22",
	},
	{
		name: "Romania",
		ContinentName: "Europe",
		date: "2024-10-23",
	},
	{
		name: "New Zealand",
		ContinentName: "Oceania",
		date: "2024-10-24",
	},
	{
		name: "Greece",
		ContinentName: "Europe",
		date: "2024-10-25",
	},
	{
		name: "Jordan",
		ContinentName: "Asia",
		date: "2024-10-26",
	},
	{
		name: "Iceland",
		ContinentName: "Europe",
		date: "2024-10-27",
	},
	{
		name: "Puerto Rico",
		ContinentName: "North America",
		date: "2024-10-28",
	},
	{
		name: "Vietnam",
		ContinentName: "Asia",
		date: "2024-10-29",
	},
	{
		name: "Central African Republic",
		ContinentName: "Africa",
		date: "2024-10-30",
	},
	{
		name: "Nepal",
		ContinentName: "Asia",
		date: "2024-10-31",
	},
	{
		name: "Panama",
		ContinentName: "Central America",
		date: "2024-11-01",
	},
	{
		name: "Sierra Leone",
		ContinentName: "Africa",
		date: "2024-11-02",
	},
	{
		name: "Burundi",
		ContinentName: "Africa",
		date: "2024-11-03",
	},
	{
		name: "Rwanda",
		ContinentName: "Africa",
		date: "2024-11-04",
	},
	{
		name: "Colombia",
		ContinentName: "South America",
		date: "2024-11-05",
	},
	{
		name: "Marshall Islands",
		ContinentName: "Oceania",
		date: "2024-11-06",
	},
	{
		name: "Bahamas",
		ContinentName: "North America",
		date: "2024-11-07",
	},
	{
		name: "Moldova",
		ContinentName: "Europe",
		date: "2024-11-08",
	},
	{
		name: "Thailand",
		ContinentName: "Asia",
		date: "2024-11-09",
	},
	{
		name: "Canada",
		ContinentName: "Central America",
		date: "2024-11-10",
	},
	{
		name: "Australia",
		ContinentName: "Oceania",
		date: "2024-11-11",
	},
	{
		name: "Guatemala",
		ContinentName: "Central America",
		date: "2024-11-12",
	},
	{
		name: "Portugal",
		ContinentName: "Europe",
		date: "2024-11-13",
	},
	{
		name: "Palau",
		ContinentName: "Oceania",
		date: "2024-11-14",
	},
	{
		name: "Iceland",
		ContinentName: "Europe",
		date: "2024-11-15",
	},
	{
		name: "Saint Kitts and Nevis",
		ContinentName: "North America",
		date: "2024-11-16",
	},
	{
		name: "Mozambique",
		ContinentName: "Africa",
		date: "2024-11-17",
	},
	{
		name: "Dominica",
		ContinentName: "North America",
		date: "2024-11-18",
	},
	{
		name: "Benin",
		ContinentName: "Africa",
		date: "2024-11-19",
	},
	{
		name: "Isle of Man",
		ContinentName: "Europe",
		date: "2024-11-20",
	},
	{
		name: "Papua New Guinea",
		ContinentName: "Oceania",
		date: "2024-11-21",
	},
	{
		name: "Macedonia",
		ContinentName: "Europe",
		date: "2024-11-22",
	},
	{
		name: "China",
		ContinentName: "Asia",
		date: "2024-11-23",
	},
	{
		name: "Macedonia",
		ContinentName: "Europe",
		date: "2024-11-24",
	},
	{
		name: "Equatorial Guinea",
		ContinentName: "Africa",
		date: "2024-11-25",
	},
	{
		name: "Malta",
		ContinentName: "Europe",
		date: "2024-11-26",
	},
	{
		name: "Samoa",
		ContinentName: "Oceania",
		date: "2024-11-27",
	},
	{
		name: "Qatar",
		ContinentName: "Asia",
		date: "2024-11-28",
	},
	{
		name: "Bhutan",
		ContinentName: "Asia",
		date: "2024-11-29",
	},
	{
		name: "Germany",
		ContinentName: "Europe",
		date: "2024-11-30",
	},
	{
		name: "Burkina Faso",
		ContinentName: "Africa",
		date: "2024-12-01",
	},
	{
		name: "Cuba",
		ContinentName: "North America",
		date: "2024-12-02",
	},
	{
		name: "Hungary",
		ContinentName: "Europe",
		date: "2024-12-03",
	},
	{
		name: "Nauru",
		ContinentName: "Oceania",
		date: "2024-12-04",
	},
	{
		name: "United Kingdom",
		ContinentName: "Europe",
		date: "2024-12-05",
	},
	{
		name: "Trinidad and Tobago",
		ContinentName: "North America",
		date: "2024-12-06",
	},
	{
		name: "Peru",
		ContinentName: "South America",
		date: "2024-12-07",
	},
	{
		name: "Brunei",
		ContinentName: "Asia",
		date: "2024-12-08",
	},
	{
		name: "Zambia",
		ContinentName: "Africa",
		date: "2024-12-09",
	},
	{
		name: "Cape Verde",
		ContinentName: "Africa",
		date: "2024-12-10",
	},
	{
		name: "Uganda",
		ContinentName: "Africa",
		date: "2024-12-11",
	},
	{
		name: "Hungary",
		ContinentName: "Europe",
		date: "2024-12-12",
	},
	{
		name: "Italy",
		ContinentName: "Europe",
		date: "2024-12-13",
	},
	{
		name: "Namibia",
		ContinentName: "Africa",
		date: "2024-12-14",
	},
	{
		name: "Bangladesh",
		ContinentName: "Asia",
		date: "2024-12-15",
	},
	{
		name: "Armenia",
		ContinentName: "Europe",
		date: "2024-12-16",
	},
	{
		name: "Venezuela",
		ContinentName: "South America",
		date: "2024-12-17",
	},
	{
		name: "Lesotho",
		ContinentName: "Africa",
		date: "2024-12-18",
	},
	{
		name: "Montenegro",
		ContinentName: "Europe",
		date: "2024-12-19",
	},
	{
		name: "Jamaica",
		ContinentName: "North America",
		date: "2024-12-20",
	},
	{
		name: "Austria",
		ContinentName: "Europe",
		date: "2024-12-21",
	},
	{
		name: "Democratic Republic of the Congo",
		ContinentName: "Africa",
		date: "2024-12-22",
	},
	{
		name: "Turkey",
		ContinentName: "Europe",
		date: "2024-12-23",
	},
	{
		name: "Algeria",
		ContinentName: "Africa",
		date: "2024-12-24",
	},
	{
		name: "Afghanistan",
		ContinentName: "Asia",
		date: "2024-12-25",
	},
	{
		name: "Iraq",
		ContinentName: "Asia",
		date: "2024-12-26",
	},
	{
		name: "Czech Republic",
		ContinentName: "Europe",
		date: "2024-12-27",
	},
	{
		name: "Barbados",
		ContinentName: "North America",
		date: "2024-12-28",
	},
	{
		name: "Uzbekistan",
		ContinentName: "Asia",
		date: "2024-12-29",
	},
	{
		name: "Togo",
		ContinentName: "Africa",
		date: "2024-12-30",
	},
	{
		name: "Namibia",
		ContinentName: "Africa",
		date: "2024-12-31",
	},
	{
		name: "Sudan",
		ContinentName: "Africa",
		date: "2025-01-01",
	},
	{
		name: "Colombia",
		ContinentName: "South America",
		date: "2025-01-02",
	},
	{
		name: "Sweden",
		ContinentName: "Europe",
		date: "2025-01-03",
	},
	{
		name: "Angola",
		ContinentName: "Africa",
		date: "2025-01-04",
	},
	{
		name: "United Arab Emirates",
		ContinentName: "Asia",
		date: "2025-01-05",
	},
	{
		name: "Slovakia",
		ContinentName: "Europe",
		date: "2025-01-06",
	},
	{
		name: "Cayman Islands",
		ContinentName: "North America",
		date: "2025-01-07",
	},
	{
		name: "Fiji",
		ContinentName: "Oceania",
		date: "2025-01-08",
	},
	{
		name: "The Gambia",
		ContinentName: "Africa",
		date: "2025-01-09",
	},
	{
		name: "Azerbaijan",
		ContinentName: "Europe",
		date: "2025-01-10",
	},
	{
		name: "Singapore",
		ContinentName: "Asia",
		date: "2025-01-11",
	},
	{
		name: "Georgia",
		ContinentName: "Europe",
		date: "2025-01-12",
	},
	{
		name: "Liberia",
		ContinentName: "Africa",
		date: "2025-01-13",
	},
	{
		name: "Andorra",
		ContinentName: "Europe",
		date: "2025-01-14",
	},
	{
		name: "India",
		ContinentName: "Asia",
		date: "2025-01-15",
	},
	{
		name: "Tanzania",
		ContinentName: "Africa",
		date: "2025-01-16",
	},
	{
		name: "Ukraine",
		ContinentName: "Europe",
		date: "2025-01-17",
	},
	{
		name: "South Sudan",
		ContinentName: "Africa",
		date: "2025-01-18",
	},
	{
		name: "Spain",
		ContinentName: "Europe",
		date: "2025-01-19",
	},
	{
		name: "Democratic Republic of the Congo",
		ContinentName: "Africa",
		date: "2025-01-20",
	},
	{
		name: "Slovenia",
		ContinentName: "Europe",
		date: "2025-01-21",
	},
	{
		name: "Uzbekistan",
		ContinentName: "Asia",
		date: "2025-01-22",
	},
	{
		name: "Mauritania",
		ContinentName: "Africa",
		date: "2025-01-23",
	},
	{
		name: "Poland",
		ContinentName: "Europe",
		date: "2025-01-24",
	},
	{
		name: "Seychelles",
		ContinentName: "Africa",
		date: "2025-01-25",
	},
	{
		name: "Uruguay",
		ContinentName: "South America",
		date: "2025-01-26",
	},
	{
		name: "Thailand",
		ContinentName: "Asia",
		date: "2025-01-27",
	},
	{
		name: "Kenya",
		ContinentName: "Africa",
		date: "2025-01-28",
	},
	{
		name: "British Virgin Islands",
		ContinentName: "North America",
		date: "2025-01-29",
	},
	{
		name: "Bulgaria",
		ContinentName: "Europe",
		date: "2025-01-30",
	},
	{
		name: "Djibouti",
		ContinentName: "Africa",
		date: "2025-01-31",
	},
	{
		name: "Senegal",
		ContinentName: "Africa",
		date: "2025-02-01",
	},
	{
		name: "Georgia",
		ContinentName: "Europe",
		date: "2025-02-02",
	},
	{
		name: "Costa Rica",
		ContinentName: "Central America",
		date: "2025-02-03",
	},
	{
		name: "Samoa",
		ContinentName: "Oceania",
		date: "2025-02-04",
	},
	{
		name: "Vatican City",
		ContinentName: "Europe",
		date: "2025-02-05",
	},
	{
		name: "Kosovo",
		ContinentName: "Europe",
		date: "2025-02-06",
	},
	{
		name: "Cyprus",
		ContinentName: "Europe",
		date: "2025-02-07",
	},
	{
		name: "New Caledonia",
		ContinentName: "Oceania",
		date: "2025-02-08",
	},
	{
		name: "Cambodia",
		ContinentName: "Asia",
		date: "2025-02-09",
	},
	{
		name: "Liberia",
		ContinentName: "Africa",
		date: "2025-02-10",
	},
	{
		name: "Sao Tome and Principe",
		ContinentName: "Africa",
		date: "2025-02-11",
	},
	{
		name: "Madagascar",
		ContinentName: "Africa",
		date: "2025-02-12",
	},
	{
		name: "Yemen",
		ContinentName: "Asia",
		date: "2025-02-13",
	},
	{
		name: "Somaliland",
		ContinentName: "Africa",
		date: "2025-02-14",
	},
	{
		name: "Oman",
		ContinentName: "Asia",
		date: "2025-02-15",
	},
	{
		name: "Somalia",
		ContinentName: "Africa",
		date: "2025-02-16",
	},
	{
		name: "Trinidad and Tobago",
		ContinentName: "North America",
		date: "2025-02-17",
	},
	{
		name: "Estonia",
		ContinentName: "Europe",
		date: "2025-02-18",
	},
	{
		name: "Monaco",
		ContinentName: "Europe",
		date: "2025-02-19",
	},
	{
		name: "France",
		ContinentName: "Europe",
		date: "2025-02-20",
	},
	{
		name: "Nigeria",
		ContinentName: "Africa",
		date: "2025-02-21",
	},
	{
		name: "Malawi",
		ContinentName: "Africa",
		date: "2025-02-22",
	},
	{
		name: "Russia",
		ContinentName: "Europe",
		date: "2025-02-23",
	},
	{
		name: "Syria",
		ContinentName: "Asia",
		date: "2025-02-24",
	},
	{
		name: "Antigua and Barbuda",
		ContinentName: "North America",
		date: "2025-02-25",
	},
	{
		name: "Tonga",
		ContinentName: "Oceania",
		date: "2025-02-26",
	},
	{
		name: "Honduras",
		ContinentName: "Central America",
		date: "2025-02-27",
	},
	{
		name: "Germany",
		ContinentName: "Europe",
		date: "2025-02-28",
	},
	{
		name: "Suriname",
		ContinentName: "South America",
		date: "2025-03-01",
	},
	{
		name: "Bolivia",
		ContinentName: "South America",
		date: "2025-03-02",
	},
	{
		name: "Libya",
		ContinentName: "Africa",
		date: "2025-03-03",
	},
	{
		name: "Kyrgyzstan",
		ContinentName: "Asia",
		date: "2025-03-04",
	},
	{
		name: "Tuvalu",
		ContinentName: "Oceania",
		date: "2025-03-05",
	},
	{
		name: "Equatorial Guinea",
		ContinentName: "Africa",
		date: "2025-03-06",
	},
	{
		name: "Canada",
		ContinentName: "Central America",
		date: "2025-03-07",
	},
	{
		name: "Federated States of Micronesia",
		ContinentName: "Oceania",
		date: "2025-03-08",
	},
	{
		name: "Morocco",
		ContinentName: "Africa",
		date: "2025-03-09",
	},
	{
		name: "Dominican Republic",
		ContinentName: "North America",
		date: "2025-03-10",
	},
	{
		name: "Botswana",
		ContinentName: "Africa",
		date: "2025-03-11",
	},
	{
		name: "Cuba",
		ContinentName: "North America",
		date: "2025-03-12",
	},
	{
		name: "North Korea",
		ContinentName: "Asia",
		date: "2025-03-13",
	},
	{
		name: "Togo",
		ContinentName: "Africa",
		date: "2025-03-14",
	},
	{
		name: "Andorra",
		ContinentName: "Europe",
		date: "2025-03-15",
	},
	{
		name: "Madagascar",
		ContinentName: "Africa",
		date: "2025-03-16",
	},
	{
		name: "Botswana",
		ContinentName: "Africa",
		date: "2025-03-17",
	},
	{
		name: "Saint Lucia",
		ContinentName: "North America",
		date: "2025-03-18",
	},
	{
		name: "Ecuador",
		ContinentName: "South America",
		date: "2025-03-19",
	},
	{
		name: "Laos",
		ContinentName: "Asia",
		date: "2025-03-20",
	},
	{
		name: "Philippines",
		ContinentName: "Asia",
		date: "2025-03-21",
	},
	{
		name: "Hong Kong",
		ContinentName: "Asia",
		date: "2025-03-22",
	},
	{
		name: "Nicaragua",
		ContinentName: "Central America",
		date: "2025-03-23",
	},
	{
		name: "Argentina",
		ContinentName: "South America",
		date: "2025-03-24",
	},
	{
		name: "Pakistan",
		ContinentName: "Asia",
		date: "2025-03-25",
	},
	{
		name: "Comoros",
		ContinentName: "Africa",
		date: "2025-03-26",
	},
	{
		name: "Senegal",
		ContinentName: "Africa",
		date: "2025-03-27",
	},
	{
		name: "Turkmenistan",
		ContinentName: "Asia",
		date: "2025-03-28",
	},
	{
		name: "Japan",
		ContinentName: "Asia",
		date: "2025-03-29",
	},
	{
		name: "Saint Kitts and Nevis",
		ContinentName: "North America",
		date: "2025-03-30",
	},
	{
		name: "Denmark",
		ContinentName: "Europe",
		date: "2025-03-31",
	},
	{
		name: "Sri Lanka",
		ContinentName: "Asia",
		date: "2025-04-01",
	},
	{
		name: "Mongolia",
		ContinentName: "Asia",
		date: "2025-04-02",
	},
	{
		name: "Angola",
		ContinentName: "Africa",
		date: "2025-04-03",
	},
	{
		name: "South Africa",
		ContinentName: "Africa",
		date: "2025-04-04",
	},
	{
		name: "French Polynesia",
		ContinentName: "Oceania",
		date: "2025-04-05",
	},
	{
		name: "Ethiopia",
		ContinentName: "Africa",
		date: "2025-04-06",
	},
	{
		name: "Guinea-Bissau",
		ContinentName: "Africa",
		date: "2025-04-07",
	},
	{
		name: "Cameroon",
		ContinentName: "Africa",
		date: "2025-04-08",
	},
	{
		name: "Sao Tome and Principe",
		ContinentName: "Africa",
		date: "2025-04-09",
	},
	{
		name: "Nicaragua",
		ContinentName: "Central America",
		date: "2025-04-10",
	},
	{
		name: "Croatia",
		ContinentName: "Europe",
		date: "2025-04-11",
	},
	{
		name: "Estonia",
		ContinentName: "Europe",
		date: "2025-04-12",
	},
	{
		name: "South Sudan",
		ContinentName: "Africa",
		date: "2025-04-13",
	},
	{
		name: "Austria",
		ContinentName: "Europe",
		date: "2025-04-14",
	},
	{
		name: "Ireland",
		ContinentName: "Europe",
		date: "2025-04-15",
	},
	{
		name: "Malaysia",
		ContinentName: "Asia",
		date: "2025-04-16",
	},
	{
		name: "Djibouti",
		ContinentName: "Africa",
		date: "2025-04-17",
	},
	{
		name: "Mauritius",
		ContinentName: "Africa",
		date: "2025-04-18",
	},
	{
		name: "Iraq",
		ContinentName: "Asia",
		date: "2025-04-19",
	},
	{
		name: "Cyprus",
		ContinentName: "Europe",
		date: "2025-04-20",
	},
	{
		name: "Nigeria",
		ContinentName: "Africa",
		date: "2025-04-21",
	},
	{
		name: "Bahrain",
		ContinentName: "Asia",
		date: "2025-04-22",
	},
	{
		name: "Monaco",
		ContinentName: "Europe",
		date: "2025-04-23",
	},
	{
		name: "Suriname",
		ContinentName: "South America",
		date: "2025-04-24",
	},
	{
		name: "Haiti",
		ContinentName: "North America",
		date: "2025-04-25",
	},
	{
		name: "Mozambique",
		ContinentName: "Africa",
		date: "2025-04-26",
	},
	{
		name: "Costa Rica",
		ContinentName: "Central America",
		date: "2025-04-27",
	},
	{
		name: "Lebanon",
		ContinentName: "Asia",
		date: "2025-04-28",
	},
	{
		name: "Eritrea",
		ContinentName: "Africa",
		date: "2025-04-29",
	},
	{
		name: "Burkina Faso",
		ContinentName: "Africa",
		date: "2025-04-30",
	},
	{
		name: "Dominican Republic",
		ContinentName: "North America",
		date: "2025-05-01",
	},
	{
		name: "Jamaica",
		ContinentName: "North America",
		date: "2025-05-02",
	},
	{
		name: "American Samoa",
		ContinentName: "Oceania",
		date: "2025-05-03",
	},
	{
		name: "Tajikistan",
		ContinentName: "Asia",
		date: "2025-05-04",
	},
	{
		name: "East Timor",
		ContinentName: "Asia",
		date: "2025-05-05",
	},
	{
		name: "Nepal",
		ContinentName: "Asia",
		date: "2025-05-06",
	},
	{
		name: "Azerbaijan",
		ContinentName: "Europe",
		date: "2025-05-07",
	},
	{
		name: "Ecuador",
		ContinentName: "South America",
		date: "2025-05-08",
	},
	{
		name: "American Samoa",
		ContinentName: "Oceania",
		date: "2025-05-09",
	},
	{
		name: "Switzerland",
		ContinentName: "Europe",
		date: "2025-05-10",
	},
	{
		name: "South Korea",
		ContinentName: "Asia",
		date: "2025-05-11",
	},
	{
		name: "Myanmar",
		ContinentName: "Asia",
		date: "2025-05-12",
	},
	{
		name: "Niger",
		ContinentName: "Africa",
		date: "2025-05-13",
	},
	{
		name: "Saudi Arabia",
		ContinentName: "Asia",
		date: "2025-05-14",
	},
	{
		name: "The Gambia",
		ContinentName: "Africa",
		date: "2025-05-15",
	},
	{
		name: "Denmark",
		ContinentName: "Europe",
		date: "2025-05-16",
	},
	{
		name: "Maldives",
		ContinentName: "Asia",
		date: "2025-05-17",
	},
	{
		name: "Australia",
		ContinentName: "Oceania",
		date: "2025-05-18",
	},
	{
		name: "Chile",
		ContinentName: "South America",
		date: "2025-05-19",
	},
	{
		name: "Palestine",
		ContinentName: "Asia",
		date: "2025-05-20",
	},
	{
		name: "North Korea",
		ContinentName: "Asia",
		date: "2025-05-21",
	},
	{
		name: "Bosnia and Herzegovina",
		ContinentName: "Europe",
		date: "2025-05-22",
	},
	{
		name: "Vanuatu",
		ContinentName: "Oceania",
		date: "2025-05-23",
	},
	{
		name: "South Africa",
		ContinentName: "Africa",
		date: "2025-05-24",
	},
	{
		name: "Bolivia",
		ContinentName: "South America",
		date: "2025-05-25",
	},
	{
		name: "Kosovo",
		ContinentName: "Europe",
		date: "2025-05-26",
	},
	{
		name: "Republic of the Congo",
		ContinentName: "Africa",
		date: "2025-05-27",
	},
	{
		name: "Zambia",
		ContinentName: "Africa",
		date: "2025-05-28",
	},
	{
		name: "Seychelles",
		ContinentName: "Africa",
		date: "2025-05-29",
	},
	{
		name: "United States of America",
		ContinentName: "US",
		date: "2025-05-30",
	},
	{
		name: "Malta",
		ContinentName: "Europe",
		date: "2025-05-31",
	},
	{
		name: "Eritrea",
		ContinentName: "Africa",
		date: "2025-06-01",
	},
	{
		name: "Palau",
		ContinentName: "Oceania",
		date: "2025-06-02",
	},
	{
		name: "Bahamas",
		ContinentName: "North America",
		date: "2025-06-03",
	},
	{
		name: "Kenya",
		ContinentName: "Africa",
		date: "2025-06-04",
	},
	{
		name: "Ethiopia",
		ContinentName: "Africa",
		date: "2025-06-05",
	},
	{
		name: "San Marino",
		ContinentName: "Europe",
		date: "2025-06-06",
	},
	{
		name: "Belarus",
		ContinentName: "Europe",
		date: "2025-06-07",
	},
	{
		name: "Marshall Islands",
		ContinentName: "Oceania",
		date: "2025-06-08",
	},
	{
		name: "El Salvador",
		ContinentName: "Central America",
		date: "2025-06-09",
	},
];

const flags = [
	{
		url: "/wiki/Afghanistan",
		alpha3: "AFG",
		name: "Afghanistan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/%C3%85land_Islands",
		alpha3: "ALA",
		name: "Aaland Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Albania",
		alpha3: "ALB",
		name: "Albania",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Algeria",
		alpha3: "DZA",
		name: "Algeria",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/American_Samoa",
		alpha3: "ASM",
		name: "American Samoa",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Andorra",
		alpha3: "AND",
		name: "Andorra",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Angola",
		alpha3: "AGO",
		name: "Angola",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Anguilla",
		alpha3: "AIA",
		name: "Anguilla",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Antigua_and_Barbuda",
		alpha3: "ATG",
		name: "Antigua and Barbuda",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Argentina",
		alpha3: "ARG",
		name: "Argentina",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Armenia",
		alpha3: "ARM",
		name: "Armenia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Aruba",
		alpha3: "ABW",
		name: "Aruba",
		file_url: "//upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Australia",
		alpha3: "AUS",
		name: "Australia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Austria",
		alpha3: "AUT",
		name: "Austria",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Azerbaijan",
		alpha3: "AZE",
		name: "Azerbaijan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bahamas",
		alpha3: "BHS",
		name: "Bahamas",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bahrain",
		alpha3: "BHR",
		name: "Bahrain",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bangladesh",
		alpha3: "BGD",
		name: "Bangladesh",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Barbados",
		alpha3: "BRB",
		name: "Barbados",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Belarus",
		alpha3: "BLR",
		name: "Belarus",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Belgium",
		alpha3: "BEL",
		name: "Belgium",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Belize",
		alpha3: "BLZ",
		name: "Belize",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Benin",
		alpha3: "BEN",
		name: "Benin",
		file_url: "//upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bermuda",
		alpha3: "BMU",
		name: "Bermuda",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bhutan",
		alpha3: "BTN",
		name: "Bhutan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bolivia",
		alpha3: "BOL",
		name: "Bolivia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/b3/Bandera_de_Bolivia_%28Estado%29.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Caribbean_Netherlands",
		alpha3: "BES",
		name: "Bonaire - Sint Eustatius and Saba",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bosnia_and_Herzegovina",
		alpha3: "BIH",
		name: "Bosnia and Herzegovina",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Botswana",
		alpha3: "BWA",
		name: "Botswana",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Brazil",
		alpha3: "BRA",
		name: "Brazil",
		file_url: "//upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/British_Indian_Ocean_Territory",
		alpha3: "IOT",
		name: "British Indian Ocean Territory",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Brunei_Darussalam",
		alpha3: "BRN",
		name: "Brunei",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bulgaria",
		alpha3: "BGR",
		name: "Bulgaria",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Burkina_Faso",
		alpha3: "BFA",
		name: "Burkina Faso",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Burundi",
		alpha3: "BDI",
		name: "Burundi",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cabo_Verde",
		alpha3: "CPV",
		name: "Cape Verde",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cambodia",
		alpha3: "KHM",
		name: "Cambodia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cameroon",
		alpha3: "CMR",
		name: "Cameroon",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Canada",
		alpha3: "CAN",
		name: "Canada",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cayman_Islands",
		alpha3: "CYM",
		name: "Cayman Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Central_African_Republic",
		alpha3: "CAF",
		name: "Central African Republic",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Chad",
		alpha3: "TCD",
		name: "Chad",
		file_url: "//upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Chile",
		alpha3: "CHL",
		name: "Chile",
		file_url: "//upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/China",
		alpha3: "CHN",
		name: "China",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Christmas_Island",
		alpha3: "CXR",
		name: "Christmas Island",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cocos_(Keeling)_Islands",
		alpha3: "CCK",
		name: "Cocos Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Colombia",
		alpha3: "COL",
		name: "Colombia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Comoros",
		alpha3: "COM",
		name: "Comoros",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Republic_of_the_Congo",
		alpha3: "COG",
		name: "Republic of the Congo",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Democratic_Republic_of_the_Congo",
		alpha3: "COD",
		name: "Democratic Republic of the Congo",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cook_Islands",
		alpha3: "COK",
		name: "Cook Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Costa_Rica",
		alpha3: "CRI",
		name: "Costa Rica",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Ivory_Coast",
		alpha3: "CIV",
		name: "Ivory Coast",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Croatia",
		alpha3: "HRV",
		name: "Croatia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cuba",
		alpha3: "CUB",
		name: "Cuba",
		file_url: "//upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cura%C3%A7ao",
		alpha3: "CUW",
		name: "Cura\u00e7ao",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Cura%C3%A7ao.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Cyprus",
		alpha3: "CYP",
		name: "Cyprus",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Czech_Republic",
		alpha3: "CZE",
		name: "Czech Republic",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Denmark",
		alpha3: "DNK",
		name: "Denmark",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Djibouti",
		alpha3: "DJI",
		name: "Djibouti",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Dominica",
		alpha3: "DMA",
		name: "Dominica",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Dominican_Republic",
		alpha3: "DOM",
		name: "Dominican Republic",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Ecuador",
		alpha3: "ECU",
		name: "Ecuador",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Egypt",
		alpha3: "EGY",
		name: "Egypt",
		file_url: "//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/El_Salvador",
		alpha3: "SLV",
		name: "El Salvador",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Equatorial_Guinea",
		alpha3: "GNQ",
		name: "Equatorial Guinea",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Eritrea",
		alpha3: "ERI",
		name: "Eritrea",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Estonia",
		alpha3: "EST",
		name: "Estonia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Eswatini",
		alpha3: "SWZ",
		name: "Eswatini",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Ethiopia",
		alpha3: "ETH",
		name: "Ethiopia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Falkland_Islands",
		alpha3: "FLK",
		name: "Falkland Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Faroe_Islands",
		alpha3: "FRO",
		name: "Faroe Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Fiji",
		alpha3: "FJI",
		name: "Fiji",
		file_url: "//upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Finland",
		alpha3: "FIN",
		name: "Finland",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/France",
		alpha3: "FRA",
		name: "France",
		file_url: "//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/French_Polynesia",
		alpha3: "PYF",
		name: "French Polynesia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/French_Southern_and_Antarctic_Lands",
		alpha3: "ATF",
		name: "French Southern Territories",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Gabon",
		alpha3: "GAB",
		name: "Gabon",
		file_url: "//upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Gambia",
		alpha3: "GMB",
		name: "Gambia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Georgia_(country)",
		alpha3: "GEO",
		name: "Georgia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Germany",
		alpha3: "DEU",
		name: "Germany",
		file_url: "//upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Ghana",
		alpha3: "GHA",
		name: "Ghana",
		file_url: "//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Gibraltar",
		alpha3: "GIB",
		name: "Gibraltar",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Greece",
		alpha3: "GRC",
		name: "Greece",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Greenland",
		alpha3: "GRL",
		name: "Greenland",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Grenada",
		alpha3: "GRD",
		name: "Grenada",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Guam",
		alpha3: "GUM",
		name: "Guam",
		file_url: "//upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Guatemala",
		alpha3: "GTM",
		name: "Guatemala",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Bailiwick_of_Guernsey",
		alpha3: "GGY",
		name: "Guernsey",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Guinea",
		alpha3: "GIN",
		name: "Guinea",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Guinea-Bissau",
		alpha3: "GNB",
		name: "Guinea-Bissau",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Guyana",
		alpha3: "GUY",
		name: "Guyana",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Haiti",
		alpha3: "HTI",
		name: "Haiti",
		file_url: "//upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Heard_Island_and_McDonald_Islands",
		alpha3: "HMD",
		name: "Heard Island and McDonald Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Vatican_City",
		alpha3: "VAT",
		name: "Vatican City",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Honduras",
		alpha3: "HND",
		name: "Honduras",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Hong_Kong",
		alpha3: "HKG",
		name: "Hong Kong",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Hungary",
		alpha3: "HUN",
		name: "Hungary",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Iceland",
		alpha3: "ISL",
		name: "Iceland",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/India",
		alpha3: "IND",
		name: "India",
		file_url: "//upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Indonesia",
		alpha3: "IDN",
		name: "Indonesia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Iran",
		alpha3: "IRN",
		name: "Iran",
		file_url: "//upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Iraq",
		alpha3: "IRQ",
		name: "Iraq",
		file_url: "//upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Republic_of_Ireland",
		alpha3: "IRL",
		name: "Ireland",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Isle_of_Man",
		alpha3: "IMN",
		name: "Isle of Man",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Italy",
		alpha3: "ITA",
		name: "Italy",
		file_url: "//upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Jamaica",
		alpha3: "JAM",
		name: "Jamaica",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Japan",
		alpha3: "JPN",
		name: "Japan",
		file_url: "//upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Jersey",
		alpha3: "JEY",
		name: "Jersey",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Jordan",
		alpha3: "JOR",
		name: "Jordan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kazakhstan",
		alpha3: "KAZ",
		name: "Kazakhstan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kenya",
		alpha3: "KEN",
		name: "Kenya",
		file_url: "//upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kiribati",
		alpha3: "KIR",
		name: "Kiribati",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/North_Korea",
		alpha3: "PRK",
		name: "North Korea",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/South_Korea",
		alpha3: "KOR",
		name: "South Korea",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kuwait",
		alpha3: "KWT",
		name: "Kuwait",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kyrgyzstan",
		alpha3: "KGZ",
		name: "Kyrgyzstan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kyrgyzstan",
		alpha3: "KGZ",
		name: "Kosovo",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1200px-Flag_of_Kosovo.svg.png?20201101140437",
		license: "Public domain",
	},
	{
		url: "/wiki/Laos",
		alpha3: "LAO",
		name: "Laos",
		file_url: "//upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Latvia",
		alpha3: "LVA",
		name: "Latvia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Lebanon",
		alpha3: "LBN",
		name: "Lebanon",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Lesotho",
		alpha3: "LSO",
		name: "Lesotho",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Liberia",
		alpha3: "LBR",
		name: "Liberia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Libya",
		alpha3: "LBY",
		name: "Libya",
		file_url: "//upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Liechtenstein",
		alpha3: "LIE",
		name: "Liechtenstein",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Lithuania",
		alpha3: "LTU",
		name: "Lithuania",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Luxembourg",
		alpha3: "LUX",
		name: "Luxembourg",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Macau",
		alpha3: "MAC",
		name: "Macao",
		file_url: "//upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Madagascar",
		alpha3: "MDG",
		name: "Madagascar",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Malawi",
		alpha3: "MWI",
		name: "Malawi",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Malaysia",
		alpha3: "MYS",
		name: "Malaysia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Maldives",
		alpha3: "MDV",
		name: "Maldives",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Mali",
		alpha3: "MLI",
		name: "Mali",
		file_url: "//upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Malta",
		alpha3: "MLT",
		name: "Malta",
		file_url: "//upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Marshall_Islands",
		alpha3: "MHL",
		name: "Marshall Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Mauritania",
		alpha3: "MRT",
		name: "Mauritania",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Mauritius",
		alpha3: "MUS",
		name: "Mauritius",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Mexico",
		alpha3: "MEX",
		name: "Mexico",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Federated_States_of_Micronesia",
		alpha3: "FSM",
		name: "Micronesia (Federated States of)",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Moldova",
		alpha3: "MDA",
		name: "Moldova",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Monaco",
		alpha3: "MCO",
		name: "Monaco",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Mongolia",
		alpha3: "MNG",
		name: "Mongolia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Montenegro",
		alpha3: "MNE",
		name: "Montenegro",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Montserrat",
		alpha3: "MSR",
		name: "Montserrat",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Morocco",
		alpha3: "MAR",
		name: "Morocco",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Mozambique",
		alpha3: "MOZ",
		name: "Mozambique",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Myanmar",
		alpha3: "MMR",
		name: "Myanmar",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Namibia",
		alpha3: "NAM",
		name: "Namibia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Nauru",
		alpha3: "NRU",
		name: "Nauru",
		file_url: "//upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Nepal",
		alpha3: "NPL",
		name: "Nepal",
		file_url: "//upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Kingdom_of_the_Netherlands",
		alpha3: "NLD",
		name: "Netherlands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/New_Caledonia",
		alpha3: "NCL",
		name: "New Caledonia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/0c/Drapeau_de_Nouvelle-Cal%C3%A9donie.png",
		license: "Creative Commons Attribution-Share Alike 4.0 International",
	},
	{
		url: "/wiki/New_Zealand",
		alpha3: "NZL",
		name: "New Zealand",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Nicaragua",
		alpha3: "NIC",
		name: "Nicaragua",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Niger",
		alpha3: "NER",
		name: "Niger",
		file_url: "//upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Nigeria",
		alpha3: "NGA",
		name: "Nigeria",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Niue",
		alpha3: "NIU",
		name: "Niue",
		file_url: "//upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Norfolk_Island",
		alpha3: "NFK",
		name: "Norfolk Island",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/North_Macedonia",
		alpha3: "MKD",
		name: "North Macedonia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Northern_Mariana_Islands",
		alpha3: "MNP",
		name: "Northern Mariana Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Norway",
		alpha3: "NOR",
		name: "Norway",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Oman",
		alpha3: "OMN",
		name: "Oman",
		file_url: "//upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Pakistan",
		alpha3: "PAK",
		name: "Pakistan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Palau",
		alpha3: "PLW",
		name: "Palau",
		file_url: "//upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/State_of_Palestine",
		alpha3: "PSE",
		name: "Palestine",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Panama",
		alpha3: "PAN",
		name: "Panama",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Papua_New_Guinea",
		alpha3: "PNG",
		name: "Papua New Guinea",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Paraguay",
		alpha3: "PRY",
		name: "Paraguay",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Peru",
		alpha3: "PER",
		name: "Peru",
		file_url: "//upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Philippines",
		alpha3: "PHL",
		name: "Philippines",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Pitcairn_Islands",
		alpha3: "PCN",
		name: "Pitcairn",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Poland",
		alpha3: "POL",
		name: "Poland",
		file_url: "//upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Portugal",
		alpha3: "PRT",
		name: "Portugal",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Puerto_Rico",
		alpha3: "PRI",
		name: "Puerto Rico",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Qatar",
		alpha3: "QAT",
		name: "Qatar",
		file_url: "//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Romania",
		alpha3: "ROU",
		name: "Romania",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Russia",
		alpha3: "RUS",
		name: "Russia",
		file_url: "//upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Rwanda",
		alpha3: "RWA",
		name: "Rwanda",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Saint_Barth%C3%A9lemy",
		alpha3: "BLM",
		name: "Saint Barth\u00e9lemy",
		file_url: "//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Saint_Helena,_Ascension_and_Tristan_da_Cunha",
		alpha3: "SHN",
		name: "Saint Helena - Ascension and Tristan da Cunha",
		file_url:
			"//upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Saint_Kitts_and_Nevis",
		alpha3: "KNA",
		name: "Saint Kitts and Nevis",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Saint_Lucia",
		alpha3: "LCA",
		name: "Saint Lucia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Collectivity_of_Saint_Martin",
		alpha3: "MAF",
		name: "Saint Martin (French part)",
		file_url: "//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Saint_Vincent_and_the_Grenadines",
		alpha3: "VCT",
		name: "Saint Vincent and the Grenadines",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Samoa",
		alpha3: "WSM",
		name: "Samoa",
		file_url: "//upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/San_Marino",
		alpha3: "SMR",
		name: "San Marino",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe",
		alpha3: "STP",
		name: "Sao Tome and Principe",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/1200px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png?20230609065126",
		license: "Public domain",
	},
	{
		url: "/wiki/Senegal",
		alpha3: "SEN",
		name: "Senegal",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Serbia",
		alpha3: "SRB",
		name: "Serbia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Seychelles",
		alpha3: "SYC",
		name: "Seychelles",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Sierra_Leone",
		alpha3: "SLE",
		name: "Sierra Leone",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Singapore",
		alpha3: "SGP",
		name: "Singapore",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Sint_Maarten",
		alpha3: "SXM",
		name: "Sint Maarten (Dutch part)",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Slovakia",
		alpha3: "SVK",
		name: "Slovakia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Slovenia",
		alpha3: "SVN",
		name: "Slovenia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Solomon_Islands",
		alpha3: "SLB",
		name: "Solomon Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Somalia",
		alpha3: "SOM",
		name: "Somalia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/South_Africa",
		alpha3: "ZAF",
		name: "South Africa",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/South_Georgia_and_the_South_Sandwich_Islands",
		alpha3: "SGS",
		name: "South Georgia and the South Sandwich Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/South_Sudan",
		alpha3: "SSD",
		name: "South Sudan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Spain",
		alpha3: "ESP",
		name: "Spain",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Sri_Lanka",
		alpha3: "LKA",
		name: "Sri Lanka",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Sudan",
		alpha3: "SDN",
		name: "Sudan",
		file_url: "//upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Suriname",
		alpha3: "SUR",
		name: "Suriname",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Svalbard_and_Jan_Mayen",
		alpha3: "SJM",
		name: "Svalbard and Jan Mayen",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Sweden",
		alpha3: "SWE",
		name: "Sweden",
		file_url: "//upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Switzerland",
		alpha3: "CHE",
		name: "Switzerland",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Syria",
		alpha3: "SYR",
		name: "Syria",
		file_url: "//upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Tajikistan",
		alpha3: "TJK",
		name: "Tajikistan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Tanzania",
		alpha3: "TZA",
		name: "Tanzania",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Thailand",
		alpha3: "THA",
		name: "Thailand",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/East_Timor",
		alpha3: "TLS",
		name: "East Timor",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Togo",
		alpha3: "TGO",
		name: "Togo",
		file_url: "//upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Tokelau",
		alpha3: "TKL",
		name: "Tokelau",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Tonga",
		alpha3: "TON",
		name: "Tonga",
		file_url: "//upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Trinidad_and_Tobago",
		alpha3: "TTO",
		name: "Trinidad and Tobago",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Tunisia",
		alpha3: "TUN",
		name: "Tunisia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Turkey",
		alpha3: "TUR",
		name: "Turkey",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Turkmenistan",
		alpha3: "TKM",
		name: "Turkmenistan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Turks_and_Caicos_Islands",
		alpha3: "TCA",
		name: "Turks and Caicos Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Tuvalu",
		alpha3: "TUV",
		name: "Tuvalu",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Uganda",
		alpha3: "UGA",
		name: "Uganda",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Ukraine",
		alpha3: "UKR",
		name: "Ukraine",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/United_Arab_Emirates",
		alpha3: "ARE",
		name: "United Arab Emirates",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/United_Kingdom",
		alpha3: "GBR",
		name: "United Kingdom",
		file_url:
			"//upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/United_States",
		alpha3: "USA",
		name: "United States of America",
		file_url:
			"//upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/United_States_Minor_Outlying_Islands",
		alpha3: "UMI",
		name: "United a Minor Outlying Islands",
		file_url:
			"//upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Uruguay",
		alpha3: "URY",
		name: "Uruguay",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Uzbekistan",
		alpha3: "UZB",
		name: "Uzbekistan",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Vanuatu",
		alpha3: "VUT",
		name: "Vanuatu",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Venezuela",
		alpha3: "VEN",
		name: "Venezuela",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Vietnam",
		alpha3: "VNM",
		name: "Vietnam",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/British_Virgin_Islands",
		alpha3: "VGB",
		name: "Virgin Islands (British)",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/United_States_Virgin_Islands",
		alpha3: "VIR",
		name: "Virgin Islands (U.S.)",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Wallis_and_Futuna",
		alpha3: "WLF",
		name: "Wallis and Futuna",
		file_url: "//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Yemen",
		alpha3: "YEM",
		name: "Yemen",
		file_url: "//upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Zambia",
		alpha3: "ZMB",
		name: "Zambia",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
		license: "Public domain",
	},
	{
		url: "/wiki/Zimbabwe",
		alpha3: "ZWE",
		name: "Zimbabwe",
		file_url:
			"//upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
		license: "Public domain",
	},
];

export function getTodaysCountry(date) {
	let todaysCountry = "";

	for (let i = 0; i < countries.length; i++) {
		if (countries[i].date === date) {
			todaysCountry = countries[i];
		}
	}
	let flag = "";
	for (let i = 0; i < flags.length; i++) {
		if (flags[i].name === todaysCountry.name) {
			flag = flags[i].file_url;
		}
	}
	let countryObj = {
		name: todaysCountry.name,
		ContinentName: todaysCountry.ContinentName,
		date: todaysCountry.date,
		flag: flag,
	};
	return countryObj;
}

export function genCountries() {
	let newCountries = [];
	var rand = shuffle(countries);

	for (let i = 0; i < rand.length; i++) {
		newCountries.push({
			name: rand[i].name,
			ContinentName: rand[i].ContinentName,
			date: theCurrDate(new Date("2024-04-29"), i),
		});
	}
}

function shuffle(array) {
	var i = array.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));

		// swap randomly chosen element with current element
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function theCurrDate(date, i) {
	var tomorrow = date;
	tomorrow.setDate(tomorrow.getDate() + i);
	return formatDate(tomorrow);
}

function formatDate(date) {
	var d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
}

export default countries;
