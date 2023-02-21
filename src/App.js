import { useState } from 'react';
import { ControlledModal } from './ControlledModal copy';

function App() {
	const [shouldShow, setShouldShow] = useState(false);
	return (
		<>
			<ControlledModal shouldShow={shouldShow}
				onRequestClose={() => setShouldShow(false)} >
				<h1>Hey I am the modal</h1>
				<p>Here you can see some modal content</p>
			</ControlledModal>
			<button onClick={() => setShouldShow(!shouldShow)} >{shouldShow ? "Hide Modal" : "Show Modal"}</button>
		</>
	);
}

export default App;
