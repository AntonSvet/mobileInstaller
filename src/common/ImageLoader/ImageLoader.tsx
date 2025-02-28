 import "./imageLoader.css";

const ImageLoader = ({ progress }: any) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="loader"></div>
        <div>Загрузка: {Math.round(progress)}%</div>
        <div>Пожалуйста, подождите...</div>
      </div>
    </div>
  );
};

export default ImageLoader;


