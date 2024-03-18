import "./cssfiles/search.css";
import "./cssfiles/AdvancedCyan.css";
import desktopImage from "./images/bg-shorten-desktop.svg";
import mobileImage from "./images/bg-shorten-mobile.svg";
import { useState, useEffect } from "react";
import Div4 from "./4div";
import image1 from "./images/icon-brand-recognition.svg";
import image2 from "./images/icon-detailed-records.svg";
import image3 from "./images/icon-fully-customizable.svg";
import Thedivs from "./thedivs";
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

function Search() {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [marginTop, setMarginTop] = useState(70);
  const [linksArray, setlinksArray] = useState<Array<any>>(["hello"]);
  useEffect(() => {
    // Calculate margin top based on the number of elements in linksArray
    setMarginTop(70 + linksArray.length * 55);
  }, [linksArray]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*this is the comment*/

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
  };

  const shortenlinks = async () => {
    if (inputUrl.trim() === "") {
      return;
    }
    try {
      console.log(inputUrl);
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https://cleanuri.com/api/v1/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(`url=${encodeURIComponent(inputUrl)}`),
        }
      );
      if (!response.ok)
        throw new Error(`failed kageruka${response.statusText}`);
      const data = await response.json();
      console.log(data);
      if (data.error) throw new Error(data.error);
      setlinksArray([...linksArray, inputUrl, data.result_url]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="search">
          <img
            className={isMobile ? "mobilephoto" : "searchphoto"}
            src={isMobile ? mobileImage : desktopImage}
            alt=""
          />
          <div className="searchBar">
            <input
              type="text"
              className="searchInput"
              placeholder="Shorten a link here..."
              value={inputUrl}
              onChange={handleInputChange}
            />

            <div className="green" onClick={shortenlinks}>
              Shorten it
            </div>
          </div>
          <div className="ErrorMessage">why are you here?</div>
        </div>
        {linksArray.map((e) => {
          return (
            <>
              <div className="thesearchdiv">
                <div className="searching">
                  <div className="thelink">https//youtube.com </div>
                  <div className="shortenedlink">
                    <div>url./eahchf/</div>
                    <div className="copyButton">copy</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div
          className="cyan"
          style={{
            marginTop: `${-marginTop}px`,
            paddingTop: `${marginTop + 130}px`,
          }}
        >
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
      </div>
    </>
  );
}

export default Search;
