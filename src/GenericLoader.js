import React, { useEffect, useState } from 'react'

export const GenericLoader = ({ children, resourceUrl, resourceProperty }) => {
    const [state, setState] = useState(undefined);
    useEffect(() => fetchstate(setState, resourceUrl), [resourceUrl]);
    console.log(2)
    return (<>
        {
            React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceProperty]: state })
                }
                return child;
            })
        }
    </>)
}
function fetchstate(setState, url) {
    return (async () => {
        const response = await fetch(url);
        if (response.ok) {
            const currentstate = await response.json();
            setState(currentstate);
        }
    })();
}
