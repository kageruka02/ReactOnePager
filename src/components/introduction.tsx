import "./cssfiles/introduction.css";
import ButtonGreen from "./Greenbutton";
import image from "./images/illustration-working.svg";

function Intro() {
  return (
    <>
      <div className="Intro">
        <div className="firstdiv">
          <div className="boldblackparagraph">More than just shorter links</div>
          <div className="smalltextdiv">
            Build your brand's recognition and get detailed insights no how your
            links are performing
          </div>
          <div className="Getstartediv">
            <ButtonGreen words="Get Started" />
          </div>
        </div>
        <div className="photodiv">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}
export default Intro;
