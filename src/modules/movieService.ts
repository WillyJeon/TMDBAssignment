export async function getMovieList(pageNumber: number = 1) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export async function getMovieDetails(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export async function getMovieCredits(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
