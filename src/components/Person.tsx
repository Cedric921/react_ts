type personProps = {
	name: {
		first: string;
		last: string;
	};
};

const Person = (props: personProps) => {
	return (
		<div>
			{props.name.first} {props.name.last}
		</div>
	);
};

export default Person;
