import PlantCard from "./PlantCard";

function PlantList({ plants, onSoldOut }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onSoldOut={onSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;