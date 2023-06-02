import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../Redux/actions";


function Card({ name, species, gender, image, onClose, detailId }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(detailId));
    } else {
      setIsFav(true);
      dispatch(
        addFav({ name, species, gender, image, onClose, detailId })
        );
      }
    };
    
    useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.detailId === detailId) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);


  return (
    <div className={style.cardContainer}>
        <img src={image} alt={name} className={style.imageContainer} />
        <h1 className={style.cardId}>Name: {name}</h1>
        <br></br>
        <h1 className={style.cardId}>Specie: {species}</h1>
          <div>
            <button className={style.btnDelete} onClick={onClose}>Delete</button>
            <Link to={`/detail/${detailId}`} className={style.linkDetail}>
            <button className={style.btnDetail} type="button">
              View More
            </button>
            </Link>
          </div>
        {
          isFav ? (
           <button className={style.btnFav} onClick={handleFavorite}>❤️</button>
           ) : (
           <button className={style.btnFav} onClick={handleFavorite}>🤍</button>
        )
      }
    </div>
  );
}

export default Card;
