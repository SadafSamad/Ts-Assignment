interface Movie {
    title: string;
    year: number;
    director: string;
    cast: string[];
  }
  
  const myFavoriteMovie: Movie = {
    title: "jawan: jawan",
    year: 2023,
    director: "Kaleeswaran",
    cast: ["Amritha Aiyer", "Ashlesha Thakur", "Astha Agarwal"],
  };
  
  console.log("My favorite movie is:", myFavoriteMovie.title);
  