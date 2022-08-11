type GreetProps = {
	name: string;
	messageCount: number;
	isLoggenIn: boolean;
};

const Greet = (props: GreetProps) => {
	return (
		<div>
			{props.isLoggenIn ? (
				<h2>
					Hello {props.name}! you have {props.messageCount} messages
				</h2>
			) : (
				<h2>Welcome Guest</h2>
			)}
		</div>
	);
};

export default Greet;
