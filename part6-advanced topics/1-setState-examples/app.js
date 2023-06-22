class Clicker extends React.Component {
	state = {
		number1: 0,
		number2: 0,
		number3: 0,
	};

	handleClick1 = () => {};

	handleClick2 = () => {};

	handleClick3 = () => {};

	render() {
		// console.log(this.state.number2 + "w render");
		return (
			<div>
				<button onClick={this.handleClick1}>Podbij o 1</button>
				<h1>{this.state.number1}</h1>
				<button onClick={this.handleClick2}>Podbij o 3</button>{" "}
				<button onClick={this.handleClick1}>Podbij o 1</button>
				<h1>{this.state.number1}</h1>
				<button onClick={this.handleClick2}>Podbij o 3</button>
				<h1>{this.state.number2}</h1>
				<button onClick={this.handleClick3}>Podbij o 3</button>
				<h1>{this.state.number3}</h1>
			</div>
		);
	}
}

ReactDOM.render(<Clicker />, document.getElementById("root"));
