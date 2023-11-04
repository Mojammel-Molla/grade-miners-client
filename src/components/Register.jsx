import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if (!/^.{6,32}$/.test(password)) {
      toast.error('password is too short');
      return;
    } else if (!/(?=.*\W)/.test(password)) {
      toast.error('password should have special character');
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast.error('password should have capital letter');
      return;
    } else {
      createUser(email, password)
        .then(res => {
          console.log(res.user);
          toast.success('User created successfully');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div className="max-w-lg mx-auto lg:mt-20 justify-center items-center">
      <h1 className="text-center font-bold text-3xl">Please Register</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <p href="#" className=" ">
              Already have an account?
              <Link
                className="text-green-600 ml-2 label-text-alt link link-hover"
                to="/login"
              >
                Log in
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-green-600">Register</button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Register;
