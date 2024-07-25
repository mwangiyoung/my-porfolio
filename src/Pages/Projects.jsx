import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-300 h-[150vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-sky-800 font-bold text-center mb-8">MY<span className='text-green-600'>Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Medicare Project</h3>
            <p className='mb-3'>To access the project live use this <span className='cursor-pointer text-sky-300'><a href='https://mwangiyoung.github.io/medicare/' >link</a></span></p>
            <img src='src/assets/images/medicare.png' alt="Medicare Project" className="rounded-lg mb-4"/>
            <h2 className='font-medium mb-2'>DESCRIPTION</h2>
            <p className="text-gray-700 text-2xl">Medicare is a website for an innovative medical company. Clients can visit and learn more about their treatment and services they offer.</p>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Sustainable Palace</h3>
            <p className='mb-3'>To access the project live use this <span className='cursor-pointer text-sky-300'><a href='https://mwangiyoung.github.io/sustainable-palace/'>link</a></span></p>
            <img src='src/assets/images/Sustainable.png' alt="Sustainable Palace" className="rounded-lg mb-4"/>
            <h2 className='font-medium mb-2'>DESCRIPTION</h2>
            <p className="text-gray-700 text-2xl">Sustainable Palace is a website for buying casual clothes and jewelry. You can visit the site for more information.</p>
          </div>
          <div className="project bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2">Easy Pay</h3>
            <p className='mb-3'>To access the project live use this <span className='cursor-pointer text-sky-300'><a href='https://zulfero.github.io/easy-pay/'>link</a></span></p>
            <img src='src/assets/images/Easypay.png' alt="Easy Pay" className="rounded-lg mb-4"/>
            <h2 className='font-bold mb-2'>DESCRIPTION</h2>
            <p className="text-gray-700 text-2xl">This project is about an app that helps both parents, teachers, and students concerning the issue of school fees.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;


