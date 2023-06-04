import styles from './App.module.css';

import BorderRadiusCalculator from '../BorderRadiusCalculator';

function App() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.headerWrapper}>
					<h1>Border Radius Calculator</h1>
					<h2>Know the perfect balanced border-radius</h2>
				</div>

				<BorderRadiusCalculator />

				<p className={styles.credits}>
					Handcrafted by{' '}
					<a href='https://mariobarcelo.com'>Mario Barceló</a>
				</p>
			</div>
		</>
	);
}

export default App;
