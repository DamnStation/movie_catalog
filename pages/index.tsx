import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Favorites from "../components/Favorites";
import Divider from "../components/Divider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movie Catalog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Divider />
        <div className="text-center text-4xl ">Favorites</div>
        <Favorites />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
