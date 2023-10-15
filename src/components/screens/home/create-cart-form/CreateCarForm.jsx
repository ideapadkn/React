import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const CreateCarForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(price);
    console.log(image);
  };

  return (
    <form className={styles.form}>
      <div className="flex gap-3 flex-wrap">
        <input
          className="flex-auto rounded"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="flex-auto rounded"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          className="flex-auto rounded"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
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
