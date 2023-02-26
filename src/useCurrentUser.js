import { useEffect, useState } from "react";
export const useCurrentUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('/current-user');
                const currentUser = await response.json();
                setUser({ ...currentUser });
            }
        )()
    }, [])
    return user;
}
