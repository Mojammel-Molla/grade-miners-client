const SingleAssignment = ({ item }) => {
  const { link, comment, email } = item || {};
  console.log(item);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <td>{email}</td>
            <td className="">{link}</td>
            <td>{comment}</td>
            <td>
              <button className="btn-sm">Mark</button>
              {/* <button className="btn-sm bg-green-500 rounded-md text-white">
                Give mark
              </button> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleAssignment;
