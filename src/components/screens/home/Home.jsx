import { cars as carsData } from "./cars.data.js";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-cart-form/CreateCarForm.jsx";
import { useState } from "react";
// import { useMemo } from "react";

function Home() {
  // const filteredCars = useMemo(
  //   () => cars.filter((car) => car.price > 22000),
  //   []
  // );

  const [cars, setCars] = useState(carsData);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4">
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;
