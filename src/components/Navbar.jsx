import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
        <Link to="/" className="btn btn-outline btn-secondary">MYK</Link>
        <Link to="/create" className="btn btn-outline btn-accent bg-base-100 ">
          Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar