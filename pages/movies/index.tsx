import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Movie } from "../../utils/types";

const Movies: NextPage = () => {
  // Get all movies from the database
  const [movies, setMovies] = useState<Movie[]>([]);

  const router = useRouter();
  const { id } = router.query;

  // Fetch async all movies from the database
  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // Delete a movie from the database
  const deleteMovie = (id: string) => {
    fetch(`/api/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) // Get the response from the server
      .then((data) => {
        // Update the movies array
        setMovies(movies.filter((movie) => movie._id !== id));
      });
  };

  // Edit movie by id
  const editMovie = (id: string) => {
    router.push(`/movies/edit/${id}`);
  };

  // Render all movies
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>

      {movies.map((movie) => (
        <div className="card card-normal bg-base-100 shadow-xl">
          <figure className="card-body text-center">
            <img src={movie.poster} alt={movie.title} />
          </figure>
          <div className="card-body text-center">
            <label className="card-subtitle">
              <h2 className="text-3xl text-gray-200">{movie.title}</h2>
            </label>
            <label className="card-subtitle">
              <div className="text-xl text-gray-300">Description:</div>
              <p>{movie.description}</p>
            </label>
            <label className="card-subtitle">
              <div className="text-xl text-gray-300">Release date:</div>
              <p>{movie.year}</p>
            </label>
            <label className="card-subtitle">
              <div className="text-xl text-gray-300">Rating: </div>
              <p>{movie.rating}</p>
            </label>
            <label className="card-subtitle ">
              <div className="text-xl text-gray-300">Genre: </div>
              <p>{movie.genre}</p>
            </label>
            <label className="card-subtitle ">
              <div className="text-xl text-gray-300">Director: </div>
              <p>{movie.director}</p>
            </label>
            <label className="card-subtitle ">
              <div className="text-xl text-gray-300 ">Actors: </div>
              <p>{movie.actors}</p>
            </label>

            <div className="card-actions justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => editMovie(movie._id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteMovie(movie._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
