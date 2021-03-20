import React, { useState } from 'react';
import Axios from 'axios';

function Put() {

    const [additionalName, setAdditionalName] = useState("");
    const [searchName, setSearchName] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const putName = (name) => {
      Axios.put("http://localhost:45030/names/" + name)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error " + error);
      });
    };
  
    return (
      <div className="App">
        <input type="text" onChange={(event) => setAdditionalName(event.target.value)} />
        <button onClick ={() => putName(additionalName)}>Click me to test put!</button>
        <input type="text" onChange={(event) => setSearchName(event.target.value)} />
        <button onClick ={() => getNames(searchName)}>Click me to test get!</button>
        {
          searchResults.map((value, index) => {
            return <p key={index}>{value}</p>
          })
        }
      </div>
    );
  }
  
  export default Put;