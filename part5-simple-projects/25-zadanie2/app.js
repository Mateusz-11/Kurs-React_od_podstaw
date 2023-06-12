// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

const Person = (props) => {
	return (
		<>
			<li>
				<span>{props.name}</span>
			</li>
			<button onClick={props.delete}>Usuń</button>
		</>
	);
};

class List extends React.Component {
	state = {
		people: [
			{ id: 1, name: "Jan K." },
			{ id: 2, name: "Piotr C." },
			{ id: 3, name: "Marta K." },
			{ id: 4, name: "Tomek O." },
		],
	};

	handleDelete(id) {
		console.log(this, id);
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.people.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							delete={this.handleDelete.bind(this, person.id)}
						/>
					))}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
