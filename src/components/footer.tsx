import "./cssfiles/footer.css";
import image1 from "./images/icon-facebook.svg";
import image2 from "./images/icon-twitter.svg";
import image3 from "./images/icon-pinterest.svg";
const Features: string[][] = [
  ["Features", "Link Shortening", "Branded Links", "Analytics"],
  ["Resources", "Blog", "Developers", "support"],
  ["Company", "About", "Our Team", "Careers", "Contact"],
];
function Footer() {
  return (
    <>
      <div
        className="cyan"
        style={{
          background: "hsl(260, 8%, 14%)",
          marginTop: "-110px",
          paddingTop: "40px",
        }}
      >
        <nav className="navClass">
          <div className="Shortlydiv2">Shortly</div>
          <div className="footerElements">
            {Features.map((list, index) => (
              <div key={index}>
                {list.map((item, subIndex) =>
                  subIndex === 0 ? (
                    <div key={subIndex} className="title">
                      {item}
                    </div>
                  ) : (
                    <div key={subIndex} className="justWords">
                      {item}
                    </div>
                  )
                )}
              </div>
            ))}
            <div>
              <img src={image1} className="socialmedia" alt="" />
              <img src={image2} className="socialmedia" alt="" />
              <img src={image3} className="socialmedia" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Footer;
