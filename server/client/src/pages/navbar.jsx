import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [type, setType] = useState('');
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setShow(false);
  };

  const handleSignInClick = () => {
    setType('signin');
    setShow(true);
  };

  const handleSignUpClick = () => {
    setType('signup');
    setShow(true);
  };

  const handleGoogleSignUp = () => {
    console.log('Signing up with Google');
  };

  const handleFacebookSignUp = () => {
    console.log('Signing up with Facebook');
  };

  return (
    <div>
      {show && (
        <div className="w-screen visible opacity-100 transition-all duration-500 h-screen fixed flex justify-center items-center">
          <div className="w-[350px] bg-white bg-opacity-50 m-auto px-6 py-4 rounded-md relative">
            <div onClick={() => setShow(false)} className="absolute right-4 top-4 text-xl cursor-pointer text-black"><IoMdClose /></div>
            <h2 className="text-black font-bold text-center">{type === 'signin' ? 'Login' : 'Sign Up'}</h2>
            {type === 'signin' && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 text-black">
                 <label htmlFor="email" className="text-black">Email</label>
                 <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={state.email}
                    onChange={handleInputChange}
                    className="px-3 py-2 rounded-md border border-black outline-none bg-transparent text-black"
                 />
                 <label htmlFor="password" className="text-black">Password</label>
                 <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={state.password}
                    onChange={handleInputChange}
                    className="px-3 py-2 rounded-md border border-black outline-none bg-transparent text-black mb-4" // Ajout de mb-4 pour la marge en bas
                 />
                </div>
                <div className="mt-4">
                 <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">Sign in</button>
                </div>
                <div className="my-2"></div>
                <div className="flex py-4 justify-between items-center px-3">
                 <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                 <div className="w-[6%] text-center flex pb-1 px-1">or</div>
                 <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                </div>
                <div className="pb-4">
                 <button onClick={handleGoogleSignUp} className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800">
                    <span><AiOutlineGoogle/></span>
                    <span>Sign In with Google</span>
                 </button>
                </div>
                <div>
                 <button onClick={handleFacebookSignUp} className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800">
                    <span><FaFacebookF/></span>
                    <span>Sign In with Facebook</span>
                 </button>
                </div>
              </form>
            )}
            {type === 'signup' && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 text-black">
                 <label htmlFor="name" className="text-black">Name</label>
                 <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={state.name}
                    onChange={handleInputChange}
                    className="px-3 py-2 rounded-md border border-black outline-none bg-transparent text-black"
                 />
                 <label htmlFor="email" className="text-black">Email</label>
                 <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    value={state.email}
                    onChange={handleInputChange}
                    className="px-3 py-2 rounded-md border border-black outline-none bg-transparent text-black"
                 />
                 <label htmlFor="password" className="text-black">Password</label>
                 <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={state.password}
                    onChange={handleInputChange}
                    className="px-3 py-2 rounded-md border border-black outline-none bg-transparent text-black mb-4" // Ajout de mb-4 pour la marge en bas
                 />
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">Sign Up</button>
                </div>
                <div className="my-2"></div>
                <div className="flex py-4 justify-between items-center px-3">
                  <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                  <div className="w-[6%] text-center flex pb-1 px-1">or</div>
                  <div className="w-[45%] h-[1px] bg-[#434449]"></div>
                </div>
                <div className="pb-4">
                  <button onClick={handleGoogleSignUp} className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800">
                    <span><AiOutlineGoogle/></span>
                    <span>Sign Up with Google</span>
                  </button>
                </div>
                <div>
                  <button onClick={handleFacebookSignUp} className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800">
                    <span><FaFacebookF/></span>
                    <span>Sign Up with Facebook</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Barre de navigation */}
      <div className="bg-white shadow-md p-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12">
            <a href="/">
    <img
        className="w-full h-full"
        src="https://th.bing.com/th/id/R.01eab780618cb688af2bfa044cf2af5a?rik=72bTO7biDcLEoA&pid=ImgRaw&r=0"
        alt="notfound"
    />
</a>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                to="/about"
                className="text-blue-500 hover:text-blue-600 transition-all font-medium">
                A Propos
              </Link>
              <Link
                to="/services"
                className="text-blue-500 hover:text-blue-600 transition-all font-medium">
                Services
              </Link>
              <Link
                to="/contact"
                className="text-blue-500 hover:text-blue-600 transition-all font-medium">
                Contact Us
              </Link>
            </div>
            <div className="flex">
              <button onClick={handleSignInClick} className="bg-blue-900 text-white hover:bg-blue-700 transition-all font-medium px-3 py-2 rounded-md mr-2">Sign In</button>
              <button onClick={handleSignUpClick} className="bg-blue-900 text-white hover:bg-blue-700 transition-all font-medium px-3 py-2 rounded-md mr-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;