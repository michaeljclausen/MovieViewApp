class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: movies, listed: movies };
  }

  handleSearchClick(input) {
    let listed = this.state.movies.filter(movie => {
      if (movie.title.toUpperCase().startsWith(input.toUpperCase())) {
        return movie;
      }
    });
    this.setState({listed: listed});
  }

  addMovie(input) {
    if (!movies.title.includes(input)) {
      let movies = this.state.movies;
      movies.push({title: input});
      this.setState({movies: movies});
    }
    $('.add-movie-control').val('');
  }

  render() {
    return (
      <div>
        <div className="col-md-7">
          <h2>Movie List</h2>
          <AddMovie clickHandler={this.addMovie.bind(this)}/>
          <Search clickHandler={this.handleSearchClick.bind(this)}/>
          <MovieList movies={this.state.listed}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
