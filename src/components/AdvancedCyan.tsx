import "./cssfiles/AdvancedCyan.css";
import { useState, useEffect } from "react";
import image1 from "./images/icon-brand-recognition.svg";
import image2 from "./images/icon-detailed-records.svg";
import image3 from "./images/icon-fully-customizable.svg";
import Thedivs from "./thedivs";
import Div4 from "./4div";
const ArrayofParagraph: string[] = [
  "Track how your links are performing across the web with",
  "our advanced statistics dashboard",
];
const ArrayofParagraphMobile: string[] = [
  "Track how your links are perfoming",
  "across the web with our advanced",
  "statistics dashboard",
];
let thedivparagraph: any[] = [
  {
    image: image1,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    image: image2,
    title: "Detailed Records",
    description:
      "Gain insights into who is cliking your links.Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: image3,
    title: "Fully Customizable",
    description:
      "Impove brand awareness and content discoverability through custoomizable links, supercharging audience engagement.",
  },
];
function Cyan() {
  // const [Top, setTop] = useState(40);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="cyan">
        <div className="cyandivwithboundaries">
          <div className="statistics">Advanced Statistics</div>
          {(isMobile ? ArrayofParagraphMobile : ArrayofParagraph).map(
            (line, index) => (
              <div key={index} className="text">
                {line}
              </div>
            )
          )}
          <div className="flexWithwhite">
            {thedivparagraph.map((e, index) => {
              const ContentTop = 40 + index * 20;
              return (
                <Thedivs
                  key={index}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                  marginTop={ContentTop}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <Div4 />
      </div>
    </>
  );
}
export default Cyan;
