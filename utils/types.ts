// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Movie model on the frontend
export interface Movie {
  _id: string;
  title: string;
  description: string;
  poster: string;
  year: number;
  actors: string;
  genre: string;
  director: string;
  rating: number;
}
