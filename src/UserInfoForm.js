import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
        <>
            <label>Name:

                <input value={name} onChange={e => onChangeUser({ name: e.target.value })} type="text" />
            </label>
            <label>age:

                <input value={age} onChange={e => onChangeUser({ age: e.target.value })} type="number" />
            </label>
            <label>hairColor:

                <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} type="color" />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>Loading....</p>
}, '123')
