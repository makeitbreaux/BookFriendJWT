import React, {useState} from "react";
import AuthorCard from "./AuthorCard";

const AuthorSearchForm = () => {
    // * creating state for needed info
    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: ""
    });
    const [authorName, setAuthorName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [topWork, setTopWork] = useState("");
    const [topSubjects, setTopSubjects] = useState("");
    const [showResults, setShowResults] = React.useState(false)
    // * setting state with first_name, last_name inputs from form
    const {first_name, last_name} = inputs;

    // * functionality to hide/show API results
    const onClick = () => setShowResults(true)

    const Results = () => (
        <div id="results" className="search-results">
            <AuthorCard 
                authorName={authorName} 
                birthDate={birthDate} 
                topWork={topWork} 
                topSubjects={topSubjects} 
            />
        </div>
      )

    // * handle change & submit functionality
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            // * call API with info input into form
            let {first_name, last_name} = inputs;
            const response = await fetch(`https://openlibrary.org/search/authors.json?q=` + `${first_name}` + `%20` + `${last_name}`, {
                method: "GET"
            })

            const parseRes = await response.json()
            // * setting states with info fetched from API
            // setAuthorKey(parseRes.docs[0].key)
            setAuthorName(parseRes.docs[0].name)
            setBirthDate(parseRes.docs[0].birth_date)
            setTopWork(parseRes.docs[0].top_work)
            setTopSubjects(parseRes.docs[0].top_subjects)
        } catch (err) {
              console.error(err.message);
            }
          };

return (
    <div>
        <h1 className="text-center text-lg leading-6 font-medium px-4 py-5 ">Search for Author Information</h1>
            <form onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    name="first_name" 
                    placeholder="First Name" 
                    className="form-control my-3"
                    value={first_name}
                    onChange={e => onChange(e)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                <input 
                    type="text" 
                    name="last_name" 
                    placeholder="Last Name" 
                    className="form-control my-3"
                    value={last_name}
                    onChange={e => onChange(e)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                        
            <div className="d-grid gap-2">
                <button type="submit" onClick={onClick} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Search for Author Information </button>
                    { showResults ? <Results /> : null }
            </div>
        </form>
    </div>
    )
}

export default AuthorSearchForm;


  

  