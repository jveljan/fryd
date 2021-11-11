const PictureComponent = ({ image, height, width }) => (
  <div>
    <img style={{ height: height, width: width }} alt="Picture" src={image} />
  </div>
);

export default PictureComponent;
