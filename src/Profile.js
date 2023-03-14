import { Counter } from "./Counter";

function Profile({ pic, name }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h4>{name}</h4>
      <Counter />
    </div>
  );
}
