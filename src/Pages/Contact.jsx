import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const serviceID = 'service_j4qubli';
    const templateID = 'template_wxwz9l7';
    const userID = 'e1VqdKL0DxMHcQYwc';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormMessage('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        setFormMessage('Failed to send the message. Please try again.');
      });

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-sky-800 transition duration-300">Submit</button>
        </form>
        <p className="mt-4 text-center text-red-700">{formMessage}</p>
      </div>
    </section>
  );
}

export default Contact;



