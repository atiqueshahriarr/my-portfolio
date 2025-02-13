import MiddleTitle from "../Components/MiddleTitle";

const About = () => {
  return (
    <div
      id="about"
      className="w-4/5  mx-auto my-10">
      <MiddleTitle titleName={"About Me"}></MiddleTitle>
      <div className="flex md:flex-row flex-col-reverse mt-6 gap-6 md:gap-24 lg:gap-40 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-3 text-center md:text-left">Who I Am?</h3>
          <p className="text-justify leading-normal">
            I’m a Junior 𝗪𝗲𝗯 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 👨‍💻 skilled in 𝗳𝗿𝗼𝗻𝘁𝗲𝗻𝗱 technologies like TailwindCSS, JavaScript, React.js and currently expanding my knowledge in 𝗯𝗮𝗰𝗸𝗲𝗻𝗱 development with Node.js, Express.js, MongoDB, and Firebase.
            <div className="my-2">
              I’m 𝗮𝗱𝗮𝗽𝘁𝗮𝗯𝗹𝗲 and a 𝗾𝘂𝗶𝗰𝗸 𝗹𝗲𝗮𝗿𝗻𝗲𝗿, always eager to enhance my skill set with technologies like TypeScript, Next.js, and more. I thrive in dynamic, fast-paced environments and am committed to delivering high-quality web applications that focus on performance, security, and user
              experience.
            </div>
            With a solid foundation in both front-end and back-end development, I enjoy tackling complex challenges and collaborating with teams to create innovative, user-centric software solutions.
            <br />
            <div className="mt-4">Let’s connect and collaborate on building exceptional web solutions!🌟</div>
          </p>
        </div>
        <div className="max-w-56 ">
          <img
            src="./myPhoto (4).jpg"
            alt=""
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
