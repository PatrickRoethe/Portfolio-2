import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-textLight font-mono p-4">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Layout;
