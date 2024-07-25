import Footer from "../Components/Footer.jsx"
import Nav from "../Components/Nav.jsx"
import React from "react";
function Layout({children}) {
  return (
    <div>
      <Nav/>
      <main className="flex min-h-[100vh] flex-col ">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;