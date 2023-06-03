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

			<div>
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
			</div>

			{selectedRadius === 'inner-radius' ? (
				<InnerRadiusCalculator />
			) : (
				<OuterRadiusCalculator />
			)}

			<p className='credits'>
				Handcrafted by{' '}
				<a href='https://mariobarcelo.com'>Mario Barceló</a>
			</p>
		</>
	);
}

export default App;
