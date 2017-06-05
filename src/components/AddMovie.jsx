var AddMovie = (prop) => {
  return (
  <div className="add-movie" >
    <input className="add-movie-control" type="text" placeholder="Add movie titles here"/>
    <button className="btn add-btn" onClick={() => prop.clickHandler($('.add-movie-control').val())}>Add Movie</button>
  </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.AddMovie = AddMovie;
