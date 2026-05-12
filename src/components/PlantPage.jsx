import { useEffect, useState } from "react";
import PlantList from "./PlantList";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH PLANTS ON LOAD
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log("Error fetching plants:", err));
  }, []);

  // ADD PLANT (POST)
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((addedPlant) => {
        setPlants([...plants, addedPlant]);
      });
  }

  // TOGGLE SOLD OUT (NOT PERSISTED)
  function handleSoldOut(id) {
    const updated = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );

    setPlants(updated);
  }

  // SEARCH FILTER
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* HEADER */}
      <header className="bg-green-700 text-white p-5 rounded-lg mb-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">
          🌿 Plant Shop
        </h1>
      </header>

      {/* SEARCH */}
      <Search search={search} setSearch={setSearch} />

      {/* FORM */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* LIST */}
      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </div>
  );
}

export default PlantPage;