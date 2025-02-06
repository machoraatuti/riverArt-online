// Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black p-4 text-center">
      <p>&copy; {new Date().getFullYear()} River-Art-Online. All rights reserved.</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-2x hover:text-blue-600"></i> {/* Facebook Icon */}
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x hover:text-blue-400"></i> {/* Twitter Icon */}
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-2x hover:text-pink-500"></i> {/* Instagram Icon */}
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x hover:text-blue-700"></i> {/* LinkedIn Icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
