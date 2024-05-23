import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Services from './services';

const Index = () => {
  return (
    <>
    <div className="bg-white text-black min-h-screen flex justify-center items-start">
      <div className="p-4">
        <div className="py-40 flex justify-center items-center flex-col gap-8">
          <h2 className="text-4xl md:text-5xl text-[#333333] font-bold mb-8">What Is Your Formulaire For Today?</h2>
          <Link to="/form" className="block w-full">
            <button className="px-2 py-3 bg-purple-500 w-full outline-none hover:bg-purple-600 text-white font-semibold text-lg rounded-md">
              Create Formulaire
            </button>
          </Link>
        </div>
      </div>
    </div>
     <About />
     <Services />
  
     <Contact />
     </>
  );
}

export default Index;
