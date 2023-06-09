import React from 'react';
import styles from './BorderRadiusCalculator.module.css';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Clipboard, Check } from 'react-feather';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BorderRadiusCalculator() {
	const [outerRadius, setOuterRadius] = React.useState(63);
	const [padding, setPadding] = React.useState(32);
	const [innerRadius, setInnerRadius] = React.useState(31);
	const [isCopied, setIsCopied] = React.useState(false);

	function innerRadiusCalculation(paddingParam, outerRadiusParam) {
		let nextInnerRadius = outerRadiusParam - paddingParam;
		if (nextInnerRadius < 0) {
			nextInnerRadius = 0;
		}
		setInnerRadius(nextInnerRadius);
	}

	function outerRadiusCalculation(paddingParam, innerRadiusParam) {
		let nextOuterRadius = paddingParam + innerRadiusParam;
		if (nextOuterRadius < 0) {
			nextOuterRadius = 0;
		}
		setOuterRadius(nextOuterRadius);
	}

	const codeString = `.outerElement {
  border-radius: ${outerRadius}px;
  padding: ${padding}px;
}

.innerElement {
  border-radius: ${innerRadius}px;
}
`;

	return (
		<>
			<div className={styles.inputsContainer}>
				<fieldset>
					<VisuallyHidden>
						<legend>
							Outer Radius. This value can be controlled by the input
							type number and by the input type slider.
						</legend>
					</VisuallyHidden>
					<label htmlFor='outer-radius'>Outer Radius</label>
					<div className={styles.inputWrapper}>
						<input
							id='outer-radius'
							min='0'
							max='300'
							type='number'
							value={outerRadius}
							onChange={(event) => {
								const nextOuterRadius = +event.target.value;

								innerRadiusCalculation(padding, nextOuterRadius);
								setOuterRadius(nextOuterRadius);
							}}
						/>
						<input
							className={`${styles.slider} ${styles.outerRadiusSlider}`}
							type='range'
							min='0'
							max='300'
							value={outerRadius}
							onChange={(event) => {
								const nextOuterRadius = +event.target.value;
								innerRadiusCalculation(padding, nextOuterRadius);
								setOuterRadius(nextOuterRadius);
							}}
						/>
					</div>
				</fieldset>
				<fieldset>
					<VisuallyHidden>
						<legend>
							Padding field. This value can be controlled by the input
							type number and by the input type slider.
						</legend>
					</VisuallyHidden>
					<label htmlFor='padding'>Padding</label>
					<div className={styles.inputWrapper}>
						<input
							id='padding'
							min='0'
							max='150'
							type='number'
							value={padding}
							onChange={(event) => {
								const nextPadding = +event.target.value;
								innerRadiusCalculation(nextPadding, outerRadius);
								setPadding(nextPadding);
							}}
						/>
						<input
							className={`${styles.slider} ${styles.paddingSlider}`}
							type='range'
							min='0'
							max='150'
							value={padding}
							onChange={(event) => {
								const nextPadding = +event.target.value;
								innerRadiusCalculation(nextPadding, outerRadius);
								setPadding(nextPadding);
							}}
						/>
					</div>
				</fieldset>
				<fieldset>
					<VisuallyHidden>
						<legend>
							Inner Radius field. This value can be controlled by the
							input type number and by the input type slider.
						</legend>
					</VisuallyHidden>
					<label htmlFor='inner-radius'>Inner Radius</label>
					<div className={styles.inputWrapper}>
						<input
							id='inner-radius'
							min='0'
							max='150'
							type='number'
							value={innerRadius}
							onChange={(event) => {
								const nextInnerRadius = +event.target.value;
								outerRadiusCalculation(padding, nextInnerRadius);
								setInnerRadius(nextInnerRadius);
							}}
						/>
						<input
							className={`${styles.slider} ${styles.innerRadiusSlider}`}
							type='range'
							min='0'
							max='150'
							value={innerRadius}
							onChange={(event) => {
								const nextInnerRadius = +event.target.value;
								outerRadiusCalculation(padding, nextInnerRadius);
								setInnerRadius(nextInnerRadius);
							}}
						/>
					</div>
				</fieldset>
			</div>

			<div className={styles.borderContainer}>
				<div
					className={styles.outerElement}
					style={{
						borderRadius: `${outerRadius}px`,
						padding: `${padding}px`,
					}}>
					<div
						className={styles.innerElement}
						style={{
							borderRadius: `${innerRadius}px`,
						}}></div>
				</div>
			</div>
			<div className={styles.codeSnippetContainer}>
				<div className={styles.codeSnippetHeader}>
					<button
						className={styles.codeSnippetButton}
						onClick={() => {
							console.log(codeString);
							navigator.clipboard.writeText(codeString);
							setIsCopied(true);
							setTimeout(() => {
								setIsCopied(false);
							}, 3000);
						}}>
						{isCopied ? (
							<>
								Copied!
								<Check />
							</>
						) : (
							<>
								Copy code
								<Clipboard />
							</>
						)}
					</button>
				</div>
				<SyntaxHighlighter
					language='css'
					style={vs2015}
					className={styles.codeSnippet}>
					{codeString}
				</SyntaxHighlighter>
			</div>
		</>
	);
}

export default BorderRadiusCalculator;
