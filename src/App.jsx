import './App.css';
import * as Tabs from '@radix-ui/react-tabs';

import OuterRadiusCalculator from './components/OuterRadiusCalculator';
import InnerRadiusCalculator from './components/InnerRadiusCalculator';

function App() {
	return (
		<>
			<h1>Border Radius Calculator</h1>

			<h2>Which border-radius do you want to know?</h2>

			<Tabs.Root defaultValue='tab1'>
				<Tabs.List
					className='TabsList'
					aria-label='Select which border-radius you want to know'>
					<Tabs.Trigger className='TabsTrigger' value='tab1'>
						Inner Radius
					</Tabs.Trigger>
					<Tabs.Trigger className='TabsTrigger' value='tab2'>
						Outer Radius
					</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content className='TabsContent' value='tab1'>
					<InnerRadiusCalculator />
				</Tabs.Content>
				<Tabs.Content className='TabsContent' value='tab2'>
					<OuterRadiusCalculator />
				</Tabs.Content>
			</Tabs.Root>

			<p className='credits'>
				Handcrafted by{' '}
				<a href='https://mariobarcelo.com'>Mario Barceló</a>
			</p>
		</>
	);
}

export default App;
