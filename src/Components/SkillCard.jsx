import PropTypes from "prop-types";

const SkillCard = ({icon, iconText, stage}) => {
  return (
    <div className="relative border flex flex-col gap-2 items-center justify-center max-h-32 h-svh hover:border-2 hover:border-[#ff00c8]">
      <img
        src={icon}
        alt={iconText}
        className="w-10"
      />
      <p>{iconText}</p>

      {stage ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-blue-900 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-center text-white font-medium">{stage}</p>
          </div>
        </>
      ) : (
        <></>
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
