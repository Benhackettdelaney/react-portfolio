import { Link } from "react-router-dom";

const NavBavr = () => {
    return(
        <div>
            <Link to ="/">Home</Link>|
            <Link to ="/about">About</Link>
        </div>
    );
};

export default NavBavr;