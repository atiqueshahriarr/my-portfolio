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
            I am an innovative developer with a passion for exceeding my previous achievements. My primary focus is on the creation of visually appealing and user-friendly web interfaces. I emphasize delivering seamless user experiences through responsive design and intuitive navigation. I am
            passionate about solving complex challenges and delivering high-quality web solutions tailored to meet the unique needs of clients and end users. I am adaptable and a quick learner, dedicated to maintaining a strong work ethic. I excel in both team-based and self-motivated environments,
            consistently striving to improve and achieve exceptional results.
          </p>
        </div>
        <div className="max-w-56 ">
          <img
            src="./myPhoto.JPG"
            alt=""
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
