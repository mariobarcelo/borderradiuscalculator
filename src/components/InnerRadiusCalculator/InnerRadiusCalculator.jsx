import React from 'react';

function InnerRadiusCalculator() {
	const [outerRadius, setOuterRadius] = React.useState(24);
	const [padding, setPadding] = React.useState(8);
	const [innerRadius, setInnerRadius] = React.useState(16);

	function innerRadiusCalculation(paddingParam, outerRadiusParam) {
		let nextInnerRadius = outerRadiusParam - paddingParam;
		if (nextInnerRadius < 0) {
			nextInnerRadius = 0;
		}
		setInnerRadius(nextInnerRadius);
	}

	return (
		<>
			<div className='card'>
				<label htmlFor='outer-radius'>Outer Radius</label>
				<input
					id='outer-radius'
					min='0'
					max='150'
					type='number'
					value={outerRadius}
					onChange={(event) => {
						const nextOuterRadius = +event.target.value;
						console.log(
							'typeof: nextInnerRadius: ',
							typeof nextOuterRadius
						);
						innerRadiusCalculation(padding, nextOuterRadius);
						setOuterRadius(nextOuterRadius);
					}}
				/>
				<input
					type='range'
					min='0'
					max='300'
					value={outerRadius}
					onChange={(event) => {
						const nextOuterRadius = +event.target.value;
						console.log(
							'typeof: nextInnerRadius: ',
							typeof nextOuterRadius
						);
						innerRadiusCalculation(padding, nextOuterRadius);
						setOuterRadius(nextOuterRadius);
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
						innerRadiusCalculation(nextPadding, outerRadius);
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
						innerRadiusCalculation(nextPadding, outerRadius);
						setPadding(nextPadding);
					}}
				/>

				<label htmlFor='inner-radius'>Inner Radius</label>
				<input
					disabled
					id='inner-radius'
					min='0'
					type='number'
					value={innerRadius}
					onChange={(event) => {
						setInnerRadius(+event.target.value);
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

export default InnerRadiusCalculator;
