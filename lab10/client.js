import Axios from 'axios';

Axios.get("http://localhost:45030/what?name=Tara"
.then(response => {
    console.log(response.data)
}));