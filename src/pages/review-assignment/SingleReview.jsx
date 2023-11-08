const SingleReview = ({ item }) => {
  const { email, link, marks, feedback, status } = item || {};
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
            <td>{feedback}</td>
            <td>{marks}/100</td>
            <td>{status}</td>
            {/* <th>
              <button className="btn btn-ghost btn-xs">Delete</button>
            </th> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleReview;
