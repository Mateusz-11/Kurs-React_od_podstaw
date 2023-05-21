class ListItems extends React.Component {
	state = {
		items: ["jabłko", "sliwka", "gruszka"],
	};
	render() {
		return (
			<ul>
				{this.state.items.map((prod, id) => (
					<li key={id}>{prod}</li>
				))}
			</ul>
		);
	}
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
