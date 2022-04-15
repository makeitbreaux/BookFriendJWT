import React, {Fragment, useState} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

const Login = ({setAuth}) => {
    
Login.propTypes = {
  setAuth: PropTypes.func
}

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const {email, password} = inputs;

    const history = useHistory();

    function navigateToRegister() {
      history.push("/register");
    }

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {email, password} ;

            const response = await fetch("https://book-friend.herokuapp.com/authentication/login", {
                method: "POST",
                headers: {"Content-type" : "application/json", "token": "localStorage.token"  },
                body: JSON.stringify(body)
            })

            const parseRes = await response.json();

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Logged in Successfully");
              } else {
                setAuth(false);
                toast.error(parseRes);
              }
            } catch (err) {
              console.error(err);
            }
          };

return (
  <Fragment>
    <div className="min-h-full w-screen flex items-center justify-center pt-0 m-auto  px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-screen space-y-8">
    <div>
      <img className="mx-auto h-30 w-auto p-0 m-0" src="./bookfriendimg1.png" alt="BookFriend" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
    </div>
    
    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmitForm}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
      
      <div>
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autoComplete="email" value={email}
        onChange={e => onChange(e)}  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" value={password}
        onChange={e => onChange(e)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button type="button" onClick={navigateToRegister} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
          Register
        </button>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
    </div>
    </div>
</Fragment>
    )
}
export default Login;