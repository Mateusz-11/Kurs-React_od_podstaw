const data = {
	users: [
		{
			id: 1,
			age: 29,
			name: "Arek",
			sex: "male",
		},
		{
			id: 2,
			age: 49,
			name: "Marta",
			sex: "female",
		},
		{
			id: 3,
			age: 19,
			name: "Stasia",
			sex: "female",
		},
		{
			id: 4,
			age: 24,
			name: "Karol",
			sex: "male",
		},
	],
};

const Item = ({ user }) => (
	<div>
		<h1>Użytkownik: {user.name}</h1>
		<h2>Ma: {user.age}</h2>
	</div>
);

class ListItems extends React.Component {
	//   state = {
	//     select: "all",
	//   }

	render() {
		const users = this.props.data.users;
		const Items = users.map((user) => <Item key={user.id} user={user} />);
		return <ul>{Items}</ul>;
	}
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
