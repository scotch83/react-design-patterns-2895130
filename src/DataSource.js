import React, { useEffect, useState } from 'react'

export const DataSource = ({ children, getData = () => { }, resourceProperty }) => {
    const [state, setState] = useState(undefined);
    useEffect(() => fetchstate(getData, setState), [getData]);
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

function fetchstate(getData, setState) {
    return (async () => {
        const currentstate = await getData();
        if (currentstate) {
            setState(currentstate);
        }
    })();
}
