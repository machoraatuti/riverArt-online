//Contact.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <SubHeader current="Contact" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-indigo-900 dark:from-gray-950 dark:to-indigo-950 min-h-[50vh] flex flex-col items-center justify-center text-center text-white px-6">
        <div className="relative z-20 max-w-3xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-200 dark:text-gray-300 drop-shadow-md">
            Have a question? Want to collaborate? Send us a message and we'll get back to you soon!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white dark:bg-gray-800 flex flex-col text-center items-center justify-center py-12 px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>

        <form 
          onSubmit={handleSubmit} 
          className="bg-gray-100 dark:bg-gray-700 shadow-md text-center rounded-lg p-8 w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-900 dark:text-white font-bold">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring focus:ring-indigo-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 dark:text-white font-semibold">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring focus:ring-indigo-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 dark:text-white font-semibold">Message</label>
            <textarea 
              name="message" 
              rows="4"
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-indigo-600 text-black dark:text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-full shadow-lg transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;