const ListItems = (props) => {
	const items = props.items.map((items) => (
		<Item key={items.id} name={items.name} active={active} />
	));
	return (
		<div className='list'>
			<h1>Twoje zamówienie:</h1>
			<ul>{items}</ul>
		</div>
	);
};
