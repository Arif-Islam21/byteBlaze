import { NavLink } from "react-router-dom";
import animationSvg from "../../../public/waveanimation.svg";

const Hero = () => {
  return (
    <div>
      <div className="hero relative  min-h-[calc(100vh-135px)] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">
              Welcome to{" "}
              <span className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>
            </h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div>
              <NavLink>
                <a
                  href="#_"
                  className="relative mr-4 inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                  <span className="relative text-black group-hover:text-white">
                    Read Blogs
                  </span>
                </a>
              </NavLink>
              <NavLink to={"/module"}>
                <button className="relative inline-block px-4 py-2 font-medium group">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                  <span className="relative text-black group-hover:text-white">
                    Bookmarks
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 left-0 w-full"
          src={animationSvg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
