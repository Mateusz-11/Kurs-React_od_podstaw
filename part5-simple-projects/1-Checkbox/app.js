const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
const NegativeMessage = () => {
	return <p>Nie możesz obejrzeć filmu.</p>;
};

class CheckboxAgeConfirmation extends React.Component {
	state = {
		isChecked: true,
	};
	handleCheckboxChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};
	render() {
		console.log("isConfirmed");
		return (
			<>
				<h1>Kup bilet na horror roku!</h1>
				<input
					type='checkbox'
					id='age'
					onChange={this.handleCheckboxChange}
					checked={this.state.isChecked}
				/>
				<label htmlFor='age'>Mam co najmniej 16 lat</label>
				{true ? <PositiveMessage /> : <NegativeMessage />}
			</>
		);
	}
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
