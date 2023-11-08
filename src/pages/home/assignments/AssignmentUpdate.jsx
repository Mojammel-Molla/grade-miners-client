import { useLoaderData } from 'react-router-dom';

const AssignmentUpdate = () => {
  const updateAssignment = useLoaderData();
  const {
    _id,
    title,
    subject,
    date,
    description,
    thumbnail_url,
    difficulty_level,
  } = updateAssignment || {};
  console.log(updateAssignment);

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const date = form.date.value;
    const level = form.level.value;
    const description = form.description.value;
    console.log(subject, title, photo, date, level, description);

    const updatedAssignment = {
      subject,
      title,
      photo,
      date,
      level,
      description,
    };

    fetch(` https://grade-miners-server.vercel.app/update/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedAssignment),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold my-5">
          Update Assignment
        </h1>
        <form onSubmit={handleUpdate} className="card-body mx-auto w-2/4">
          <div className="flex gap-5 ">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Subject Name:</span>
              </label>
              <input
                defaultValue={subject}
                name="subject"
                type="text"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Assignment Title:</span>
              </label>
              <input
                defaultValue={title}
                name="title"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Assignment Photo:</span>
              </label>
              <input
                defaultValue={thumbnail_url}
                name="photo"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Difficulty Level:</span>
              </label>
              <input
                defaultValue={difficulty_level}
                name="level"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Date:</span>
              </label>
              <input
                defaultValue={date}
                name="date"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <input
                defaultValue={description}
                name="description"
                type="text"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn text-white bg-green-600 ">
              Update Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignmentUpdate;
