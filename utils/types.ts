// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Movie model on the frontend
export interface Movie {
  title: String;
  description: String;
  image: String;
  year: Number;
  actors: String;
  genre: String;
  director: String;
  favorite: Boolean;
  rating: Number;
}
