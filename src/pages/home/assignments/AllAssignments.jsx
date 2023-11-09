import { useState } from 'react';
import Assignment from './Assignment';
import { useQuery } from '@tanstack/react-query';
const AllAssignments = () => {
  const [allAssignments, setAllAssignments] = useState([]);
  const [page, setPage] = useState(0);
  // useEffect(() => {
  //   fetch('http://localhost:5000/assignments')
  //     .then(res => res.json())
  //     .then(data => setAllAssignments(data));
  // }, []);
  const {
    data: { result, postCount },
  } = useQuery({
    queryKey: ['assignments', page],
    queryFn: () =>
      fetch(`http://localhost:5000/assignments?page=${page}`).then(res =>
        res.json()
      ),
    initialData: { result: [], postCount: 0 },
    // .then(data => setAllAssignments(data));
  });
  console.log(result, page);

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < 1) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">All Assignments</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {result.map(assignment => (
          <Assignment key={assignment._id} assignment={assignment}></Assignment>
        ))}
      </div>
      <div className="flex justify-center my-10 gap-3">
        <button
          onClick={handlePrevious}
          className="btn-sm rounded-full bg-slate-300 text-white hover:bg-green-500"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn-sm rounded-full bg-slate-300 text-white  hover:bg-green-500"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default AllAssignments;
