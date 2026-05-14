import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // TASK 1: Fetch all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.log("Error fetching plants:", error));
  }, []);

  // TASK 2: Add new plant via POST
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: newPlant.price,
      }),
    })
      .then((res) => res.json())
      .then((addedPlant) => {
        setPlants((prev) => [...prev, addedPlant])
      });
  }

  // TASK 3: Toggle sold out (non-persisting)
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );

    setPlants(updatedPlants);
  }

  // TASK 4: Filter plants by search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-700 text-white p-5 shadow-md">
        <h1 className="text-2xl font-bold text-center">
          🌿 Plant Shop
        </h1>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <Search search={search} setSearch={setSearch} />

        <NewPlantForm onAddPlant={handleAddPlant} />

        <PlantList
          plants={filteredPlants}
          onSoldOut={handleSoldOut}
        />
      </div>
    </div>
  );
}

export default App;