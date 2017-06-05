var MovieListEntry = (props) => (
  <div className="movie-list-entry">
    <div className="media-body">
      <div className="movie-list-entry-title">{props.movie.title}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
