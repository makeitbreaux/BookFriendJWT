import React, { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

function ProfileEditForm({currentUser}) {
  
ProfileEditForm.propTypes = {
  currentUser: PropTypes.string
}  
  
  // const [user, setUser] = useState({})

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  // console.debug(
  //     "ProfileForm",
  //     "currentUser=", currentUser,
  //     "formData=", formData,
  //     "formErrors=", formErrors,
  //     "saveConfirmed=", saveConfirmed,
  // );

  // const {id} = useParams();
    // console.log(id)

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    };


        try {
          const data = { user_first_name: profileData.firstName,
            user_last_name: profileData.lastName,
            password: profileData.password};
            
          const response = await fetch("https://book-friend.herokuapp.com/is-verify", {
            method: "PUT",
            headers: { 
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(data),
          })
          const parseRes = response.json()
          
          console.log(parseRes)
         

  
  } catch (errors) {
    setFormErrors(errors);
    return;
  }


    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    // trigger reloading of user information throughout the site
    
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

return (
  <div>
  <form>
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
    <div className="bg-white py-6 rounded-md px-10  shadow-md">
      <img className="mx-auto h-30 w-auto p-0 m-0" src="./bookfriendimg1.png" alt="BookFriend" />
      <h1 className="text-center text-lg font-bold text-gray-500">Edit Profile Info</h1>
        <div className="space-y-4 mt-6">
        <div className="w-full">
          <input 
              type="text"
              placeholder="First Name" 
              className="px-4 py-2 bg-gray-50 w-full"     
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}/>
            </div>
          
        <div className="w-full">
          <input
              type="text" 
              placeholder="Last Name" 
              className="px-4 py-2 bg-gray-50 w-full" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}/>
            </div>
          
        <div className="w-full">
          <input
              type="password" 
              placeholder="Password" 
              className="px-4 py-2 bg-gray-50 w-full"
              name="password"
              value={formData.password}
              onChange={handleChange} />
            </div>
          </div>
        
        {formErrors.length ? toast.error(formErrors) : null}

        {saveConfirmed ? toast.success("Profile Updated Successfully") : null}

        <button
            className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
            onClick={handleSubmit} >
                Save Changes
        </button>
      </div>
      </div>
    </form>
  </div>
  );
}

export default ProfileEditForm;
