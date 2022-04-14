import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';
import App from './App';

const User = () => {
    
    const [user, setUser] = useState({});
    
    useEffect(async () => {
        
        let user = await fetch("https://book-friend.herokuapp.com/dashboard/", {
            method: "GET",
            headers: { token: localStorage.token }
          });
        
        setUser(user);
        
    }, []);

return(
        <UserContext.Provider value = {{user}}>
            <App/>
        </UserContext.Provider>
    );

}

export default User;