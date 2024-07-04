import PropTypes from "prop-types";
const MiddleTitle = ({titleName}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <span className="block w-28 border-t border-blue-500"></span>
      <span className="bg-blue-500 w-40 text-center py-1 font-semibold text-2xl text-white">{titleName}</span>
      <span className="block w-28 border-t border-blue-500"></span>
    </div>
  );
};

MiddleTitle.propTypes = {
  titleName: PropTypes.string,
};

export default MiddleTitle;
