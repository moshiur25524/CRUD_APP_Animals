import { Link } from "react-router-dom";

const AddAnimal = () => {
  const handleAddAnimals = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Add a Beatiful Animal</h1>
      <form onSubmit={handleAddAnimals}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter a Animal name"
          required
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter a Animal name"
          required
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter a Animal name"
          required
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter a Animal name"
          required
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter a Animal name"
          required
        />
      </form>
      <Link to={"/"}>Back Home</Link>
    </div>
  );
};

export default AddAnimal;
