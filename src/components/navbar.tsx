import "./cssfiles/navbar.css";
import ButtonGreen from "./Greenbutton";

function Navbar() {
  let Signup: string = "Sign up";
  return (
    <>
      <nav>
        <div className="navdiv1">
          <div className="ShortlyBold">Shortly </div>
          <div> Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className="navdiv2">
          <div className="login">Login</div>
          <div className="signup">
            <ButtonGreen words={Signup} />
          </div>
          <div className="hamburger">
            <div className="linee"></div>
            <div className="linee"></div>
            <div className="linee"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
