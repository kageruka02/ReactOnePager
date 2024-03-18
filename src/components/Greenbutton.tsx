import "./cssfiles/Greenbutton.css";
function ButtonGreen({ words }: { words: string }) {
  return (
    <>
      <div className="Greenbutton">{words}</div>
    </>
  );
}
export default ButtonGreen;
