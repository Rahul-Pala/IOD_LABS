function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
    {
        title: "Titanic",
        year: 1997,
        synopsis: "ship.",
      },
  ];
  return (
    <div className="MoviesList componentBox">
      <ul> {/* iterate over each movie, print the title in a list */}
        {movies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
      <ul>
      {movies.map((movie) => (
          <li key={movie.year}>{movie.year}</li> 
      ))} {/* ADDED KEY PROP */}
      </ul>
      <ul>
      {movies.map((movie) => (
          <li key={movie.synopsis}>{movie.synopsis}</li>
      ))}
      </ul>
    </div>
  );
}

export default MoviesList