import { useState } from 'react';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => {
	const [name, setName] = useState('');
	return (
		<>
			<h1>Step 1</h1>
			<input type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
			<button onClick={() => goToNext({ name })}>Next</button>
		</>
	)
};
const StepTwo = ({ goToNext }) => {
	const [surname, setName] = useState('');
	return (
		<>
			<h1>Step 2</h1>
			<input type="text" value={surname} placeholder="Surname" onChange={e => setName(e.target.value)} />
			<button onClick={() => goToNext({ surname })}>Next</button>
		</>
	)
};
const StepThree = ({ goToNext }) => {
	const [age, setName] = useState('');
	return (
		<>
			<h1>Step 2</h1>
			<input type="number" value={age} placeholder="Age" onChange={e => setName(e.target.value)} />
			<button onClick={() => goToNext({ age })}>Next</button>
		</>
	)
};
const StepFour = ({ goToNext }) => {
	const [hairColor, setName] = useState('name');
	return (
		<>
			<h1>Step 3</h1>
			<input type="color" name="hairColor" value={hairColor} placeholder="Hair Color" onChange={e => setName(e.target.value)} />
			<label htmlFor='hairColor'>Hair Color</label>
			<button onClick={() => goToNext({ hairColor })}>Next</button>
		</>
	)
};

function App() {

	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const onNext = stepData => {
		setOnboardingData({
			...onboardingData,
			...stepData
		});
		setCurrentIndex(currentIndex + 1);
	}

	return (
		<ControlledOnboardingFlow
			currentIndex={currentIndex} onNext={onNext}>
			<StepOne />
			<StepTwo />
			<StepThree />
			{onboardingData.age >= 62 && <StepFour />}
		</ControlledOnboardingFlow>
	);
}

export default App;
