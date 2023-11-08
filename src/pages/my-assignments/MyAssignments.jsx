import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SingleAssignment from './SingleAssignment';

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const [assignment, setAssignment] = useState([]);
  const url = `http://localhost:5000/my-assignments?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAssignment(data));
  }, [url]);
  console.log(assignment);
  return (
    <div>
      <table className="table  max-w-7xl">
        <thead>
          <tr>
            <th>Email</th>
            <th className="">Link</th>
            <th></th>
            <th>Comment</th>
            <th className="">Status</th>
          </tr>
        </thead>
      </table>
      <div>
        {assignment.map(item => (
          <SingleAssignment key={item._id} item={item}></SingleAssignment>
        ))}
      </div>
    </div>
  );
};

export default MyAssignments;
