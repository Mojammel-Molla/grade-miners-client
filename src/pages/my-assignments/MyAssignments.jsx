import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SingleAssignment from './SingleAssignment';

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const [assignment, setAssignment] = useState([]);
  const url = `https://grade-miners-server.vercel.app/my-assignments?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAssignment(data));
  }, [url]);
  console.log(assignment);

  return (
    <div>
      <div>
        {assignment.map(item => (
          <SingleAssignment key={item._id} item={item}></SingleAssignment>
        ))}
      </div>
    </div>
  );
};

export default MyAssignments;
