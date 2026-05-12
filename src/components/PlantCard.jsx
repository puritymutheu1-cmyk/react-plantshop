function PlantCard({ plant, onSoldOut }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      
      <img
        src={plant.image}
        alt={plant.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">
          {plant.name}
        </h2>

        <p className="text-gray-600 mb-3">
          ${plant.price}
        </p>

        <button
          onClick={() => onSoldOut(plant.id)}
          className={`w-full p-2 rounded text-white ${
            plant.inStock
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {plant.inStock ? "In Stock" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}

export default PlantCard;