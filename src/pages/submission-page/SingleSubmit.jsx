const SingleSubmit = ({ item }) => {
  const { link, comment, email, status } = item || {};
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <td>{email}</td>
            <td>{link}</td>
            <td>{comment}</td>
            <td>
              <button className="btn-sm">{status}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleSubmit;
