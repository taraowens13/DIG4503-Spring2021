import Axios from 'axios';

function DeletePart() {

    const dltPart = async () => {
        const response = await Axios.delete("http://localhost:45030/books/9780375508325", {
            title: "Cosmos",
            author: "Carl Sagan",
            description: "explore the mutual development of science and civilization"
        });
        console.log(response.data);
    };

    return (
        <div>
            <p>Click this button</p>
            <button onClick={() => {dltPart()}}>Click me three!</button>
        </div>
    );
}

export default DeletePart;