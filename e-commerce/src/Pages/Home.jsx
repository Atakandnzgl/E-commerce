import ProductCard from "../components/Layout/ProductCard";

function Home() {
    const products = [
        {
            name: "Siyah Tişört",
            price: "199",
            image: "https://via.placeholder.com/300",   
        },
        {
            name: "Beyaz Kapüşonlu",
            price: "349",
            image: "https://via.placeholder.com/300", 
        },
        {
            name: "Kot Pantolon",
            price: "499",
            image: "https://via.placeholder.com/300", 
        }
        
    ]
    return (
      <><div className="p-4">
        <h1 className="text-2xl font-bold">Ana Sayfa</h1>
      </div><section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image} />
          ))}
          {/* Daha fazla ürün eklenebilir */}
        </section></>
    );
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
          <div ref={sliderRef} className="keen-slider mb-6 rounded overflow-hidden">
            {images.map((src, index) => (
              <div key={index} className="keen-slider__slide">
                <img src={src} alt={`Slider ${index}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        );
      }
  }
  
  export default Home;