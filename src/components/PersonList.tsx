type namesListProps = {
	names: {
		first: string;
		last: string;
	}[];
};
const PersonList = (props: namesListProps) => {
	return (
		<div>
			{props.names.map((name) => (
				<h2 key={name.first}>
					{name.first} - {name.last}
				</h2>
			))}
		</div>
	);
};

export default PersonList;
