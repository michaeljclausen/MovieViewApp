class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: movies };
  }

  render() {
    return (
      <div>
        <div className="col-md-7">
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
