export async function getMovieList(pageNumber: number = 1) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`;

  const authKey = import.meta.env.VITE_AUTH_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${authKey}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  return data;
}
