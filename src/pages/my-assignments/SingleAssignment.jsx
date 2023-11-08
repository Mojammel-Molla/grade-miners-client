import { useState } from 'react';

const SingleAssignment = ({ item }) => {
  const [assignment, setAssignment] = useState(item);

  const { _id, link, feedback, email, marks } = assignment || {};
  console.log('From my-assignment page', assignment);
  const handleDelete = () => {
    fetch(`http://localhost:5000/submissions/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Your assignment deleted successfully');
          const remaining = assignment.filter(item => item?._id !== _id);
          setAssignment(remaining);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Email</th>
            <th>Assignment</th>
            <th>Feedback</th>
            <th>Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{email}</th>
            <td>{link}</td>
            <td>{feedback ? `${feedback}` : 'Not reviewed'}</td>
            <td>{marks ? `${marks}` : 'Not reviewed'}</td>

            <th>
              <button onClick={handleDelete} className="btn btn-ghost btn-xs">
                Delete
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleAssignment;
