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
    title: String,
    description: String,
    poster: String,
    year: Number,
    actors: String,
    genre: String,
    director: String,
    rating: Number,
  });

  // OUR Movie MODEL
  const Movie = mongoose.models.Movie || mongoose.model("Movie", MovieSchema);

  return { conn, Movie };
};
