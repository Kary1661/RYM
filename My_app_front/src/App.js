import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

    useEffect(() => {
      !access && navigate("/");
    }, [access]);

    const onSearch = async (id) => {
      try {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );

        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } catch (error) {
        alert("NO hay personajes con ese ID!!");
      }
    };

    function onClose(id) {
      setCharacters(
        characters.filter((char) => {
          return char.id !== Number(id);
        })
      );
    }

    return (
      <div>
        {location.pathname !== "/" && <Nav onSearch={onSearch} />}

        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    );

}

export default App;
