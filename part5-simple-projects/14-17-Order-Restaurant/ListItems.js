const ListItems = (props) => {
	const items = props.items.map((items) => (
		<Item
			key={items.id}
			id={items.id}
			name={items.name}
			active={items.active}
			changeStatus={props.changeStatus}
		/>
	));

	return (
		<div className='list'>
			<h1>Twoje zamówienie:</h1>
			<ul>{items}</ul>
		</div>
	);
};
