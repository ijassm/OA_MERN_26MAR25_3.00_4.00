import React from "react";
import {  NavLink, Outlet } from "react-router";
import { ImLeaf } from "react-icons/im";
import { GiRoastChicken } from "react-icons/gi";

export const Home = () => {
  return (
    <main>
      <section className="flex gap-2 justify-center mt-12 bg-amber-200 py-4">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
          className="text-lg flex gap-2 items-center"
          to="vegetarian"
        >
          <ImLeaf />
          Vegetarian
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "",
            };
          }}
          className="text-lg flex gap-2 items-center"
          to="nonVegetarian"
        >
          <GiRoastChicken />
          Non-Vegetarian
        </NavLink>
      </section>
      <Outlet />
    </main>
  );
};
