 import "./imageLoader.css";

const ImageLoader = ({ progress, title }: any) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="loader">{Math.round(progress || "")}%</div>
        <div>{title}</div>
        <div>Пожалуйста, подождите...</div>
      </div>
    </div>
  );
};

export default ImageLoader;


