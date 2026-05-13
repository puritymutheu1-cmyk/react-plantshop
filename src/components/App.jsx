import { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

function App() {
  // STATE
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH PLANTS ON PAGE LOAD
  useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data.plants))
    .catch((error) =>
      console.log("Error fetching plants:", error)
    );
}, []);

  // ADD NEW PLANT
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
        setPlants([...plants, { ...addedPlant, inStock: true }]);
      });
  }

  // TOGGLE SOLD OUT
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: !plant.inStock }
        : plant
    );

    setPlants(updatedPlants);
  }

  // SEARCH FILTER
  const filteredPlants = plants.filter((plant) =>
    plant.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50">

      {/* HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto p-6">

        {/* SEARCH BAR */}
        <Search
          search={search}
          setSearch={setSearch}
        />

        {/* FORM */}
        <NewPlantForm
          onAddPlant={handleAddPlant}
        />

        {/* PLANTS */}
        <PlantList
          plants={filteredPlants}
          onSoldOut={handleSoldOut}
        />

      </div>
    </div>
  );
}

export default App;