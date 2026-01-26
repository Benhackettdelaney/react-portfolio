const NavBar = ({ onHandleChange, search }) => {
  return (
    <div className="navbar bg-stone-900 text-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown flex">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-900 rounded-box w-52">
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#projects" className="text-white">Projects</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-end flex gap-4 items-center">
        {/* Search always visible; it will still filter ProjectsIndex */}
        <input
          placeholder="Search projects..."
          className="bg-white text-black border border-grey-500 rounded pl-2 h-8"
          type="text"
          onChange={onHandleChange}
          value={search}
        />

        <a href="#home" className="btn btn-ghost normal-case text-xl">
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default NavBar;
