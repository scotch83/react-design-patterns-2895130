import { useEffect, useState } from "react"


export const withUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(() =>
        (async () => {
            const response = await fetch(`/users/${userId}`)
            const data = await response.json();
            console.log(data);
            setUser(data)
        }))

        return <Component {...props} user={user} />
    }
}
