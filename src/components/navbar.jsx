import React, { Component } from "react";
import Game from "./game";
import logo from "./images/HangleLogo1.png";
import info from "./images/info.png";
import github from "./images/github.png";
import pie from "./images/pie.png";

class Navbar extends Component {
	state = { SUM: false, help: false };

	setSUM = () => {
		let SUM = !this.state.SUM;
		this.setState({ SUM });
	};

	setHelp = () => {
		let help = !this.state.help;
		this.setState({ help });
	};

	render() {
		return (
			<React.Fragment>
				<nav>
					<img className="logo" src={logo} alt="Hangmanle" />
					<div className="do">
						<a
							target="_blank"
							style={{ cursor: "pointer" }}
							onClick={() => this.setHelp()}
						>
							{" "}
							<img src={info} className="info" />
						</a>
						<a target="_blank" href="https://github.com/othmanali02">
							{" "}
							<img src={github} className="info" />
						</a>
						<a
							target="_blank"
							style={{ cursor: "pointer" }}
							onClick={() => this.setSUM()}
						>
							{" "}
							<img src={pie} className="info" />
						</a>
					</div>
					<hr></hr>
				</nav>
				<Game showSUM={this.state.SUM} showHelp={this.state.help} />
			</React.Fragment>
		);
	}
}

export default Navbar;
