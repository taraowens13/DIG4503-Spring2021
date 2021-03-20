import React from 'react';
import Axios from 'axios';

function Get() {
    const [searchName, setSearchName] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const getNames = (name) => {
      Axios.get("http://localhost:45030/search/" + name)
      .then(response => {
        console.log(response.data);
        setSearchResults(response.data.name);
      })
      .catch(error => {
        console.log("Error " + error);
      });
    };
  
    return (
      <div className="App">
        <button onClick ={() => getNames(searchName)}>Click me to test get!</button>
        {
          searchResults.map((value, index) => {
            return <p key={index}>{value}</p>
          })
        }
      </div>
    );
  }
  
  export default Get;
  