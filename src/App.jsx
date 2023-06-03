import React from 'react';
import './App.css';
import OuterRadiusCalculator from './components/OuterRadiusCalculator';
import InnerRadiusCalculator from './components/InnerRadiusCalculator';

function App() {
	const [selectedRadius, setSelectedRadius] =
		React.useState('inner-radius');
	return (
		<>
			<h1>Border Radius Calculator</h1>

			<label htmlFor='age-select'>
				¿Qué border-radius quieres conocer?
			</label>

			<select
				id='age-select'
				value={selectedRadius}
				onChange={(event) => {
					setSelectedRadius(event.target.value);
				}}>
				<option value='inner-radius'>Inner Radius</option>
				<option value='outer-radius'>Outer Radius</option>
			</select>

			{selectedRadius === 'inner-radius' ? (
				<InnerRadiusCalculator />
			) : (
				<OuterRadiusCalculator />
			)}

			<p className='read-the-docs'>Handcrafted by Mario Barceló</p>
		</>
	);
}

export default App;
