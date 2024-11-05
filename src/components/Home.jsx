import React, { useState } from "react";
import Burger from "../assets/Burger.svg";
import BoiledEgg from "../assets/BoiledEgg.svg";
import Grilledchicken from "../assets/Grilledchicken.svg";
import Pancake from "../assets/Pancake.svg";
import Ramen from "../assets/Ramen.svg";
import vegetablesalad from "../assets/Vegetable salad.svg";
import Fattoushsalad from "../assets/Fattoush salad.svg";
import Desichowmein from "../assets/DesiChowmein.svg";
import ChickenChargha from "../assets/ChickenChargha.svg";
import chickentikka from "../assets/chickemTikka.svg";

const Home = () => {
  const foods = [
    {
      id: 1,
      Name: "Grilledchicken",
      src: Grilledchicken,
      price: "₹300",
    },
    {
      id: 2,
      Name: "Pancake",
      src: Pancake,
      price: "₹300",
    },
    {
      id: 3,
      Name: "BoiledEgg",
      src: BoiledEgg,
      price: "₹300",
    },
    {
      id: 4,
      Name: "Ramen",
      src: Ramen,
      price: "₹300",
    },
    {
      id: 5,
      Name: "Burger",
      src: Burger,
      price: "₹300",
    },
    {
      id: 6,
      Name: "Vegetable Salad",
      src: vegetablesalad,
      price: "₹300",
    },
    {
      id: 7,
      Name: "Fattoush Salad",
      src: Fattoushsalad,
      price: "₹300",
    },
    {
      id: 8,
      Name: "Desichowmein",
      src: Desichowmein,
      price: "₹300",
    },
    {
      id: 9,
      Name: "chickentikka",
      src: chickentikka,
      price: "₹300",
    },
    {
      id: 10,
      Name: "ChickenChargha",
      src: ChickenChargha,
      price: "₹300",
    },
  ];

  return (
    <div className="lg:grid grid-cols-3 gap-3 mx-5 my-5 md:grid  sm:flex sm:flex-col ">
      {foods.map((foods, index) => (
        <div key={index} className="py-1 border rounded-lg ">
          <div className="flex items-center lg:space-x-4  sm:text-xs ">
            <img
              src={foods.src}
              alt={`Gallery Image ${index + 1}`}
              className="h-24 object-cover my-2"
            />
            <h1>{foods.Name}</h1>
            <p className="border rounded-lg px-1 py-1 bg-red-600 text-white">
              {foods.price}
            </p>
          </div>

          <div className="flex">
            <button className="text-white bg-red-600 border rounded-lg px-2 py-1 justify-self-end">
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
