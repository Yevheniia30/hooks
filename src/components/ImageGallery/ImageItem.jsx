const ImageItem = ({ image: { id, webformatURL, tags } }) => {
  return (
    <li key={id}>
      <img src={webformatURL} alt={`${tags}`} />
    </li>
  );
};

export default ImageItem;
