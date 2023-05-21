class ListItems extends React.Component {
	state = {
		items: ["jabłko", "sliwka", "gruszka"],
	};
	render() {
		return <ul></ul>;
	}
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
