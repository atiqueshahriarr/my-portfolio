import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdCodeDownload } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "React Developer", "Software Developer"],
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 60,
    delay: 2000,
  });

  return (
    <div
      id="home"
      className="h-[550px] w-full relative flex items-center justify-center mt-16"
      style={{
        backgroundImage: "url(https://png.pngtree.com/background/20220729/original/pngtree-abstract-white-and-light-gray-wave-modern-soft-luxury-texture-with-picture-image_1859943.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="hero-overlay bg-opacity-5 absolute inset-0"></div>
      <div className="text-center relative z-10 flex flex-col items-center">
        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-black leading-normal md:leading-normal">
          Hey, I&apos;m Md. Atique Shahriar, <br /> I&apos;m <span className="text-[#7f39ee]">{text}</span>
          <Cursor
            cursorStyle="_"
            cursorColor="#7f39ee"
          />
        </h1>
        <p className="mb-5"></p>
        <div className="flex gap-6">
          <a
            href="./Web_Developer_Resume_of_Md. Atique Shahriar Resume.pdf"
            download
            className="btndesign flex items-center gap-2 hover:w-36 justify-center w-32 h-12 relative text-white font-semibold hover:bg-white bg-black hover:text-black">
            Resume <IoMdCodeDownload className="text-2xl" />
          </a>
          <a
            href="#projects"
            className="btndesign flex items-center justify-center gap-2 hover:w-36 w-32 h-12 relative text-white font-semibold hover:bg-white bg-black hover:text-black">
            Projects <IoCodeSlash className="text-xl" />
          </a>
        </div>
        <div className="flex mt-8">
          <div className="hidden md:flex  gap-4">
            <div className="btnAnimation w-32 h-12 flex items-center justify-center">
              <a
                href="https://www.facebook.com/atiqueshahriarr"
                className="z-10 gap-2 flex items-center justify-center">
                <FaFacebook className="text-2xl" /> Facebook
              </a>
            </div>
            <div className="btnAnimation w-32 h-12 flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/atiqueshahriarr/"
                className="z-10 gap-2 flex items-center justify-center">
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </div>
            <div className="btnAnimation w-32 h-12 flex items-center justify-center">
              <a
                href="https://github.com/atiqueshahriarr"
                className="z-10 gap-2 flex items-center justify-center">
                <FaGithub className="text-2xl" /> Github
              </a>
            </div>
            <div className="btnAnimation w-32 h-12 flex items-center justify-center">
              <a
                href="https://wa.me/+8801311330653"
                className="z-10 gap-2 flex items-center justify-center">
                <FaWhatsapp className="text-2xl" /> Whatsapp
              </a>
            </div>
          </div>

          <div className="flex gap-4 text-2xl md:hidden ">
            <a href="https://www.facebook.com/atiqueshahriarr">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/atiqueshahriarr/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/atiqueshahriarr">
              <FaGithub />
            </a>
            <a href="https://wa.me/+8801311330653">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
