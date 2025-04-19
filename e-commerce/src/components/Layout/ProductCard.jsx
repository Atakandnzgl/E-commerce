function ProductCard({ name, price, image }) {
    return (
      <div className="flex flex-col p-4 border rounded-lg shadow-sm">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-gray-600">{price} ₺</p>
      </div>
    );
  }
  
  export default ProductCard;