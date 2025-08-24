import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/translate", label: "Translator" },
    { to: "/random", label: "Random String" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `px-3 py-1 rounded-xl ${
              isActive ? "bg-gray-900 text-white" : "hover:bg-gray-100"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}