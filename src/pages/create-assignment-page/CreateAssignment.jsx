const CreateAssignment = () => {
  const handleCreate = e => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const description = form.description.value;
    console.log(subject, title, photo, marks, level, description);
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold my-5">
          Create Assignment
        </h1>
        <form onSubmit={handleCreate} className="card-body mx-auto w-2/4">
          <div className="flex gap-5 ">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Subject name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text"> Title:</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Assignment Title "
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Photo:</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Assignment photo URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text"> Level:</span>
              </label>
              <input
                name="level"
                type="text"
                placeholder="Difficulty level"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Marks:</span>
              </label>
              <input
                name="marks"
                type="text"
                placeholder="Assignment mark:"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="Assignment description"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* <div className="form-control w-4/4">
            <label className="label">
              <span className="label-text">Update Description:</span>
            </label>
            <input
              // defaultValue={description}
              name="description"
              type="text"
              placeholder="Short description"
              className="input input-bordered"
              required
            />
          </div> */}

          <div className="form-control mt-6">
            <button className="btn text-white bg-green-600 ">
              Create Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
