const Navbar = () => {

    return (

            <div className=" flex gap-24 absolute top-0 right-44 opacity-100 z-20 bg-transparent bg-opacity-60 text-white p-4  ">
                <a
                  href={`#$profile`}
                  className="relative opacity-100 ms-10 font-normal text-lg  text-blue-50 hover:text-gray-50
                   after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full 
                   after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300
                   after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer;"
                >
                  Profile
                </a>

                <button className="bg-white h-7 w-20 text-black rounded-xl hover:bg-gray-400 ">
                       Sign Up
                </button>

            </div>

    );
}

export default Navbar;
