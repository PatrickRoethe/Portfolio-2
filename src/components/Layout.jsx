import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
