import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/types";
import { Movie } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  //function for catch errors.
  const catcher = (error: Error) => res.status(400).json({ error });

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Movie } = await connect(); // connect to database
      res.json(await Movie.find({}).catch(catcher));
    },
    // RESPONSE FOR POST REQUESTS
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Movie } = await connect(); // connect to database
      const newMovie: Movie = req.body;
      res.json(await Movie.create(newMovie).catch(catcher));
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
