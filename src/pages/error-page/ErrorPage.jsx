import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className=" w-full mt-20 text-5xl text-center justify-center h-screen">
      <h1 className="text-5xl text-center">Oops </h1>
      <p className="text-2xl text-center">Page not found</p>

      <Link to="/">
        <button className="btn primary">Go back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
