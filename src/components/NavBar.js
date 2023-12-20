import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
const NavBavr = ({onHandleChange, search}) => {
const navigate= useNavigate();
const location = useLocation();

const handleChange = (e) => {
  navigate("/projects");
  onHandleChange(e);
};
    return(
        <div className="navbar bg-base-100 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/contact'>Contacts</Link></li>
            </ul>
          </div>
        </div>
        {location.pathname === "/projects" && (
            <>
              <input
                placeholder="Enter project..."
                className="bg-white  border border-grey-500 rounded mr-3 pl-2 h-8"
                type="text"
                onChange={handleChange}
                value={search}
              />
            </>
          )}
        <div className="navbar-center mr-5">
         <Link to='/'> <a href='' className="btn btn-ghost normal-case text-xl text-white">Ben</a></Link>
        </div>
      </div>
    );
};

export default NavBavr;