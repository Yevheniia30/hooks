const ImageItem = ({ webformatURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={`${tags}`} />
    </li>
  );
};

export default ImageItem;
