class Counter extends React.Component {
	state = {
		result: 0,
		allClicks: 0,
	};
	//  v1 - 3 functions
	// handleClickUp = () => {
	// 	this.setState((prevState) => {
	// 		return {
	// 			result: prevState.result + 1,
	// 			allClicks: prevState.allClicks + 1,
	// 		};
	// 	});
	// };
	// handleClickDown = () => {
	// 	this.setState((prevState) => {
	// 		return {
	// 			result: prevState.result - 1,
	// 			allClicks: prevState.allClicks + 1,
	// 		};
	// 	});
	// };
	// handleClickReset = () => {
	// 	this.setState(() => {
	// 		return {
	// 			result: 0,
	// 		};
	// 	});
	// };
	//  v2 - 1 function
	handleClicks = (type, number) => {
		if (type === "addition") {
			this.setState((prevState) => ({
				result: prevState.result + 1,
				allClicks: prevState.allClicks + 1,
			}));
		} else if (type === "substraction") {
			this.setState((prevState) => ({
				result: prevState.result - 1,
				allClicks: prevState.allClicks + 1,
			}));
		} else if (type === "reset") {
			this.setState((prevState) => ({
				result: 0,
				allClicks: prevState.allClicks + 1,
			}));
		}
	};

	render() {
		// const { result } = this.state;
		return (
			<>
				<div>
					<button onClick={this.handleClicks.bind(this, "addition", 1)}>
						+1
					</button>
					<button onClick={() => this.handleClicks("substraction", 1)}>
						-1
					</button>
					<button onClick={() => this.handleClicks("reset")}>
						reset wyniku
					</button>
					<h1>Liczba kliknięć: {this.state.allClicks}</h1>
					<h2>Wynik: {this.state.result}</h2>
				</div>
				<div>
					<button onClick={this.handleClickUp}>+1</button>
					<button onClick={this.handleClickDown}>-1</button>
					<button onClick={this.handleClickReset}>reset wyniku</button>
					<h1>Liczba kliknięć: {this.state.allClicks}</h1>
					<h2>Wynik: {this.state.result}</h2>
				</div>
			</>
		);
	}
}

const startValue = 0;
ReactDOM.render(
	<Counter result={startValue} />,
	document.getElementById("root")
);
