const Header = (props) => {
	const activeItems = props.items.filter((item) => item.active);
	const number = activeItems.length;
	return (
		<header>
			<h2>Wielkość zamówienia: {number}</h2>
			<h2>
				Do zapłaty:{" "}
				{number
					? `Masz do zapłaty  ${number * 10}`
					: "nie kupujesz to nie płacisz"}{" "}
				złotych
			</h2>
		</header>
	);
};
