import Axios from 'axios';

function CreatePart() {

    const putPart = async () => {
        const response = await Axios.put("http://localhost:45030/books/9780375508325", {
            title: "Cosmos",
            author: "Carl Sagan",
            description: "explore the mutual development of science and civilization"
        });
        console.log(response.data);
    };

    return (
        <div>
            <p>Click this button</p>
            <button onClick={() => {putPart()}}>Click me!</button>
        </div>
    );
}

export default CreatePart;