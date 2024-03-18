import image from "./images/bg-boost-desktop.svg";
import image1 from "./images/bg-boost-mobile.svg";
import "./cssfiles/search.css";
import "./cssfiles/4div.css";
import "./cssfiles/AdvancedCyan.css";
import ButtonGreen from "./Greenbutton";
import { useState, useEffect } from "react";
function Div4() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="search" style={{ width: "110%", height: "200px" }}>
        <img className="searchphoto" src={isMobile ? image : image1} alt="" />
        <div className="Boost">Boost your links today</div>
        <ButtonGreen words="Get Started" />
      </div>
    </>
  );
}
export default Div4;
