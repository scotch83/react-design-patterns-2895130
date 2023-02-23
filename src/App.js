import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow'

const Step1 = ({ goNext }) => (<>
	<p>Step 1</p>
	<button onClick={goNext}>Go next</button>
</>)
const Step2 = ({ goNext }) => (<>
	<p>Step 2</p>
	<button onClick={goNext}>Go next</button>
</>)
const Step3 = ({ goNext }) => (<>
	<p>Step 3</p>
	<button onClick={goNext}>Go next</button>
</>)
function App() {
	return (
		<UncontrolledOnboardingFlow>
			<Step1 />
			<Step2 />
			<Step3 />
		</UncontrolledOnboardingFlow>
	);
}

export default App;
