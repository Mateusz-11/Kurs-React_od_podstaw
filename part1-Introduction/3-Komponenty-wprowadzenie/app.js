// komponent funkcyjny, bezstanowy

const Header = () => {
	return <h1>Witaj na stronie</h1>;
};

// komponent klasowy, stanowy

class Blog extends React.Component {
	// state = {
	// 	number: 0,
	// };

	render() {
		return (
			<section>
				<h2>Artykuł</h2>
				<p>lorem ipsum</p>
				{/* <h2>Artykuł numer: {this.state.number}</h2> */}
			</section>
		);
	}
}

const App = () => {
	return (
		<>
			<Header />
			<Blog />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
