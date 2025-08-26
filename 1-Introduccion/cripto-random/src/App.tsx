import { useState, useEffect } from 'react';
import './App.css'

function App() {

	const API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

	const [number, setNumber] = useState(0);
	const [loading, setLoading] = useState(true);
	const [refresh, setRefresh] = useState(0);
	const [error, setError] = useState('');
	
	useEffect(() => {
		setLoading(true);
		const getFetch = async () => {
			try {
				const response = await fetch(API);
				const data = await response.json();
				setNumber(data);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		getFetch();
	}, [refresh])
	
	return (
	    <>
	    	{ loading ? <h1>Cargando...</h1> : <h1>Numero: { number }</h1> }
	    	<p>{ error }</p>
	    	<button disabled={ loading } onClick={ () => setRefresh(refresh + 1) }>Nuevo numero</button>
	    </>
	)
}

export default App;
