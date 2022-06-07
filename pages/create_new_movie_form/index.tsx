import { NextPage } from "next";
import Head from "next/head";
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

const CreateNewMovieForm: NextPage = () => {
  //POST /api/movies
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState(0);
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  //POST /api/movies

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
            onSubmit={(e) => {
              e.preventDefault();
              fetch("/api/movies", {
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
              })
                .then((res) => res.json())
                .then((data) => {
                  setMovies([...movies, data]);
                  setTitle("");
                  setDescription("");
                  setPoster("");
                  setYear(0);
                  setRating(0);
                  setGenre("");
                  setDirector("");
                  setActors("");
                });
            }}
          >
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="title">
                Title:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="text"
                id="title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="description">
                Description:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="text"
                id="description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="poster">
                Poster:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="text"
                id="poster"
                value={poster}
                required
                onChange={(e) => setPoster(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="year">
                Year:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="range min=1970 max=2055"
                id="year"
                value={year}
                required
                onChange={(e) => setYear(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="rating">
                Rating:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="range min=1 max=10"
                id="rating"
                value={rating}
                required
                onChange={(e) => setRating(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="genre">
                Genre:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="text"
                id="genre"
                value={genre}
                required
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="director">
                Director:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="text"
                id="director"
                value={director}
                required
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full">
              <label className="text-center" htmlFor="actors">
                Actors:
              </label>
              <input
                className="w-full h-auto bg-gray-500"
                type="text"
                id="actors"
                value={actors}
                required
                onChange={(e) => setActors(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 h-full border-4 border-y-2 border-green-800 m-10 ">
              <button className="w-full h-auto ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewMovieForm;
