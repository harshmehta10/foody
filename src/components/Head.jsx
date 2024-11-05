import React from "react";
import chef from "../assets/chef.svg";

const Head = () => {
  return (
    <div>
      <ul className="flex items-center justify-center list-none space-x-4">
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Snacks</li>
        <li>Drinks</li>
      </ul>
    </div>
  );
};

export default Head;
