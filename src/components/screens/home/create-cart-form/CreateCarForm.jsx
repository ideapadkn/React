import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const clearData = {
  price: "",
  name: "",
  image: "",
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState({
    price: "",
    name: "",
    image: "",
  });

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <div className="flex gap-3 flex-wrap">
        <input
          className="flex-auto rounded"
          placeholder="Name"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={data.name}
        />
        <input
          className="flex-auto rounded"
          placeholder="Price"
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          value={data.price}
        />
        <input
          className="flex-auto rounded"
          placeholder="Image"
          onChange={(e) =>
            setData((prev) => ({ ...prev, image: e.target.value }))
          }
          value={data.image}
        />
      </div>

      <button
        onClick={(e) => createCar(e)}
        className="btn border-2 py-2 px-3 rounded"
      >
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
