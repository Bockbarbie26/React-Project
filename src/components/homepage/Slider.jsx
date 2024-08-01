import slide1 from "../../assets/images/slide_product_1.webp";

const Slider = () => {
  return (
    <div>
      {/* Làm slide cho 2 ảnh, cần 3 div */}
      <div className="slide-container">
        <div className="slide-container-item">
          <img src={slide1} alt="Slide 1" />
        </div>
        <div className="slide-container-item">
          <img src={slide1} alt="Slide 2" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
