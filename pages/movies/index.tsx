import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

type Movie = {
  _id: string;
  title: string;
  description: string;
  poster: string;
  year: number;
  rating: number;
  genre: {
    _id: string;
    name: string;
  }[];
  director: string;
  actors: {
    name: string;
    role: string;
  }[];
};
const Movies: NextPage = () => {
  // Get all movies from the database
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch all movies from the database
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

  // Render all movies
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <div className="w-full h-full flex content-center ">
        <h1 className="">Movies</h1>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img src={movie.poster} alt={movie.title} />
                <div className="text-center text-4xl ">{movie.poster}</div>
                <div className="text-center text-4xl ">{movie.title}</div>
                <div className="text-center text-4xl ">{movie.description}</div>
                <div className="text-center text-4xl ">{movie.year}</div>
                <div className="text-center text-4xl ">{movie.rating}</div>
                <div className="text-center text-4xl ">{movie.director}</div>
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteMovie(movie._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
