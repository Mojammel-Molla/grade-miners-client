import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
// import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  // const [selectedDate, setSelectedDate] = useState(null);
  const handleCreate = e => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const date = form.date.value;
    const level = form.level.value;
    const description = form.description.value;
    const email = user?.email;
    console.log(subject, title, photo, date, level, description, email);
    const assignment = {
      subject,
      title,
      photo,
      date,
      level,
      description,
      email,
    };
    fetch('https://grade-miners-server.vercel.app/assignments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(assignment),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your assignment has been created',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
              <select name="level" className="select select-bordered">
                <option disabled selected>
                  Pick Difficulty Level
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-2/4">
              <label className="label">
                <span className="label-text">Date:</span>
              </label>
              <input
                name="date"
                type="date"
                placeholder="Choose a date:"
                className="input input-bordered"
                required
              />
              {/* <DatePicker
                name="date"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
              /> */}
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
