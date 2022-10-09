import React from "react";
import "./Popular.css";
import { useEffect, useState } from "react";
import APP_KEY from "./Key";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
const Veg = () => {
  const [veg, setVeg] = useState([]);
  useEffect(() => {
    getVeg();
  }, []);

  const getVeg = async () => {
    const check = localStorage.getItem("veg");
    if (check) {
      setVeg(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${APP_KEY}&number=9&tags=vegetarian,dessert`
      );
      const data = await api.json();
      localStorage.setItem("veg", JSON.stringify(data.recipes));
      setVeg(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="box1">
      <h3>Our Vegeterian pics</h3>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {veg.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
                <div className="box2" id="veg">
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
export default Veg;
