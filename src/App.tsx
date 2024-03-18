import Navbar from "./components/navbar";
// import React from "react";
import Intro from "./components/introduction";
import "./components/cssfiles/navbar.css";
import Search from "./components/search";
import Cyan from "./components/AdvancedCyan";
// import Div4 from "./components/4div";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <Search />
        <Footer />
        {/* <Div4 /> */}
      </div>
    </>
  );
}
export default App;
