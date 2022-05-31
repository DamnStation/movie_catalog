import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  //connect to database
  const { conn, Movie } = await connect();

  //get the movie id from the url
  const id = req.query.id as string;

  //get the movie from the database
  const movie = await Movie.findById(id);

  //if the request method is GET, return the movie
  if (method === "GET") {
    res.json(movie);
  }

  //if the request method is PUT, update the movie
  if (method === "PUT") {
    const {
      title,
      description,
      image,
      year,
      actors,
      genre,
      director,
      favorite,
      rating,
    } = req.body;
    await Movie.findByIdAndUpdate(id, {
      title,
      description,
      image,
      year,
      actors,
      genre,
      director,
      favorite,
      rating,
    });
    res.json({ message: "Movie Updated" });
  }

  //if the request method is DELETE, delete the movie
  if (method === "DELETE") {
    await Movie.findByIdAndDelete(id);
    res.json({ message: "Movie Deleted" });
  }
};

export default handler;
