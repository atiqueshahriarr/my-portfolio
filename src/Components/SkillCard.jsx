import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SkillCard = ({icon, iconText, stage}) => {
  return (
    <div
      className={`relative border flex flex-col gap-2 items-center justify-center h-24 w-28 
      ${stage ? "" : "hover:border-2 hover:border-blue-500 cursor-pointer"}`}>
      <img
        src={icon}
        alt={iconText}
        className="w-6"
      />
      <p>{iconText}</p>

      {stage && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <AiOutlineLoading3Quarters className="text-white text-2xl animate-spin" />
        </div>
      )}
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.string,
  iconText: PropTypes.string,
  stage: PropTypes.string,
};

export default SkillCard;
