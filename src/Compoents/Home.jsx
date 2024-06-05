import React from "react";
import Footer from "./Footer";
import Source from "./Source";
import Find from "./Find";
import Middle from "./Middle";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <SideMenu/>
      <main className=" bg-[#0f0f0f] sm:ml-56">
        <Navbar/>
        <section>
          <Find />
        </section>
        <section>
          <Middle />
        </section>
        <section>
          <Source />
        </section>
      </main>
      <footer className="p-4 bg-[#1f1f1f] sm:ml-56">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
