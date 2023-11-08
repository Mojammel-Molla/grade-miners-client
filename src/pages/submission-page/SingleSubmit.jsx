import { Link } from 'react-router-dom';

const SingleSubmit = ({ item }) => {
  const { _id, link, comment, email, status } = item || {};
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Assignment</th>
            <th>Comment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{email}</td>
            <td className="">{link}</td>
            <td>{comment}</td>
            <td>
              <button className="btn-sm">{status}</button>
              <Link to={`/submissions/${_id}`}>
                <button className="btn-sm bg-green-500 rounded-md text-white">
                  Give mark
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleSubmit;
