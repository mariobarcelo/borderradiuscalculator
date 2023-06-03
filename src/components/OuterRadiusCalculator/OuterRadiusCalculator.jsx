import React from 'react';
import styles from './OuterRadiusCalculator.module.css';

function OuterRadiusCalculator() {
	const [outerRadius, setOuterRadius] = React.useState(63);
	const [padding, setPadding] = React.useState(32);
	const [innerRadius, setInnerRadius] = React.useState(31);

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
				<fieldset>
					<label htmlFor='outer-radius'>Outer Radius</label>
					<input
						disabled
						id='outer-radius'
						min='0'
						max='300'
						type='number'
						value={outerRadius}
						onChange={(event) => {
							setOuterRadius(+event.target.value);
						}}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor='padding'>Padding</label>
					<div className='inputWrapper'>
						<input
							id='padding'
							min='0'
							max='150'
							type='number'
							value={padding}
							onChange={(event) => {
								const nextPadding = +event.target.value;
								console.log('nextPadding: ', nextPadding);
								console.log(
									'typeofnextPadding: ',
									typeof nextPadding
								);
								outerRadiusCalculation(nextPadding, innerRadius);
								setPadding(nextPadding);
							}}
						/>
						<input
							type='range'
							className='slider'
							min='0'
							max='150'
							value={padding}
							onChange={(event) => {
								const nextPadding = +event.target.value;
								console.log('nextPadding: ', nextPadding);
								console.log(
									'typeofnextPadding: ',
									typeof nextPadding
								);
								outerRadiusCalculation(nextPadding, innerRadius);
								setPadding(nextPadding);
							}}
						/>
					</div>
				</fieldset>
				<fieldset>
					<label htmlFor='inner-radius'>Inner Radius</label>
					<div className='inputWrapper'>
						<input
							id='inner-radius'
							min='0'
							max='150'
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
							className='slider'
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
				</fieldset>
			</div>
			<div
				className='border-container'
				style={{
					margin: '0 auto',
					height: '100%',
					maxWidth: '300px',
					overflow: 'hidden',
					paddingLeft: '5%',
					paddingTop: '5%',
					aspectRatio: '1 / 1',
					backgroundImage:
						'radial-gradient(rgb(143 143 143) 1px,#f9f9f9 0)',
					backgroundSize: '1.5rem 1.5rem',
					backgroundPosition: '-1rem -1rem',
				}}>
				<div
					className='outer-element'
					style={{
						borderRadius: `${outerRadius}px`,
						padding: `${padding}px`,
						height: '100%',
						minWidth: '1000px',
						minHeight: '1000px',
						aspectRatio: '1 / 1',
						backgroundColor: 'rgb(181,81,108)',
					}}>
					<div
						className='inner-element'
						style={{
							backgroundColor: 'rgb(254, 189, 86)',
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
