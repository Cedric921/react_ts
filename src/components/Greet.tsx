type GreetProps = {
   name: string
}

const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>Hello {props.name}!</h2>
		</div>
	);
};

export default Greet;
