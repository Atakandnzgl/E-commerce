import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";



function Slider() {
    const [sliderRef] = useKeenSlider({
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 10,
      },
    });
  
    const images = [
      "https://via.placeholder.com/600x300?text=Kampanya+1",
      "https://via.placeholder.com/600x300?text=Kampanya+2",
      "https://via.placeholder.com/600x300?text=Kampanya+3",
    ];
  
    return (
      <div ref={sliderRef} className="keen-slider mb-6">
        {images.map((src, index) => (
          <div className="keen-slider__slide rounded overflow-hidden" key={index}>
            <img src={src} alt={`Slider ${index}`} className="w-full object-cover" />
          </div>
        ))}
      </div>
    );
  }
  export default Slider;  