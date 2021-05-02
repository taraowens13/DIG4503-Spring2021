class FindMovie {
    constructor(movie) {
      this.movie = movie;
    }
  
  passMovie(){
    return (
      <div className="container-2">
          <p>Movie: <b>{this.movie.title}</b></p>
          <p>Year: <b>{this.movie.year}</b></p>
          <button>Add to List</button>
      </div>
    )
  }
  
  }
  
  export default FindMovie
  