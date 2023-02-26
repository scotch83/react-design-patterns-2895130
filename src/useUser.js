import { useEffect, useState } from "react";
export const useUser = userId => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (
            async () => {
                const response = await fetch(`/users/${userId}`);
                const currentUser = await response.json();
                setUser({ ...currentUser });
            }
        )()
    }, [userId])
    return user;
}
