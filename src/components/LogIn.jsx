import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const LogIn = () => {
  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
  };
  return (
    <div className="card flex-shrink-0 w-full mx-auto lg:mt-20 max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
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
            <p>
              Do not have account?
              <Link
                className=" text-blue-600 ml-2 label-text-alt link link-hover"
                to="/register"
              >
                Register
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="flex justify-center mt-5">
          <button className="btn">
            <FcGoogle className="text-2xl mt-1"></FcGoogle>Google
          </button>
        </div>
      </form>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
};

export default LogIn;
