import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { useNavigate } from "react-router-dom";
import { orderCards, filterCards } from "../Redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div>
      <label className={style.labelText} >Sort By Name</label>
        <select name="order" id="order" onChange={handleOrder} className={style.btnOrder}>
          <option value="Ascendent">Ascendent</option>
          <option value="Descendent">Descendent</option>
        </select>
        <label className={style.labelText} >Sort By Gender</label>
        <select name="filter" id="filter" onChange={handleFilter} className={style.btnFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      <div>
        <button className={style.backHome} onClick={handleClick}>
          Back to home
        </button>
      </div>
      <>
        {myFavorites.map((character) => {
          return (
            <div className={style.containerFav}>
              <img src={character.image} className={style.image} />
              <h1>Name: {character.name}</h1>
              <h2>Specie: {character.species}</h2>
              <h2>Gender: {character.gender}</h2>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Favorites;
