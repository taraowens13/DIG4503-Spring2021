import Axios from 'axios';

function DeleteMovie() {

    const dltMovie = async () => {
        const response = await Axios.delete("http://localhost:45030/movies/id", {
            title: "Test",
            description: "Words"
        });
        console.log(response.data);
    };

    return (    
        <div>
            <button
                classsName= "save"
                onClick = {()=> {dltMovie()}}>Delete from list
            </button>
        </div>
    )
}

export default DeleteMovie;