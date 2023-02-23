import { useEffect, useState } from "react"


export const withEditableUser = (Component, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null)
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await (await fetch(`users/${userId}`)).json();
                setOriginalUser(response)
                setUser(response)
            })()
        }, [])

        const onChangeUser = changes => {
            setUser({ ...user, ...changes });
        }

        const onSaveUser = async () => {
            const response = await fetch(`users/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user }),
            });
            const data = await response.json();
            setOriginalUser(data)
            setUser(data)
        }

        const onResetUser = () => {
            setUser({ ...originalUser });
        }

        return <Component {...props}
            user={user}
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser} />
    }
}
