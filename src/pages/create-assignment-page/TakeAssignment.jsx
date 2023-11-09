import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
const TakeAssignment = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const link = form.link.value;
    const comment = form.comment.value;
    const email = user?.email;
    const submitted = { link, comment, email, status: 'pending' };
    console.log(submitted);
    fetch('http://localhost:5000/submissions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(submitted),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your assignment has been submitted',
            showConfirmButton: false,
            timer: 1500,
          });
          form.rest();
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">Take Assignment</h1>
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">PDF File:</span>
          </label>
          <input
            name="link"
            type="text"
            placeholder="Provide a pdf link here"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Comment:</span>
          </label>
          <textarea
            name="comment"
            className="textarea textarea-bordered"
            placeholder="Write your comment here"
          ></textarea>
        </div>
        <div className="form-control  mt-6">
          <button className="btn text-white bg-green-600 ">
            Post Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default TakeAssignment;
