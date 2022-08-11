import { NameType } from '../types/Person.type';
type namesListProps = {
	names: NameType[];
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
