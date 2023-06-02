import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "871ddf2fe5cb.24512139963e241d8a69";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("NO hay personajes con ese ID!!");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <>
      <div>
        <button className={style.backHome} onClick={handleClick}>
          Back to home
        </button>
      </div>
      <div className={style.detail}>
        <img
          src={character.image}
          alt={character.name}
          className={style.image}
        />
        <div>
        <h1>{character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin?.name}</h2>
        </div>
      </div>
    </>
  );
}

export default Detail;
