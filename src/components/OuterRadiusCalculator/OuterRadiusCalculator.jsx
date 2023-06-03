import React from 'react';

function OuterRadiusCalculator() {
	const [outerRadius, setOuterRadius] = React.useState(24);
	const [padding, setPadding] = React.useState(8);
	const [innerRadius, setInnerRadius] = React.useState(16);

	function outerRadiusCalculation(paddingParam, innerRadiusParam) {
		let nextOuterRadius = paddingParam + innerRadiusParam;
		if (nextOuterRadius < 0) {
			nextOuterRadius = 0;
		}
		setOuterRadius(nextOuterRadius);
	}

	return (
		<>
			<div className='card'>
				<label htmlFor='outer-radius'>Outer Radius</label>
				<input
					disabled
					id='outer-radius'
					min='0'
					type='number'
					value={outerRadius}
					onChange={(event) => {
						setOuterRadius(+event.target.value);
					}}
				/>

				<label htmlFor='padding'>Padding</label>
				<input
					id='padding'
					min='0'
					type='number'
					value={padding}
					onChange={(event) => {
						const nextPadding = +event.target.value;
						console.log('nextPadding: ', nextPadding);
						console.log('typeofnextPadding: ', typeof nextPadding);
						outerRadiusCalculation(nextPadding, innerRadius);
						setPadding(nextPadding);
					}}
				/>
				<input
					type='range'
					min='0'
					max='150'
					value={padding}
					onChange={(event) => {
						const nextPadding = +event.target.value;
						console.log('nextPadding: ', nextPadding);
						console.log('typeofnextPadding: ', typeof nextPadding);
						outerRadiusCalculation(nextPadding, innerRadius);
						setPadding(nextPadding);
					}}
				/>

				<label htmlFor='inner-radius'>Inner Radius</label>
				<input
					id='inner-radius'
					min='0'
					type='number'
					value={innerRadius}
					onChange={(event) => {
						const nextInnerRadius = +event.target.value;
						console.log(
							'typeofnextInnerRadius: ',
							typeof nextInnerRadius
						);
						outerRadiusCalculation(padding, nextInnerRadius);
						setInnerRadius(nextInnerRadius);
					}}
				/>
				<input
					type='range'
					min='0'
					max='150'
					value={innerRadius}
					onChange={(event) => {
						const nextInnerRadius = +event.target.value;
						console.log(
							'typeofnextInnerRadius: ',
							typeof nextInnerRadius
						);
						outerRadiusCalculation(padding, nextInnerRadius);
						setInnerRadius(nextInnerRadius);
					}}
				/>
			</div>
			<div
				className='border-container'
				style={{
					margin: '0 auto',
					border: '1px solid white',
					height: '100%',
					maxWidth: '300px',
					overflow: 'hidden',
					paddingLeft: '15%',
					paddingTop: '15%',
					aspectRatio: '1 / 1',
				}}>
				<div
					className='outer-element'
					style={{
						border: '2px solid red',
						borderRadius: `${outerRadius}px`,
						padding: `${padding}px`,
						height: '100%',
						minWidth: '1000px',
						minHeight: '1000px',
						aspectRatio: '1 / 1',
					}}>
					<div
						className='inner-element'
						style={{
							border: '2px solid blue',
							borderRadius: `${innerRadius}px`,
							height: '100%',
							minWidth: '1000px',
							minHeight: '1000px',
							aspectRatio: '1 / 1',
						}}></div>
				</div>
			</div>
		</>
	);
}

export default OuterRadiusCalculator;
