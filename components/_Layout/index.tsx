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
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Movie Catalog
          </a>
          <Link href="/search" className="btn btn-ghost normal-case text-xl">
            Search Page
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
