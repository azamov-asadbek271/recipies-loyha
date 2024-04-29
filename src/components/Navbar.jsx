import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
function Navbar() {
  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
        <Link to="/" className="btn btn-outline btn-secondary">
          MYK
        </Link>
        <div className="flex gap-8 items-center">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
            {/* sun icon */}
            <IoSunnyOutline className=" w-8 h-8 swap-on fill-current" />
            {/* moon icon */}
            <IoMoonOutline className=" w-8 h-8 swap-off fill-current" />
          </label>

          <Link
            to="/create"
            className="btn btn-outline btn-accent bg-base-100 "
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar