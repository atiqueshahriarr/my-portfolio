import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100  py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <img
              src="./Name.png"
              alt="Logo"
              className="mx-auto w-36"
            />
          </div>
          <p className="mb-2">Passionate web developer creating visually appealing and user-friendly interfaces.</p>
          <p className="mb-4">&copy; 2024 Atique Shahriar. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <a
                href="https://www.facebook.com"
                className="hover:underline">
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                className="hover:underline">
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                className="hover:underline">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
