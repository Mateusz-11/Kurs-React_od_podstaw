class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		text: "",
	// 	};
	// 	this.handleClick = this.handleClick.bind(this);
	// }

	state = {
		text: "->",
		btn: "uruchom",
	};

	handleClick = () => {
		const number = Math.floor(Math.random() * 10);

		// this.setState({
		// 	text: this.state.text + letter,
		// });

		this.setState((prevState) => {
			return {
				text: this.state.text + number,
			};
		});
	};

	render() {
		const btnName = "Stwórz liczbę";
		return (
			<React.Fragment>
				<button onClick={this.handleClick}>
					Dodaj cyfrę - {this.props.btnTitle} - {btnName} - {this.state.btn}
				</button>
				<PanelResult text={this.state.text} />
			</React.Fragment>
		);
	}
}

const PanelResult = (props) => {
	return <h1>{props.text}</h1>;
};

ReactDOM.render(
	<App btnTitle='dodaj cyfrę' />,
	document.getElementById("root")
);
