import React, { useEffect, useState } from 'react'

export const UserLoader = ({ children, userId }) => {
    const [user, setUser] = useState(undefined);
    console.log(userId)
    useEffect(() => fetchUser(setUser, userId), [userId]);
    console.log(2)
    return (<>
        {
            React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child;
            })
        }
    </>)
}
function fetchUser(setUser, userId) {
    return (async () => {
        const response = await fetch(`/users/${userId}`);
        if (response.ok) {
            const currentUser = await response.json();
            setUser(currentUser);
        }
    })();
}
