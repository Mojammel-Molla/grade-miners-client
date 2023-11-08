import { useLoaderData } from 'react-router-dom';
import SingleReview from './SingleReview';

const ReviewedAssignment = () => {
  const assignmentWithMarks = useLoaderData([]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">
        All Reviewed Assignment
      </h1>
      <div>
        {assignmentWithMarks.map(item => (
          <SingleReview key={item._id} item={item}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default ReviewedAssignment;
