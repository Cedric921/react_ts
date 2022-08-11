import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
	return (
		<div className='App'>
			<Button handleClick={(e) => console.log('click', e)} />
			<Input handleChange={(e) => console.log('change', e)} value='' />
		</div>
	);
}

export default App;
