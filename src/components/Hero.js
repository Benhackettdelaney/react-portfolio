import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div className="hero min-h-screen bg-base-200  px-4">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div>
      <h1 className="text-5xl font-bold mb-12">Ben Hackett Delaney Portfolio</h1>
      <p className="text-2xl py-2 mb-5">Welcome to my portfolio.</p>
      <p className="text-1xl py-2">On the top right of the nav bar is a menu you can use to navigate through the website to see <Link className='text-blue-400 underline' to={'/projects'}>Projects</Link> to see all the projects i have done over the years. </p>
      <p className="text-1xl py-2">to see all the project get to know details about me check out the <Link className='text-blue-400 underline' to={'/about'}>About</Link> page to learn more about me</p>
      <p className="text-1xl py-2">If you would like to get in <Link className='text-blue-400 underline' to={'/contact'}>Contact</Link> with me you can navigate to the page through the menu or through the link.</p>
    </div>
  </div>
  
</div>

    );
};

export default Hero;