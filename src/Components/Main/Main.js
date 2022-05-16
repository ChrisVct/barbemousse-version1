import React from "react";
import "./Main.scss";
import NotreHistoirePics1 from "../../Assests/notreHistoirePics1.jpg";
import BreweryPics1 from "../../Assests/breweryPics1.jpg";
import Biere1 from "../../Assests/biere1.jpg";
import Biere2 from "../../Assests/biere2.jpg";
import Biere3 from "../../Assests/biere3.jpg";
import Biere4 from "../../Assests/biere4.jpg";
import { pointsDeVente } from "../../Data/pointsDeVente";
import VendeurCard from "./VendeurCard";

export default function Main() {
  return (
    <main>
      <div className="bg1 fixed-bg ">
        <h1>Titre de bienvenue</h1>
      </div>
      <section className="mainArticle" id="notreHistoire">
        <article>
          <h1>Notre histoire</h1>
          <p>
            &emsp;&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Expedita dicta, eius quam provident odit voluptas iusto
            laboriosam delectus accusantium reiciendis veniam quasi cum iure
            molestias assumenda nemo alias in dolor nihil nostrum error saepe
            laborum suscipit nobis? Hic inventore necessitatibus quos nemo
            dolore animi asperiores placeat iure? Repellendus, itaque veritatis!
          </p>
        </article>
        <figcaption>
          <img src={NotreHistoirePics1} alt="" />
        </figcaption>
      </section>
      <div className="bg2 fixed-bg"></div>
      <section className="mainArticle" id="laBrasserie">
        <figcaption>
          <img src={BreweryPics1} alt="" />
        </figcaption>
        <article>
          <h1>La brasserie</h1>
          <p>
            &emsp;&emsp;Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Expedita dicta, eius quam provident odit voluptas iusto
            laboriosam delectus accusantium reiciendis veniam quasi cum iure
            molestias assumenda nemo alias in dolor nihil nostrum error saepe
            laborum suscipit nobis? Hic inventore necessitatibus quos nemo
            dolore animi asperiores placeat iure? Repellendus, itaque veritatis!
          </p>
        </article>
      </section>
      <div className="bg3 fixed-bg"></div>
      <section className="nosBieres-container" id="nosBieres">
        <figcaption className="beerCard1 beerCard">
          <img src={Biere1} alt="" />
        </figcaption>
        <figcaption className="beerCard2 beerCard">
          <img src={Biere2} alt="" />
        </figcaption>
        <figcaption className="beerCard3 beerCard">
          <img src={Biere3} alt="" />
        </figcaption>
        <figcaption className="beerCard4 beerCard">
          <img src={Biere4} alt="" />
        </figcaption>
        <article className="beerPresentation0 beerPresentation">
          <h1>Sélectionner votre bière pour en savoir plus !</h1>
        </article>
        <article className="beerPresentation1 beerPresentation">
          <h1>La moussette</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            aliquid vitae dolor eaque unde, ipsa veniam at suscipit, neque
            tempore facere blanditiis et sunt similique cupiditate illo dicta
            delectus, velit ut. Atque impedit quia quibusdam eius totam, tenetur
            adipisci obcaecati odit doloribus nobis minus suscipit qui enim
            libero, sequi ad!
          </p>
        </article>
        <article className="beerPresentation2 beerPresentation">
          <h1>Beer2</h1>
        </article>
        <article className="beerPresentation3 beerPresentation">
          <h1>Beer3</h1>
        </article>
        <article className="beerPresentation4 beerPresentation">
          <h1>Beer4</h1>
        </article>
      </section>
      <div className="bg3 fixed-bg"></div>
      <section className="mainArticle" id="fbSection">
        <div
          className="fb-like-box"
          data-href="https://www.facebook.com/Microbrasserie-Barbemousse-109357753889418/"
          data-width="400"
          data-height="600"
          data-colorscheme="light"
          data-show-faces="false"
          data-header="false"
          data-stream="true"
          data-show-border="false"
        ></div>
        <article>
          <i className="fa-brands fa-facebook"></i>
          <h2>Retrouvez toute l'actualité sur notre page Facebook !</h2>
          <h4>
            Suivez toute l’actualité de la Brasserie sur notre page Facebook.
            N’hésitez pas à liker et à partager !
          </h4>
        </article>
      </section>

      <div className="bg3 fixed-bg"></div>
      <section className="mainArticle" id="pointDeVente">
        <div className="enTete">
          <h1>Où trouver nos bières ?</h1>
          <p>
            A emporter (<i className="fa-solid fa-cart-arrow-down"></i>)
          </p>
          <p>
            &nbsp;ou à consommer sur place (
            <i className="fa-solid fa-champagne-glasses"></i>)
          </p>
        </div>
        <article className="beerList">
          {/* <ul>
            {pointsDeVente.map(
              ({ id, nom, adresse, cp_ville, pourAcheter, pourConsommer }) => (
                <VendeurCard
                  key={id}
                  nom={nom}
                  adresse={adresse}
                  cp_ville={cp_ville}
                  pourAcheter={pourAcheter}
                  pourConsommer={pourConsommer}
                  />
                  )
                  )}
                </ul> */}
        </article>
      </section>
      <div className="bg3 fixed-bg"></div>
      <section id="contact1">
        <form id="contact" method="post" action="/traitement_formulaire.php">
          <fieldset>
            <legend>Vos coordonnées</legend>
            <p>
              <label htmlFor="nom">Nom :</label>
              <input type="text" id="nom" name="nom" />
            </p>
            <p>
              <label htmlFor="email">Email :</label>
              <input type="text" id="email" name="email" />
            </p>
          </fieldset>
          <fieldset>
            <legend>Votre message :</legend>
            <p>
              <label htmlFor="objet">Objet :</label>
              <input type="text" id="objet" name="objet" />
            </p>
            <p>
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="8"
              ></textarea>
            </p>
          </fieldset>
          <div>
            <input type="submit" name="envoi" value="Envoyer le formulaire !" />
          </div>
        </form>
      </section>
      <div className="bg3 fixed-bg"></div>
    </main>
  );
}
