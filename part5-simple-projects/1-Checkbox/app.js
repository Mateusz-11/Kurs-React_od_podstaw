// const { Button } = require("bootstrap");

const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
const NegativeMessage = () => {
	return <p>Nie możesz obejrzeć filmu.</p>;
};

class TicketShop extends React.Component {
	state = {
		isChecked: true,
		isFormSubmitted: false,
	};
	handleCheckboxChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};
	displayMessage = () => {
		if (this.state.isFormSubmitted) {
			if (this.state.isChecked) {
				return <PositiveMessage />;
			} else {
				return <NegativeMessage />;
			}
		} else {
			return null;
		}
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		// console.log("isConfirmed");
		return (
			<>
				<h1>Kup bilet na horror roku!</h1>
				<form onSubmit={this.handleFormSubmit}>
					<input
						type='checkbox'
						id='age'
						onChange={this.handleCheckboxChange}
						checked={this.state.isChecked}
					/>{" "}
					<br />
					<label htmlFor='age'>Mam co najmniej 16 lat</label>
					<button type='submit'>Kup bilet</button>
				</form>
				{this.displayMessage()}
			</>
		);
	}
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
