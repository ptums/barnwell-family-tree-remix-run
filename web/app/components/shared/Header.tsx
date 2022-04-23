import { Link } from "@remix-run/react";
const Header = () => (
  <div className="border-b border-blue-500">
    <div className="flex flex-col py-5">
      <div className="text-center">
        <Link to="/">
          <h1 className="text-4xl font-bold">Barnwell Family Tree</h1>
        </Link>
        <h2 className="text-base">
          The family line of John Joseph Barnwell &amp; Anna Regina Herbert
        </h2>
      </div>
    </div>
  </div>
);

export default Header;
