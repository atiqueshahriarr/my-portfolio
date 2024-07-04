import MiddleTitle from "../Components/MiddleTitle";

const Education = () => {
  return (
    <div
      id="Education"
      className="w-4/5 mx-auto my-10">
      <MiddleTitle titleName={"Education"}></MiddleTitle>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-10">
        <li>
          <div className="timeline-middle  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:mb-10 md:text-end">
            <time className="font-mono italic">2016–2017</time>
            <div className="text-lg font-black">Secondary School Certificate</div>
            <p className="text-gray-600">A.K High School</p>
            <p className="text-gray-600">GPA: 5.00 out of 5.00</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2017–2018</time>
            <div className="text-lg font-black">Higher Secondary School Certificate</div>
            <p className="text-gray-600">Dhaka College</p>
            <p className="text-gray-600">GPA: 5.00 out of 5.00</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020–2024</time>
            <div className="text-lg font-black">BSc. in Computer Science & Engineering</div>
            <p className="text-gray-600">Daffodil International University</p>
            <p className="text-gray-600">CGPA: 3.95 out of 4.00</p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
