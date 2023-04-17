class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageIsActive: false,
		};
	}
	// handleClick = () => {
	// 	this.setState((prevState) => {
	// 		if (prevState.messageIsActive === false) {
	// 			return {
	// 				messageIsActive: true,
	// 			};
	// 		} else {
	// 			return {
	// 				messageIsActive: false,
	// 			};
	// 		}
	// 	});
	// };

	handleClick = () => {
		this.setState((prevState) => ({
			messageIsActive: !prevState.messageIsActive,
		}));
	};

	render() {
		const text =
			"lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum";
		return (
			<React.Fragment>
				<button onClick={this.handleClick}>
					{this.state.messageIsActive ? "Ukryj" : "Pokaż"}
				</button>
				{this.state.messageIsActive && <p>{text}</p>}
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Message />, document.getElementById("root"));
