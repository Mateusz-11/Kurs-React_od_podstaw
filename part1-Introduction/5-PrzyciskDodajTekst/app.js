//Funkcja strzałkowa a deklarowanie metody. Bind
//setState - przekazanie do metody obiektu i funkcji
//Definiowanie state w konstruktorze

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
				<h1>{this.state.text}</h1>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
