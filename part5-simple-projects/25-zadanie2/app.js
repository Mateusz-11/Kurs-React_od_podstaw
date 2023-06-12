// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

const Person = (props) => {
	return (
		<>
			<li>
				<span>{props.name}</span>
			</li>
			<button onClick={() => props.delete(props.name)}>Usuń</button>
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

	// handleDelete(id) {
	// 	// console.log(this, id);
	// 	const people = [...this.state.people];
	// 	const index = people.findIndex((person) => person.id === id);
	// 	// console.log(index);
	// 	people.splice(index, 1);
	// 	// console.log(people);
	// 	this.setState({
	// 		people,
	// 	});
	// }

	handleDelete = (name) => {
		// let people = Array.from(this.state.people);
		let people = this.state.people.slice();
		people = people.filter((person) => name !== person.name);
		console.log(people);
		this.setState({
			people: people,
		});
	};

	render() {
		// const people = this.state.people.map((person) => (
		// 	<Person
		// 		key={person.id}
		// 		name={person.name}
		// 		delete={this.handleDelete.bind(this, person.id)}
		// 	/>
		// ));

		// const people = this.state.people.map((person) => (
		// 	<Person
		// 		key={person.id}
		// 		name={person.name}
		// 		delete={this.handleDelete.bind(this, person.name)}
		// 	/>
		// ));
		const people = this.state.people.map((person) => (
			<Person key={person.id} name={person.name} delete={this.handleDelete} />
		));
		return (
			<div>
				<ul>{people}</ul>
			</div>
		);
	}
}

ReactDOM.render(<List />, document.getElementById("root"));
