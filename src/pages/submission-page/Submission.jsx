import { useLoaderData } from 'react-router-dom';
import SingleSubmit from './SingleSubmit';

const Submission = () => {
  const submittedItems = useLoaderData();
  return (
    <div>
      <h1>This is submission page{submittedItems.length}</h1>
      <div>
        <table className="table lg:ml-20">
          <thead>
            <tr>
              <th>Email</th>
              <th>Link</th>
              <th>Comment</th>
              <th>Status</th>
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
