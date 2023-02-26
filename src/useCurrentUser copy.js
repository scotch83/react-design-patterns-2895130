import { useEffect, useState } from "react";
export const useResource = resourceUrl => {
    const [data, setData] = useState(null);
    useEffect(() => {
        (
            async () => {
                const response = await fetch(resourceUrl);
                const currentUser = await response.json();
                setData({ ...currentUser });
            }
        )()
    }, [resourceUrl])
    return data;
}
