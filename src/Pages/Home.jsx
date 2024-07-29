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
    className='h-[105vh]  text-center bg-slate-200 py-30 '
    id="home"
    >
      <div className='flex justify-around items-center'>
      <div>   
      <h1 className='text-sky-800 font-bold text-3xl'>
        Welcome to <span className='text-green-600'>My Portfolio</span>
      </h1>
      <p className='text-2xl text-black'>
        <span id="typed"></span>
      </p>
      <div className='flex-row ml-4'>
        <div>

      <button className='bg-green-600 text-white py-2 px-4 rounded mt-8' ><a  href="/projects">  Projects</a></button>
        </div>
<div>

      <button className='bg-sky-800 text-white py-2 px-4 rounded mt-8' > <a  href="/contact"> Contact</a> </button>
</div>

      </div>
      
      </div>
      <div className='bg-[url("src/assets/images/IMG_0779.jpg")]  bg-no-repeat bg-cover bg-center h-2 p-[15em] w-[50px] mt-7 rounded-full'>

</div>
        
 
    </div>

    <div>

<h2 className="text-3xl font-bold  text-sky-800 text-center mb-8">About <span className='text-green-600'>Me</span> </h2>

<p className="text-lg text-gray-800 text-center">
  Hi, I'm <span className="text-sky-800 font-bold">[STEPHEN MWANGI]</span>. I have experience in HTML, CSS, JavaScript,MongoDB and Nodejs.<br/> I enjoy building user-friendly and responsive websites.
</p>
</div>
    </section>

  );
};

export default Home;

