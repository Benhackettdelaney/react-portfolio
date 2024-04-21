import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ onHandleChange, search, project }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        navigate("/projects");
        onHandleChange(e);
    };

    return (
        <div className="navbar bg-orange-600 text-white">
            <div className="navbar-start">
                <div className="dropdown flex">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-900 rounded-box w-52">
                        <li><Link to='/' className="text-white">Home</Link></li>
                        <li><Link to='/about' className="text-white">About</Link></li>
                        <li><Link to='/projects' className="text-white">Projects</Link></li>
                        <li><Link to='/contact' className="text-white">Contacts</Link></li>
                    </ul>

                </div>
            </div>

            <div className="navbar flex justify-end">
                {location.pathname === "/projects" && (
                    <>
                        <input
                            placeholder="Enter project..."
                            className="bg-white border border-grey-500 rounded pl-2 h-8"
                            type="text"
                            onChange={handleChange}
                            value={search}
                        />
                    </>
                )}
                <Link to='/'><a href='' className="btn btn-ghost normal-case text-xl text-right">Portfolio</a></Link>
            </div>
        </div>
    );
};

export default NavBar;
