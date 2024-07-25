import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-300 h-[100vh]">
      <div className="container mx-auto px-4 flex items-center justify-around">
        <div>

        <h2 className="text-3xl font-bold  text-sky-800 text-center mb-8">About <span className='text-green-600'>Me</span> </h2>

        <p className="text-lg text-gray-800 text-center">
          Hi, I'm <span className="text-sky-800 font-bold">[STEPHEN MWANGI]</span>. I have experience in HTML, CSS, and JavaScript.<br/> I enjoy building user-friendly and responsive websites.
        </p>
        </div>
      <div className='bg-[url("src/assets/images/IMG_0779.jpg")]  bg-no-repeat bg-cover bg-center h-2 p-[15em] w-[50px] mt-7 rounded-full'>

      </div>
        </div>

      
    </section>
  );
};

export default About;

