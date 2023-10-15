import { cars } from "./cars.data.js";
import CarItem from "./car-item/CarItem";

function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Cars catalog</h1>
      <div>
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
