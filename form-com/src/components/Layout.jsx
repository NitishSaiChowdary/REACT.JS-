import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />  {/* Renders the child routes */}
      <Footer />
    </>
  );
};

export default Layout;
