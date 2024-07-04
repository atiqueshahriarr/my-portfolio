import { useEffect, useState } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos && currentScrollPos > 700;
      setVisible(!isScrolledDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth"});
    }
  };

  const navItems = (
    <>
      <li>
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}>
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}>
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={(e) => handleNavClick(e, "skills")}>
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}>
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          onClick={(e) => handleNavClick(e, "education")}>
          Education
        </a>
      </li>
    </>
  );

  return (
    <div className={`${visible ? "" : "hidden"}`}>
      <div className="bg-white">
        <div className="navbar navbarAnimation top-14 md:top-8">
          <div className="w-4/5 mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {navItems}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">
                <img
                  src="./Name.png"
                  alt=""
                  className="w-32"
                />
              </a>
            </div>
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="">
              <a className="btn">Theme</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
