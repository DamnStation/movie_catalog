import Link from "next/link";
import Search from "../Search";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

const _Layout = ({ children }: Props) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-xl">
              Movie Catalog
            </div>
          </Link>
          <Link href="/search">
            <div className="btn btn-ghost normal-case text-xl">Search Page</div>
          </Link>
          <Link href="/api/movies">
            <div className="btn btn-ghost normal-case text-xl">
              Get All Movie API
            </div>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Search />
        </div>
      </div>
      {children}
    </>
  );
};
export default _Layout;
