import { useLoaderData } from 'react-router-dom';
import SingleSubmit from './SingleSubmit';

const Submission = () => {
  const submittedItems = useLoaderData();
  return (
    <div>
      <div>
        <table className="table space-x-5 lg:ml-20">
          <thead>
            <tr>
              <th>Email</th>
              <th className="">Link</th>
              <th>Comment</th>
              <th className="">Status</th>
            </tr>
          </thead>
        </table>
        {submittedItems.map(item => (
          <SingleSubmit key={item._id} item={item}></SingleSubmit>
        ))}
      </div>
    </div>
  );
};

export default Submission;
