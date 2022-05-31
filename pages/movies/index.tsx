import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Movie = {
  title: string;
  image: string | undefined;
  rating: number | undefined;
};

const Movies: NextPage = () => {
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/movies");
      const movies = await res.json();
      setMovies(movies);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <div className="w-full h-full flex content-center ">
        <h1 className="">Movies</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.title}>
              <a href={`/movies/${movie.title}`}>{movie.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// const Movies: NextPage = () => {
//   const router = useRouter();
//   const { name } = router.query;
//   return (
//     <>
//       <Head>
//         <title>{name}</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <div className="text-center text-4xl ">Movies List page</div>
//         <div className="flex justify-center">
//           <div className="w-1/2">
//             <div className="flex flex-wrap">
//               {}
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer></footer>
//     </>
//   );
// };

export default Movies;