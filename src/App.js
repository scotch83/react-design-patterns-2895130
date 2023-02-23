import { UserInfo } from './UserInfo'
import { withUser } from "./withUser";
const UserInfoWrapper = withUser(UserInfo, '123')

function App() {
	return (
		<UserInfoWrapper a={1} />
	);
}

export default App;
