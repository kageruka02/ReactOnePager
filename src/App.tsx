import Navbar from "./components/navbar";
import Intro from "./components/introduction";
import "./components/cssfiles/navbar.css";
import Search from "./components/search";
import Footer from "./components/footer"; /*getting the Footer files*/
import { useEffect, useState } from "react";
function App() {
  const [scrollleft, SetScrollLeft] = useState<number>(0);
  let timeoutId: number;
  useEffect(() => {
    const handlescroll = () => {
      // SetScrollLeft(window.scrollX);
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        SetScrollLeft(window.scrollX);
        console.log(scrollleft); /*this is scroll left*/
      }, 1);
    };
    document.addEventListener("scroll", handlescroll);
    return () => {
      document.removeEventListener("scroll", handlescroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        style={{
          padding: "2% 5%",
          overflowX: "hidden",
          transition: "transform 1s ease",
          transform: `translateX(-${scrollleft}px)`,
          background: "yellow",
        }}
      >
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
