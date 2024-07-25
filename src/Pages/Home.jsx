import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('#typed', {
      strings: ["Welcome to My Portfolio", "I'm a software developer specialized in web development."],
      typeSpeed: 80,
      backSpeed: 35,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <section
      className='h-[100vh] text-center py-60 bg-[url("src/assets/images/pexels-8moments-1266810.jpg")] bg-no-repeat bg-cover bg-center'
      id="home"
    >
      
      <h1 className='text-sky-800 font-bold text-3xl'>
        Welcome to <span className='text-green-600'>My Portfolio</span>
      </h1>
      <p className='text-2xl text-white'>
        <span id="typed"></span>
      </p>
      <div className='flex-row'>
        <div>

      <button className='bg-green-600 text-white py-2 px-4 rounded mt-8' ><a  href="/projects">  Projects</a></button>
        </div>
<div>

      <button className='bg-sky-800 text-white py-2 px-4 rounded mt-8' > <a  href="/contact"> Contact</a> </button>
</div>
      </div>
        
 
    </section>
  );
};

export default Home;

