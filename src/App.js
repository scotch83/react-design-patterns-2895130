import { GenericLoader } from "./GenericLoader";
import { UserInfo } from './UserInfo';
import { DataSource } from "./DataSource";
import { ProductInfo } from './ProductInfo';
import { useRef, useState } from "react";
const getDataFunction = (url) => async () => {


	const response = await fetch(url);
	return response.json();
}
function App() {
	const [userId, setUserId] = useState("234");
	const ref = useRef();
	return (<>
		<DataSource getData={getDataFunction('/users/234')} resourceProperty="user">
			<UserInfo />
		</DataSource>
		<DataSource getData={getDataFunction('/products/1234')} resourceProperty="product">
			<ProductInfo />
		</DataSource>

	</>
	);
}

export default App;
