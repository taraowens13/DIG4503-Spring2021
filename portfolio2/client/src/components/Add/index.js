import Axios from 'axios';

function AddMovie() {

    const putMovie = async () => {
        const response = await Axios.put("http://localhost:45030/movies/id", {
            title: "Test",
            description: "Test"
        });
        console.log(response.data);
    };

    return (    
        <div>
            <button
                classsName= "save"
                onClick = {()=> {putMovie()}}>Add to List
            </button>
        </div>
    )
}

export default AddMovie;
