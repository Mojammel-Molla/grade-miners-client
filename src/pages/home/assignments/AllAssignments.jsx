import { useEffect, useState } from 'react';
import Assignment from './Assignment';

const AllAssignments = () => {
  const [allAssignments, setAllAssignments] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/assignments')
      .then(res => res.json())
      .then(data => setAllAssignments(data));
  }, []);
  console.log(allAssignments);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">All Assignments</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allAssignments.map(assignment => (
          <Assignment key={assignment._id} assignment={assignment}></Assignment>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
