import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged} from 'firebase/auth';

// to display only if user is logged in
const useUser = () => {
    const [user, setUser] = useState(null);
    const [ isLoading, setIsLoading] = useState(true); // to keep track of user loaded

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth() , user => { // user can be null or firebase user, if user is logged in, then 
            // firebase will be set
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe
    }, []);
    return {user, isLoading};
}

export default useUser;