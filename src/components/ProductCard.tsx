import { FC } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  onAddToCart: (product: { id: number; name: string; price: string; image: string }) => void;
}

const ProductCard: FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mt-2">{price}</p>
      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
