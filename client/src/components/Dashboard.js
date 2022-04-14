import React from "react";
// import { toast } from "react-toastify";
import AuthorSearchForm from './AuthorSearchForm';
import WorkSearchForm from './WorkSearchForm';
import { Disclosure} from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const Dashboard = ({logout, currentUser}) => {

Dashboard.propTypes = {
  logout: PropTypes.func,
  currentUser: PropTypes.string 
}
  //   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const currentUser = useContext(UserContext);
//   const getUserInfo = async () => {
//     try {
//       setName(currentUser.firstName);
//       setEmail(currentUser.email);
//       setId(currentUser.id)
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   useEffect(() => {
//     getUserInfo();
// });  
// const  currentUser  = useContext(UserContext);
const name = currentUser.firstName;    
const email = currentUser.email;      
  const user = {
      name: {name},
      email: {email}
    }
    const navigation = [
      { name: 'Profile', href: `/users`, current: false },
    ]
    const userNavigation = [
      { name: 'Your Profile', href: `/users` }
    ]
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

return (
  <>
  <div className="min-h-full w-screen">
    <Disclosure as="nav" className="bg-gray-800 w-screen">
      {({ open }) => (
      <>
      <div className="min-w-full">
      <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
      <div className="flex-shrink-0">
        <img
          className="h-20 w-20"
          src="./bookfriendimg.png"
          alt="BookFriend"
          />
          </div>
          <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                  item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
              )}
            aria-current={item.current ? 'page' : undefined}>
              {item.name} </a> ))}
          </div>
          </div>
          </div>
          </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                  </Disclosure.Button>
                ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">
              {user.name}
            </div>
            <div className="text-sm font-medium leading-none text-gray-400">     
              {user.email}
            </div>
          </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            {userNavigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                {item.name}
              </Disclosure.Button>
              ))}
          </div>
          </div>
          </Disclosure.Panel>
          </>
          )}
        </Disclosure>

        <header className="bg-white shadow ">
          <div className="min-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900"> Dashboard </h1>
            <button type="submit" onClick={e => logout(e)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
              Log Out
            </button>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
            <h2>Welcome! </h2>
                <AuthorSearchForm/>
                <WorkSearchForm/>
          </div>
          </div>
          </main>
          </div>
          </>
  )
} 
       
export default Dashboard;