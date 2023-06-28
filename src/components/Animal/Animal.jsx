import "./animal.css";
const Animal = ({ animal }) => {
  const { name, id, photo } = animal;
  return (
    <div className="animal">
      <h2>{id}</h2>
      <img src={photo} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Animal;
