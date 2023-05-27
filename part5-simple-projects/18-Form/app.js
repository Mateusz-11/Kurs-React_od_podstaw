class Form extends React.Component {
	state = {
		city: "Londyn",
		text: "",
		isLoved: true,
		number: "2",
	};

	render() {
		return (
			<div>
				<label>
					Podaj miasto
					<input v />
				</label>
				<br />
				<label>
					Napisz coś o tym mieście
					<textarea></textarea>
				</label>
				<br />
				<label>
					Czy lubisz to miasto?
					<input />
				</label>
				<br />
			</div>
		);
	}
}

ReactDOM.render(<Form />, document.getElementById("root"));
