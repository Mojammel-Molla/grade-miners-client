import { useLoaderData } from 'react-router-dom';
import SingleSubmit from './SingleSubmit';

const Submission = () => {
  const submittedItems = useLoaderData();
  return (
    <div>
      <div>
        {submittedItems.map(item => (
          <SingleSubmit key={item._id} item={item}></SingleSubmit>
        ))}
      </div>
    </div>
  );
};

export default Submission;
