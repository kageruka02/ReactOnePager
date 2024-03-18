interface Props {
  image: string;
  title: string;
  description: string;
  marginTop: number;
  index: number;
}
function Thedivs({ image, title, description, marginTop, index }: Props) {
  return (
    <>
      <div className="Brand" style={{ marginTop: `${marginTop}px` }}>
        <div className="thephoto">
          <img className="realphoto" src={image} alt="" />
        </div>
        {index === 0 ? <div className="line"></div> : null}

        <p className="Brandtitle">
          <strong>{title}</strong>
        </p>
        <p>{description}</p>
      </div>
    </>
  );
}
export default Thedivs;
