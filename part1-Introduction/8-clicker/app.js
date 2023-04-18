class Counter extends React.Component {
	state = {
		result: 0,
		allClicks: 0,
	};
	handleClickUp = () => {
		this.setState((prevState) => {
			return {
				result: prevState.result + 1,
				allClicks: prevState.allClicks + 1,
			};
		});
	};
	handleClickDown = () => {
		this.setState((prevState) => {
			return {
				result: prevState.result - 1,
				allClicks: prevState.allClicks + 1,
			};
		});
	};
	handleClickReset = () => {
		this.setState(() => {
			return {
				result: 0,
			};
		});
	};

	render() {
		// const { result } = this.state;
		return (
			<>
				<button onClick={this.handleClickUp}>+1</button>
				<button onClick={this.handleClickDown}>-1</button>
				<button onClick={this.handleClickReset}>reset wyniku</button>
				<h1>Liczba kliknięć: {this.state.allClicks}</h1>
				<h2>Wynik: {this.state.result}</h2>
			</>
		);
	}
}

const startValue = 0;
ReactDOM.render(
	<Counter result={startValue} />,
	document.getElementById("root")
);
