import React from "react";
import "./VendeurCard.scss";

export default function VendeurCard({
  nom,
  adresse,
  cp_ville,
  pourAcheter,
  pourConsommer,
}) {
  const icon =
    pourAcheter === "oui" ? (
      pourConsommer === "oui" ? (
        <span>
          <i className="fa-solid fa-cart-arrow-down"></i>
          <i className="fa-solid fa-champagne-glasses"></i>
        </span>
      ) : (
        <span>
          <i className="fa-solid fa-cart-arrow-down"></i>
        </span>
      )
    ) : (
      <span>
        <i className="fa-solid fa-champagne-glasses"></i>
      </span>
    );
  return (
    <li className="vendeur-card">
      <h2>{nom}</h2>
      <span>- {icon} -</span>
      <p>{adresse} - </p>
      <p>{cp_ville} </p>
    </li>
  );
}
