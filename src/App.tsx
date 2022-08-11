import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
	const personName = {
		first: 'First Name',
		last: 'Last Name',
	};

	const namesList = [
		{
			first: 'cedric',
			last: 'vb',
		},
		{
			first: 'john',
			last: 'Snow',
		},
	];
	return (
		<div className='App'>
			<Greet name='cedric' messageCount={23} isLoggenIn />
      <Person name={personName} />
      <PersonList names={namesList} />
		</div>
	);
}

export default App;
