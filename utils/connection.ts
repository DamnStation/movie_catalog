//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  // Movie SCHEMA
  const MovieSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    poster: String,
    year: Number,
    rating: Number,
    genre: [
      {
        _id: String,
        name: String,
        director: String,
      },
    ],
    actors: [
      {
        name: String,
        role: String,
      },
    ],
  });

  // OUR Movie MODEL
  const Movie = mongoose.models.Movie || mongoose.model("Movie", MovieSchema);

  return { conn, Movie };
};
