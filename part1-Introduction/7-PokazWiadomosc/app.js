class Message extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      
    }
	}

	render() {
		const text =
			"lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum";
		return (
			<React.Fragment>
				<button>Pokaż</button>
				<p>{text}</p>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Message />, document.getElementById("root"));
