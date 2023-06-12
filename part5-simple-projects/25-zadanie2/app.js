// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

class List extends React.Component {
	state = {
		people: [
			{ id: 1, name: "Jan K." },
			{ id: 2, name: "Piotr C." },
			{ id: 3, name: "Marta K." },
			{ id: 4, name: "Tomek O." },
		],
	};
	render() {
		return <div>apka</div>;
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
