import React, { Component } from "react";
import countries, { genCountries } from "./countries";
import { getTodaysCountry, getCountries } from "./countries";
import hang from "./images/HangmanBrownGame7.png";
import hang6 from "./images/HangmanBrownGame6.png";
import hang5 from "./images/HangmanBrownGame5.png";
import hang4 from "./images/HangmanBrownGame4.png";
import hang3 from "./images/HangmanBrownGame3.png";
import hang2 from "./images/HangmanBrownGame2.png";
import hang1 from "./images/HangmanBrownGame1.png";
import hang0 from "./images/HangmanBrownGame0.png";
import scramble from "./images/Screenshot 2023-11-11 130653.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import duck from "./images/duck.png";
import fail from "./images/letterFail.png";
import tries from "./images/try.png";

class Game extends Component {
	state = {
		letters: [
			{ char: "Q", status: false },
			{ char: "W", status: false },
			{ char: "E", status: false },
			{ char: "R", status: false },
			{ char: "T", status: false },
			{ char: "Y", status: false },
			{ char: "U", status: false },
			{ char: "I", status: false },
			{ char: "O", status: false },
			{ char: "P", status: false },
			{ char: "A", status: false },
			{ char: "S", status: false },
			{ char: "D", status: false },
			{ char: "F", status: false },
			{ char: "G", status: false },
			{ char: "H", status: false },
			{ char: "J", status: false },
			{ char: "K", status: false },
			{ char: "L", status: false },
			{ char: "Z", status: false },
			{ char: "X", status: false },
			{ char: "C", status: false },
			{ char: "V", status: false },
			{ char: "B", status: false },
			{ char: "N", status: false },
			{ char: "M", status: false },
		],
		stage0: true,
		stage1: false,
		stage2: false,
		stage3: false,
		stage4: false,
		stage5: false,
		stage6: false,
		stage7: false,
		SUM: false,
		showSUM: false,
		showHelp: false,
		noti: false,
		count: 0,
		answer: "",
	};

	componentDidMount = () => {
		window.addEventListener("keydown", this.handleKeyPress);

		if (
			!localStorage.getItem("Country") ||
			!localStorage.getItem("Country").includes("{") ||
			(localStorage.getItem("Country") &&
				JSON.parse(localStorage.getItem("Country")).date !==
					this.formatDate(new Date()))
		) {
			if (localStorage.getItem("Country")) {
				localStorage.removeItem("Letters");
				localStorage.removeItem("Answer");
				localStorage.removeItem("Country");
			}

			let todaysCountry = getTodaysCountry(this.formatDate(new Date()));

			let countryData = {
				name: todaysCountry.name,
				continent: todaysCountry.ContinentName,
				date: todaysCountry.date,
				flag: todaysCountry.flag,
			};

			let showHelp = false;

			if (!localStorage.getItem("Games")) {
				showHelp = true;
			}
			this.setState({ showHelp });
			localStorage.setItem("Country", JSON.stringify(countryData));

			this.genCountrySpace();
		}
		if (this.state.answer === "" && localStorage.getItem("Country")) {
			this.genCountrySpace();
			if (localStorage.getItem("Letters")) {
				this.genAnswer();
			}
		}
	};

	formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	};

	componentDidUpdate(previousProps, previousState) {
		if (previousProps.showHelp !== this.props.showHelp) {
			let showHelp = true;
			this.setState({ showHelp });
		}
		if (previousProps.showSUM !== this.props.showSUM) {
			let SUM = false;
			let showSUM = false;
			if (!this.state.answer.includes("_")) {
				SUM = true;
				showSUM = true;
				this.setState({ SUM, showSUM });
			}
			if (this.state.SUM) {
				let showSUM = this.props.showSUM;
				this.setState({ showSUM });
			}
		}
	}

	genAnswer = () => {
		let letters = JSON.parse(localStorage.getItem("Letters"));
		let count = 0;
		for (let i = 0; i < letters.length; i++) {
			if (letters[i].status) {
				count++;
			}
		}
		let stage0,
			stage1,
			stage2,
			stage3,
			stage4,
			stage5,
			stage6,
			stage7,
			showSUM,
			SUM = false;
		if (count === 0) {
			stage0 = true;
		} else if (count === 1) {
			stage1 = true;
		} else if (count === 2) {
			stage2 = true;
		} else if (count === 3) {
			stage3 = true;
		} else if (count === 4) {
			stage4 = true;
		} else if (count === 5) {
			stage5 = true;
		} else if (count === 6) {
			stage6 = true;
		} else if (count === 7) {
			stage7 = true;
			SUM = true;
			showSUM = true;
		}

		if (!localStorage.getItem("Answer").includes("_")) {
			SUM = true;
			showSUM = true;
		}

		this.setState({
			letters,
			count,
			stage0,
			stage1,
			stage2,
			stage3,
			stage4,
			stage5,
			stage6,
			stage7,
			SUM,
			showSUM,
		});
	};

	genCountrySpace = () => {
		let answer = "";
		if (!localStorage.getItem("Answer")) {
			let country = JSON.parse(localStorage.getItem("Country")).name;
			for (let i = 0; i < country.length; i++) {
				if (country[i] === " ") {
					answer += " ";
					continue;
				}
				if (country[i] === "-") {
					answer += "-";
					continue;
				}
				answer += "_";
			}
		} else {
			answer = localStorage.getItem("Answer");
		}

		this.setState({ answer });
	};

	handleKeyPress = (event) => {
		let answer = this.state.answer;
		if (answer.includes("_")) {
			this.letterClick(event.key.toUpperCase());
		}
	};

	letterClick = (letter) => {
		let country1 = JSON.parse(localStorage.getItem("Country")).name;
		let country = country1.toLowerCase();
		let letters = this.state.letters;
		let count = this.state.count;
		let answer = this.state.answer;

		if (country.includes(letter.toLowerCase())) {
			//show letter on the answer.
			console.log("Letter Exists!");
			for (let i = 0; i < country.length; i++) {
				if (country.charAt(i) === letter.toLowerCase()) {
					answer =
						answer.substring(0, i) +
						letter +
						answer.substring(i + letter.length);
				}
			}
		} else {
			//draw an extra step, and cross off that letter.
			console.log("Letter Does Not Exist!");

			for (let i = 0; i < letters.length; i++) {
				if (letters[i].char === letter) {
					letters[i].status = true;
					count++;
				}
			}
		}

		// if(!SUM )

		let stage0,
			stage1,
			stage2,
			stage3,
			stage4,
			stage5,
			stage6,
			stage7,
			showSUM,
			SUM = false;
		if (count === 0) {
			stage0 = true;
		} else if (count === 1) {
			stage1 = true;
		} else if (count === 2) {
			stage2 = true;
		} else if (count === 3) {
			stage3 = true;
		} else if (count === 4) {
			stage4 = true;
		} else if (count === 5) {
			stage5 = true;
		} else if (count === 6) {
			stage6 = true;
		} else if (count === 7) {
			stage7 = true;
			SUM = true;
			showSUM = true;

			let games = [];
			if (localStorage.getItem("Games"))
				games = JSON.parse(localStorage.getItem("Games"));

			let countryDate = JSON.parse(localStorage.getItem("Country")).date;
			let cheater = false;

			for (let i = 0; i < games.length; i++) {
				if (countryDate === JSON.parse(games[i].Country).date) {
					cheater = true;
				}
			}

			if (!cheater) {
				games.push({
					mistakeCount: count,
					Country: localStorage.getItem("Country"),
				});
			}

			this.getDate();

			localStorage.setItem("Games", JSON.stringify(games));
		}

		if (!answer.includes("_")) {
			SUM = true;
			showSUM = true;

			let games = [];
			if (localStorage.getItem("Games"))
				games = JSON.parse(localStorage.getItem("Games"));

			let countryDate = JSON.parse(localStorage.getItem("Country")).date;
			let cheater = false;

			for (let i = 0; i < games.length; i++) {
				if (countryDate === JSON.parse(games[i].Country).date) {
					cheater = true;
				}
			}

			if (!cheater) {
				games.push({
					mistakeCount: count,
					Country: localStorage.getItem("Country"),
				});
			}

			this.getDate();
			localStorage.setItem("Games", JSON.stringify(games));
		}

		if (count < 8) {
			localStorage.setItem("Letters", JSON.stringify(letters));
			localStorage.setItem("Answer", answer);
			this.setState({
				letters,
				count,
				stage0,
				stage1,
				stage2,
				stage3,
				stage4,
				stage5,
				stage6,
				stage7,
				SUM,
				answer,
				showSUM,
			});
		}
	};

	clear = () => {
		localStorage.removeItem("Letters");
		localStorage.removeItem("Answer");
		localStorage.removeItem("Country");

		this.componentDidMount();
		window.location = "/";
	};

	getCountry = () => {
		let country = JSON.parse(localStorage.getItem("Country")).name;
		return country;
	};

	getFlag = () => {
		let country = JSON.parse(localStorage.getItem("Country")).flag;
		return country;
	};

	removeSum = () => {
		let showSUM = false;
		this.setState({ showSUM });
	};

	calcAllTimeAverage = () => {
		//iterate through the array of locally stored games.
		//modify the componentDidMount function to start an array of games for the user stored on their local Storage
		//get the total number of mistakes for the user

		let games = [];
		if (localStorage.getItem("Games"))
			games = JSON.parse(localStorage.getItem("Games"));

		let sum = 0;
		for (let i = 0; i < games.length; i++) {
			sum += games[i].mistakeCount;
		}
		let avg = Math.round(sum / games.length);

		return avg;
	};

	calcWeekAverage = () => {
		//iterate through the array of locally stored games.
		//modify the componentDidMount function to start an array of games for the user stored on their local Storage
		//get the total number of mistakes for the user

		let games = [];
		if (localStorage.getItem("Games"))
			games = JSON.parse(localStorage.getItem("Games"));

		let sum = 0;
		if (games.length < 7) {
			for (let i = 0; i < games.length; i++) {
				sum += games[i].mistakeCount;
			}
		} else {
			for (let i = 0; i < 7; i++) {
				sum += games[i].mistakeCount;
			}
		}

		let avg = Math.round(sum / games.length);

		return avg;
	};

	calcGamesWon = () => {
		//iterate through the array of locally stored games.
		//modify the componentDidMount function to start an array of games for the user stored on their local Storage
		//get the total number games that the user finished with a guess count less than 7

		let games = [];
		if (localStorage.getItem("Games"))
			games = JSON.parse(localStorage.getItem("Games"));

		let gamesWon = 0;
		for (let i = 0; i < games.length; i++) {
			if (games[i].mistakeCount < 7) {
				gamesWon++;
			}
		}

		return gamesWon;
	};

	calcWinStreak = () => {
		//iterate through the array of locally stored games.
		//modify the componentDidMount function to start an array of games for the user stored on their local Storage
		//get the total number games that the user finished with a guess count less than 7

		let games = [];
		if (localStorage.getItem("Games"))
			games = JSON.parse(localStorage.getItem("Games"));

		return games.length;
	};

	revealContinent = () => {
		let continent = JSON.parse(localStorage.getItem("Country")).continent;
		return continent;
	};

	removeHelp = () => {
		let showHelp = !this.state.showHelp;
		this.setState({ showHelp });
	};

	createShare = () => {
		//create a set of emojis that represent the state of the hangman when the game is over
		//make it look sexc cuz yara wants that

		//  +---+
		//  |   |
		//  O   |
		// /|\  |
		// /    |
		// 	    |

		let games = [];
		if (localStorage.getItem("Games"))
			games = JSON.parse(localStorage.getItem("Games"));

		let today = JSON.parse(localStorage.getItem("Country")).date;

		let string = "Hangle " + today + " ";

		if (this.state.stage0) {
			string += " => 0 Mistakes";

			string += `
			____ 
			|/   |
			|   
			|    
			|    
			|    
			|
			|_____`;
		} else if (this.state.stage1) {
			string += " => 1️⃣ Mistake";
			string += `
			____
			|/   |
			|    O 
			|    
			|    
			|    
			|
			|_____`;
		} else if (this.state.stage2) {
			string += " => 2️⃣ Mistakes";

			string += `
			____
			|/   |
			|    O
			|     |
			|     |    
			|    
			|
			|_____`;
		} else if (this.state.stage3) {
			string += " => 3️⃣ Mistakes";

			string += `
			____
			|/   |
			|    O 
			|     |
			|     |
			|    /
			|
			|_____`;
		} else if (this.state.stage4) {
			string += " => 4️⃣ Mistakes";

			string += `
			____
			|/    |
			|     O 
			|      |
			|      |
			|    / \\
			|
			|_____`;
		} else if (this.state.stage5) {
			string += " => 5️⃣ Mistakes";

			string += `
			____
			|/    |
			|     O
			|    /|
			|      |
			|    / \\ 
			|
			|_____`;
		} else if (this.state.stage6) {
			string += " => 6️⃣ Mistakes";

			string += `
			____ 
			|/    |
			|     O
			|    /|\\
			|      |
			|    / \\
			|
			|_____`;
		} else if (this.state.stage7) {
			string += " => 7️⃣ Mistakes";

			string += `
			____ 
			|/   |
			|  (x_x)
			|    /|\\
			|      |
			|    / \\ 
			|
			|_____`;
		}
		string += "\n https://hangle-geo.com";

		navigator.clipboard.writeText(string);
		alert("Copied to Clipboard!");
	};

	getDate = () => {
		let date = JSON.parse(localStorage.getItem("Country")).date;
		let noti = false;

		if (
			date == "2023-04-23" ||
			date == "2023-04-24" ||
			date == "2023-04-25" ||
			date == "2023-04-26" ||
			date == "2023-04-27"
		) {
			noti = true;
		} else {
			noti = false;
		}

		this.setState({ noti });
	};

	showToastMessage = () => {
		toast("Do you like Hangle? Share it with your friends! :)", {
			position: toast.POSITION.TOP_CENTER,
			className: "toast-message",
			persist: true,
			toastId: 2,
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="gameContainer">
					{this.state.showHelp && (
						<div className="help">
							<button className="remove" onClick={this.removeHelp}>
								{/* <img src={duck} alt="X" className="duck" /> */}x
							</button>{" "}
							<h2>How to play Hangle</h2>
							<p>
								<span className="hangle">Hangle</span> is a daily game of
								Hangman for countries. Each day there will be a different
								country chosen randomly from a database of over 200 countries.
								You have to guess which country it is with the least number of
								mistakes. Every incorrect letter you try will turn red, and the
								stick-man drawing will have another part drawn. You will have{" "}
								<span className="trys">Seven trys</span> before the drawing is
								complete, and the stick-man is hanged.
							</p>
							<p className="exp">For example:</p>
							<div className="mistakes">
								<figure>
									<h5>(1)</h5>
									<img src={fail} alt="Fail" className="mistakeExp" />
									<figcaption>Trying the letter F.</figcaption>
								</figure>
								<figure>
									<h5>(2)</h5>
									<img src={hang1} alt="Stage1" className="mistakeExp" />{" "}
									<figcaption>
										"F" is not part of the country's name, so the head of the
										stickman is drawn.
									</figcaption>
								</figure>
							</div>
							<div className="mistakes">
								<figure>
									<h5>(3)</h5>
									<img src={tries} alt="Fail" className="mistakeExp" />
									<figcaption>Trying the letter A.</figcaption>
								</figure>
								<figure>
									<h5>(4)</h5>
									<img src={hang1} alt="Stage1" className="mistakeExp" />{" "}
									<figcaption>
										"A" is part of the country's name, so the letter is placed
										at the index its in, and the figure remains the same
									</figcaption>
								</figure>
							</div>
						</div>
					)}

					{this.state.showSUM && (
						<React.Fragment>
							{this.state.noti && (
								<div>
									{this.showToastMessage()} <ToastContainer />
								</div>
							)}
							<div className="summary">
								<button className="remove" onClick={this.removeSum}>
									{/* <img src={duck} alt="X" className="duck" /> */}x{" "}
								</button>{" "}
								<h2>
									Today's country is<br></br>{" "}
									<span className="countryReveal">{this.getCountry()}!</span>{" "}
								</h2>
								<img src={this.getFlag()} alt="Country Flag" className="flag" />
								<table>
									<tbody>
										<tr>
											<th>Today's Mistakes</th>
											<td>{this.state.count}</td>
										</tr>
										<tr>
											<th>Average Mistakes</th>
											<td>{this.calcAllTimeAverage()}</td>
										</tr>
										<tr>
											<th>Weekly Average</th>
											<td>{this.calcWeekAverage()}</td>
										</tr>
										<tr>
											<th>Games Played</th>
											<td>{this.calcWinStreak()}</td>
										</tr>
										<tr>
											<th>Games Won</th>
											<td>{this.calcGamesWon()}</td>
										</tr>
									</tbody>
								</table>
								<h3>
									<a
										onClick={() => {
											this.createShare();
										}}
										className="twitter"
									>
										Share
									</a>
								</h3>
								<div className="backScramble">
									{" "}
									<h5 className="ad">
										Check out Scramble: The Daily Anagram Game
									</h5>
									<a
										target="_blank"
										className="scramble"
										href="https://anagram-scramble.com"
									>
										<img src={scramble} alt="Scramble" />
									</a>
								</div>
							</div>
						</React.Fragment>
					)}
					<div className="gameComponents">
						{/* <div className="hint">
						{" "}
						<h2>Country</h2>
					</div> */}
						<div className="hangman">
							{" "}
							{this.state.stage0 && (
								<React.Fragment>
									<img className="hangTest" src={hang0} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage1 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang1} alt="hangman" />
									<img className="hangTest shake" src={hang0} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage2 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang1} alt="hangman" />
									<img className="hangTest shake" src={hang2} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage3 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang2} alt="hangman" />
									<img className="hangTest shake" src={hang3} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage4 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang3} alt="hangman" />
									<img className="hangTest shake" src={hang4} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage5 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang5} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage6 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang5} alt="hangman" />
									<img className="hangTest shake" src={hang6} alt="hangman" />
								</React.Fragment>
							)}
							{this.state.stage7 && (
								<React.Fragment>
									<img className="hangTest shake" src={hang6} alt="hangman" />
									<img className="hangTest shake" src={hang} alt="hangman" />
								</React.Fragment>
							)}
						</div>
						{this.state.stage5 && (
							<span className="hint">
								The Country is in {this.revealContinent()}!
							</span>
						)}
						<div className="answer">
							{" "}
							<h1>{this.state.answer}</h1>
						</div>
						<hr></hr>
						<div className="letters">
							{" "}
							{this.state.letters.map((letter) =>
								this.state.SUM === false ? (
									!letter.status ? (
										<button
											key={letter.char}
											className="letter"
											onClick={() => this.letterClick(letter.char)}
										>
											{letter.char}
										</button>
									) : (
										<button key={letter.char} className="letter no">
											{letter.char}
										</button>
									)
								) : !letter.status ? (
									<button key={letter.char} className="letter">
										{letter.char}
									</button>
								) : (
									<button key={letter.char} className="letter no">
										{letter.char}
									</button>
								)
							)}
						</div>
						{/* <button className="tempButt" onClick={() => this.clear()}>
						GENERATE NEW COUNTRY
					</button> */}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Game;
