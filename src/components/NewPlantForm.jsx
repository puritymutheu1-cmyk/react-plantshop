import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      price,
      
    };

    onAddPlant(newPlant);

    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Add New Plant
      </h2>

      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-green-700 text-white p-3 rounded hover:bg-green-800"
      >
        Add Plant
      </button>
    </form>
  );
}

export default NewPlantForm;