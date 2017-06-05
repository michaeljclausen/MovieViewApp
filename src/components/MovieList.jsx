var MovieList = (props) => {
  if (props.movies.length > 0) {
    return (
      <div>
        <h2>MovieList</h2>
        <div>
          {props.movies.map((movie, index) => (
            <MovieListEntry movie={movie} key={index} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>MovieList</h2>
        <div>
          No matching movies.
        </div>
      </div>
    );
  }
 
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.MovieList = MovieList;