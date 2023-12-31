import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const MainLayOut = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
