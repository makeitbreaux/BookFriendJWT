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
            console.error(err)
            }
          };
    
return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h1 className="text-center text-lg leading-6 px-4 py-5 font-medium ">Search for All Works by an Author </h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input 
                    type="text" 
                    name="first_name" 
                    id="first_name"
                    placeholder="First Name" 
                    value={first_name}
                    onChange={e => handleChange(e)}
                    className="form-control" 
                    />
                    </div>

                <div className="form-group">
                <label>Last Name</label>
                <input 
                    type="text" 
                    name="last_name" 
                    id="last_name"
                    placeholder="Last Name" 
                    value={last_name}
                    onChange={e => handleChange(e)}
                    className="form-control" 
                    />
                </div>
                    
            <div className="d-grid gap-2">
                <button type="submit" onClick={onClick} className="btn btn-info btn-block mt-4"> Search for Works of Author </button>
                { showResults ? <Results /> : null }
            </div>
        </form>
</div>
</div>
</div>
    )
}

export default WorkSearchForm;