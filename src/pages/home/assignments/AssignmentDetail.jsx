import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const AssignmentDetail = () => {
  const detailAssignment = useLoaderData();
  console.log(detailAssignment);
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    date,
    subject,
    description,
    thumbnail_url,
    difficulty_level,
  } = detailAssignment || {};

  // const selected = {
  //   title,
  //   subject,
  //   date,
  //   description,
  //   thumbnail_url,
  //   difficulty_level,
  //   email: user?.email,
  // };
  // const handleSelect = () => {
  //   fetch('https://grade-miners-server.vercel.app/selected', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(selected),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // };

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-center lg:my-10 lg:text-4xl font-bold my-5">
        Assignment details
      </h1>
      <div className="relative  lg:flex w-full md:w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative  lg:w-2/5  m-0 overflow-hidden text-gray-700 bg-white lg:rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={thumbnail_url}
            alt="image"
            className="object-cover  lg:w-full lg:h-full md:w-96 md:h-80"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500 uppercase">
            {subject}
          </h6>
          {/* <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {subject}
          </h4> */}
          <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
          <div className="card-actions  lg:mb-10 justify-between">
            <div>
              <h4 className="">
                Mark: <span className="font-medium">100</span>
              </h4>
              <h3>
                Date: <span className="font-medium">{date}</span>
              </h3>
            </div>
            <h4 className="">
              Level: <span className="font-medium">{difficulty_level}</span>
            </h4>
          </div>

          <div className="flex justify-center ">
            <Link to="/take-assignment">
              <button
                // onClick={handleSelect}
                className="btn bg-green-600 text-white md:mt-5 lg:mt-14"
              >
                Take assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
