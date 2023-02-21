import React, { useEffect, useState } from 'react'

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(undefined);
    console.log(1)
    useEffect(() => fetchUser((userPar) => {
        console.log('setUser Effect')

        setUser(userPar)
    }), []);
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
function fetchUser(setUser) {
    return (async () => {
        console.log(3)
        const response = await fetch('/current-user');
        const currentUser = await response.json();
        setUser(currentUser);
        console.log(4)
    })();
}
