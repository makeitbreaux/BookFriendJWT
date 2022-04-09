import React, {useState} from "react";
import WorkCard from "./WorkCard";

const WorkSearchForm = () => {
    // * creating state for needed info
    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: ""
    });
    const [works, setWorks] = useState([])
    const [name, setName] = useState("")
    const [authorKey, setAuthorKey] = useState("")
    const [showResults, setShowResults] = React.useState(false)
    // * setting state with title input from form 
    const {first_name, last_name} = inputs;

    // * functionality to hide/show API results
    const onClick = () => setShowResults(true)

    const Results = () => (
        <div id="results" className="search-results">
          <WorkCard works={works} name={name}/>
        </div>
      )

    // * handle change & submit functionality
    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // * call API with info input into form
            let {first_name, last_name} = inputs;
            const firstRequest = await fetch(`https://openlibrary.org/search/authors.json?q=` + `${first_name}` + `%20` + `${last_name}`, {
                method: "GET"
        })
            const firstResponse = await firstRequest.json()
            // * setting states with info fetched from API
            const key = firstResponse.docs[0].key
            const name = firstResponse.docs[0].name
            setAuthorKey(key)
            setName(name)
            console.log(authorKey)
            // * call author API with authorKey from form search
            const secondRequest = await fetch(`http://openlibrary.org/authors/${key}/works.json?language=eng`, {
                        method: "GET"
            })
            const secondResponse = await secondRequest.json()
            const works = secondResponse.entries
            
            setWorks(works)
            console.log(secondResponse)
    
        } catch (err) {
            console.error(err.message)
            }
          };
    
return (
    <div>
        <h1 className="text-center text-lg leading-6 px-4 py-5 font-medium ">Search for All Works by an Author </h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="first_name" 
                    id="first_name"
                    placeholder="First Name" 
                    value={first_name}
                    onChange={e => handleChange(e)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    />
                <input 
                    type="text" 
                    name="last_name" 
                    id="last_name"
                    placeholder="Last Name" 
                    value={last_name}
                    onChange={e => handleChange(e)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    />
                    
            <div className="d-grid gap-2">
                <button type="submit" onClick={onClick} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Search for Works of Author </button>
                { showResults ? <Results /> : null }
            </div>
        </form>
</div>
    )
}

export default WorkSearchForm;