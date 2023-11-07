import { Link } from 'react-router-dom';

const Assignment = ({ assignment }) => {
  const { _id, title, thumbnail_url, difficulty_level } = assignment || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 max-h-80" src={thumbnail_url} alt="assignment" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold h-14">{title}</h2>
        {/* <p className="font-normal">{description}</p> */}
        <div className="card-actions justify-between">
          <h4 className="">
            Marks: <span className="font-medium">100</span>
          </h4>
          <h4 className="">
            Level: <span className="font-medium">{difficulty_level}</span>
          </h4>
        </div>
        <div className="card-actions justify-between">
          <Link to={`update/${_id}`}>
            <button className=" btn-md font-bold text-green-500">
              Update assignment
            </button>
          </Link>
          <Link to={`detail/${_id}`}>
            <button className="btn-md font-bold text-green-500 outline-green-400">
              View assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
