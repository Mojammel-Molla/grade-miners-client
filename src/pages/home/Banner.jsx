import BannerImg from '../../assets/bannerImg.jpg';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-lg mt-5"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}
    >
      <div className="hero-overlay rounded-lg bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 lg:text-5xl text-green-400 font-bold">
            Connecting Students with Assignments
          </h1>
          <p className="mb-5">
            Welcome to Grade miners, your academic assignment solution. Find
            assignments across subjects and difficulty levels, simplifying your
            academic journey. Explore, learn, and excel with Grade miners, your
            path to academic success!
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
