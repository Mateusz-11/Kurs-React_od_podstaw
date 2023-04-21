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
		// debugger;
		if (type === "addition") {
			this.setState((prevState) => ({
				result: prevState.result + number,
				allClicks: prevState.allClicks + 1,
			}));
		} else if (type === "substraction") {
			this.setState((prevState) => ({
				result: prevState.result - number,
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
					<MathButton
						name='-1'
						number={1}
						type='substraction'
						click={this.handleClicks}
					/>
					<MathButton
						name='+1'
						number={1}
						type='addition'
						click={this.handleClicks}
					/>
					<MathButton
						name='+10'
						number={10}
						type='addition'
						click={this.handleClicks}
					/>
					<MathButton name='reset' type='reset' click={this.handleClicks} />

					<ResultPanel
						count={this.state.allClicks}
						result={this.state.result}
					/>
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

const MathButton = (props) => {
	return (
		<button onClick={() => props.click(props.type, props.number)}>
			{props.name}
		</button>
	);
};

const ResultPanel = (props) => {
	return (
		<>
			<h1>
				Liczba kliknięć: {props.count}{" "}
				{props.count > 10 ? "-> Większe od 10" : null}
			</h1>
			<h2>Wynik: {props.result}</h2>
		</>
	);
};

const startValue = 0;
ReactDOM.render(
	<Counter result={startValue} />,
	document.getElementById("root")
);
