import React from 'react';
import styles from './Slider.module.css';

import * as RadixSlider from '@radix-ui/react-slider';

function Slider() {
	return (
		<RadixSlider.Root
			className={styles.SliderRoot}
			defaultValue={[50]}
			max={100}
			step={1}>
			<RadixSlider.Track className={styles.SliderTrack}>
				<RadixSlider.Range className={styles.SliderRange} />
			</RadixSlider.Track>
			<RadixSlider.Thumb
				className={styles.SliderThumb}
				aria-label='Volume'
			/>
		</RadixSlider.Root>
	);
}

export default Slider;
