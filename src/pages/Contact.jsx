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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SubHeader current="Contact" />

      {/* Hero Section */}
      <section className="relative bg-warning min-h-[50vh] flex flex-col items-center justify-center text-center text-white px-6">
        <div className="relative z-20 max-w-3xl">
          <h1 className="text-5xl text-black font-extrabold drop-shadow-lg">Get in Touch</h1>
          <p className="mt-4 text-xl text-black drop-shadow-md">
            Have a question? Want to collaborate? Send us a message and we'll get back to you soon!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-warning flex flex-col text-center items-center justify-center py-12 px-6">
        <h2 className="text-4xl font-bold bg-warning text-gray-900 mb-6">Contact Us</h2>

        <form 
          onSubmit={handleSubmit} 
          className="bg-whitesmoke shadow-md text-center rounded-lg p-8 w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-black font-bold">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold">Message</label>
            <textarea 
              name="message" 
              rows="4"
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-md focus:ring focus:ring-indigo-300"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-success text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-full"
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
