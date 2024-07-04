import PropTypes from "prop-types";
import { RiSlideshow3Line } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";

const ProjectCard = ({image, title, description, liveLink, codeLink, tools}) => {
  return (
    <div className="p-4 border  rounded-lg">
      <div className="project-image">
        <img
          src={image}
          alt=""
          className="w-full border shadow-sm rounded-lg"
        />
      </div>
      <div className="mt-3 px-2">
        <div className="flex justify-between items-center mb-2">
          <h6 className="font-semibold text-xl text-[#111827] font-mont">{title}</h6>
          {tools ? (
            <>
              {" "}
              <div className="flex gap-1 items-center rounded-md">
                {tools.map((tool, index) => (
                  <img
                    key={index}
                    src={tool}
                    alt=""
                    className="w-7 border p-[3px] rounded-[100%]"
                  />
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <p className="text-justify">{description}</p>

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="btnProject w-32 h-12 flex items-center justify-center">
            <a
              href={codeLink}
              className="z-10 gap-2 flex items-center justify-center"
              target="_blank">
              See Details
              <VscGithub />
            </a>
          </div>
          <div className="btnProject w-32 h-12 flex items-center justify-center">
            <a
              href={liveLink}
              className="z-10 gap-2 flex items-center justify-center"
              target="_blank">
              Preview
              <RiSlideshow3Line />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  liveLink: PropTypes.string,
  codeLink: PropTypes.string,
  tools: PropTypes.array,
};

export default ProjectCard;
