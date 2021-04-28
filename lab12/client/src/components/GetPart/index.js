import Axios from 'axios';

function GetPart() {

    const getPart = async () => {
        const response = await Axios.get("http://localhost:45030/books/9780375508325", {
            title: "Cosmos",
            author: "Carl Sagan",
            description: "explore the mutual development of science and civilization"
        });
        console.log(response.data);
    };

    return (
        <div>
            <p>Then click this button</p>
            <button onClick={() => {getPart()}}>Click me too!</button>
        </div>
    );
}

export default GetPart;