import { useState } from "react";
import { validation } from "./validation";
import style from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form className={style.container}>
        <h1>Login</h1>
        <label>Email:</label>
        <input
          className={style.input}
          name="email"
          type="text"
          value={userData.email}
          onChange={handleInputChange}
        />
        <p style={{ color: "red" }}>{errors.username}</p>
        <label>Password:</label>
        <input
          className={style.input}
          name="password"
          type="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p style={{ color: "white" }}>{errors.password}</p>
        <button onClick={handleSubmit} type="submit" className={style.btnLog}>
          Submit
        </button>
      </form>
      <div className={style.info}>
        <p>
          <span>Email: </span>kary@soyhenry.com
        </p>
        <p>
          <span>Password: </span>kary123
        </p>
      </div>
    </div>
  );
}
