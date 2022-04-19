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
              console.error(err);
            }
          };

return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h1 className="text-center text-lg leading-6 font-medium px-4 py-5 ">Search for Author Information</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmitForm}>
            <div className="form-group">
                <label>First Name</label>
                <input 
                    type="text" 
                    name="first_name" 
                    placeholder="First Name" 
                    value={first_name}
                    onChange={e => onChange(e)}
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                <label>Last Name</label>
                <input 
                    type="text" 
                    name="last_name" 
                    placeholder="Last Name" 
                    value={last_name}
                    onChange={e => onChange(e)}
                    className="form-control"
                    />
                </div>
                        
            <div className="d-grid gap-2">
                <button type="submit" onClick={onClick} className="btn btn-info btn-block mt-4"> Search for Author Information </button>
                    { showResults ? <Results /> : null }
            </div>
        </form>
    </div>
    </div>
    </div>
    )
}

export default AuthorSearchForm;


  

  