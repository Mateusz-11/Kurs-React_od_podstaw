class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		text: "",
	// 	};
	// 	this.handleClick = this.handleClick.bind(this);
	// }

	state = {
		text: "aa",
	};

	handleClick = () => {
		const letter = "a";

		// this.setState({
		// 	text: this.state.text + letter,
		// });

		this.setState((prevState) => {
			return {
				text: this.state.text + letter,
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<button onClick={this.handleClick}>Dodaj "A"</button>
				<PanelResult text={this.state.text} />
			</React.Fragment>
		);
	}
}

const PanelResult = (props) => {
	return <h1>{props.text}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
