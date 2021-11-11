const PictureComponent = ({ image }) => (
  <div>
    <img
      style={{ height: "280px", width: "430px" }}
      alt="Picture"
      src={image}
    />
  </div>
);

export default PictureComponent;
