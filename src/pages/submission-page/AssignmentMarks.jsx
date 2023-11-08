import { useLoaderData } from 'react-router-dom';

const AssignmentMarks = () => {
  const giveMarks = useLoaderData();
  console.log(giveMarks);
  const handleMarks = e => {
    e.preventDefault();
    const form = e.target;
    const marks = form.marks.value;
    const feedback = form.feedback.value;

    const submitMarks = { marks, feedback, status: 'Confirm' };
    console.log(submitMarks);
    fetch(`http://localhost:5000/submissions/${giveMarks?._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(submitMarks),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('Marks given successfully');
        }
      });
  };
  return (
    <div>
      <h1 className="lg:text-4xl font-bold text-center my-5">
        Give your valuable marks:
      </h1>
      <form onSubmit={handleMarks} className="w-2/4 mx-auto">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Marks:</span>
          </label>
          <input
            name="marks"
            type="text"
            placeholder="Put marks here"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Feedback here:</span>
          </label>
          <textarea
            name="feedback"
            className="textarea textarea-bordered"
            placeholder="Write your feedback here"
          ></textarea>
        </div>
        <div className="form-control  mt-6">
          <button className="btn text-white bg-green-600 ">Give Marks</button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentMarks;
