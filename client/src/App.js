import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//COMPONENTS
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import ProfileEditForm from './components/ProfileEditForm';

toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const response = await fetch("https://book-friend.herokuapp.com/authentication/verify", {
        method: "GET",
        headers: {token : localStorage.token }
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) :
      setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    checkAuthenticated();
  }, [])
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };
// const {user_id} = useParams();
  const [currentUser, setCurrentUser] = useState([])
  
  const getProfile = async () => {
      try {
        const res = await fetch("https://book-friend.herokuapp.com/dashboard/", {
          method: "GET",
          headers: { token: localStorage.token }
        });
  
        const parseData = await res.json();
        const id = parseData.user_id;

        const email = parseData.email;
        const firstName = parseData.user_first_name;
        const lastName = parseData.user_last_name;
        setCurrentUser(id, email, firstName, lastName);

      } catch (err) {
        console.error(err.message);
      }
    };

    const logout = async e => {
      e.preventDefault();
      try {
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logged Out Successfully");
      } catch (err) {
        console.error(err.message);
      }
    };

  useEffect(() => {
      getProfile();
  }, []);  


return (
  <Fragment>

    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
           
          <Route
            exact
            path="/register"
            render={props =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth}  />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />

          <Route
            exact
            path="/dashboard"
            render={props =>
              isAuthenticated ? (
                <Dashboard {...props} currentUser={currentUser} setAuth={setAuth} logout={logout}/>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            
          <Route exact path="/users" >
            <ProfileEditForm currentUser={currentUser}/>
          </Route>

      </Switch>
    </div>
  </BrowserRouter>

</Fragment>
  );
}

export default App;
