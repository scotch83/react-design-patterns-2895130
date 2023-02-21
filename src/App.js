import { GenericLoader } from "./GenericLoader";
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
import { useRef, useState } from "react";
function App() {
	const [userId, setUserId] = useState("234");
	const ref = useRef();
	return (<>
		<input onChange={() => {
			setUserId(ref.current.value);
		}} ref={ref} />
		<GenericLoader resourceUrl={`/users/${userId}`} resourceProperty="user">
			<UserInfo />
		</GenericLoader>
		<GenericLoader resourceUrl="/products/1234" resourceProperty="product">
			<ProductInfo />
		</GenericLoader>
	</>
	);
}

export default App;
