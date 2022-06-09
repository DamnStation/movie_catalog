import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Movie } from "../../utils/types";
import { connect } from "../../utils/connection";

const CreateNewMovieForm: NextPage = () => {
  //POST /api/movies
  const [movies, setMovies] = useState<Movie[]>([]);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [poster, setPoster] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [genre, setGenre] = useState<string>("");
  const [director, setDirector] = useState<string>("");
  const [actors, setActors] = useState<string>("");

  // Fetch POST function
  const postMovie = async () => {
    const response = await fetch("/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        poster,
        year,
        rating,
        genre,
        director,
        actors,
      }),
    });
    const data = await response.json();
    setMovies([...movies, data]);
  };

  return (
    <>
      <Head>
        <title>Create New Movie</title>
      </Head>
      <div className="w-full h-full  content-center ">
        <h1 className=" flex justify-center text-xl">Create New Movie</h1>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <form
            className="flex flex-col items-center justify-center w-full h-full"
            onSubmit={postMovie}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Title</label>
              <input
                className="flex justify-center text-xl"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Description</label>
              <input
                className="flex justify-center text-xl"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Poster</label>
              <input
                className="flex justify-center text-xl"
                type="text"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Year</label>
              <input
                className="flex justify-center text-xl"
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Rating</label>
              <input
                className="flex justify-center text-xl"
                type="number"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Genre</label>
              <input
                className="flex justify-center text-xl"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Director</label>
              <input
                className="flex justify-center text-xl"
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label className="flex justify-center text-xl">Actors</label>
              <input
                className="flex justify-center text-xl"
                type="text"
                value={actors}
                onChange={(e) => setActors(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <button className="flex justify-center text-xl">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewMovieForm;
