import { useState, useEffect } from "react";

const KEY = "4314e874";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //Why we don't set state in render logic
  // fetch(
  //   `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=interstellar`
  // ).then((res) => res.json().then((data) => setMovies(data.Search)));

  //hOW TO FETCH DATA ON MOUNT WITHOUT CAUSING INFINTE LOOP
  useEffect(
    function () {
      //   callback?.();
      const contoller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: contoller.signal }
          );

          if (!res.ok)
            throw new Error(`something went wrong while fetching movies`);

          const data = await res.json();

          if (data.Response === "False") throw new Error(`${data.Error}`);
          setMovies(data.Search);
          setError("");
        } catch (err) {
          // console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        contoller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
