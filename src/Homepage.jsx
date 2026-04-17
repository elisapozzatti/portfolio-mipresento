import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Homepage() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");

    const move = (e) => {
      if (dot) {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div>
      <Header />
      <section id="hero">
        <h1>Ciao, sono una sviluppatrice🤗</h1>
        <h2>
          Trasformo le idee in esperienze digitali fluide, veloci e al passo con
          i tempi.
        </h2>
      </section>

      <section id="about">
        <h1>About me</h1>
        <h2 className="sottotitoli">Il mio background</h2>
        <h3>🏫 Diploma in Sistemi Informativi Aziendali.</h3>
        <h3>🎓 Specializzazione come Web Developer (ITS).</h3>
        <h2 className="sottotitoli">Project Work</h2>
        <h3>🖼️Frontend per la Digitalizzazione Culturale (Musei):</h3>
        <p>
          Ho progettato e sviluppato l'intera interfaccia di una web app per la
          gestione museale che includeva:
          <ul>
            <li>
              la <strong className="grassetto">lista delle opere</strong> che
              potevi filtrare per categoria, nome e nome dell'artista
            </li>
            <li>
              una <strong className="grassetto">mappa interattiva</strong> del
              museo dove si poteva visualizzare la posizione delle opere
            </li>
            <li>
              <strong className="grassetto">
                percorsi guidati personalizzati
              </strong>{" "}
              in base agli interessi dell'utente
            </li>
            <li>
              un sistema di{" "}
              <strong className="grassetto">scansione QR Code</strong> per
              accedere immediatamente alle informazioni dettagliate delle opere,
              inclusa un'audioguida
            </li>
          </ul>
        </p>
        <h3>
          💆🏼Backend & Architettura Dati per un Forum sulla Salute Mentale:
        </h3>
        <p>
          Mi sono occupata dello sviluppo del backend utilizzando Express,
          gestendo la logica complessa che integrava{" "}
          <strong className="grassetto">forum</strong>,{" "}
          <strong className="grassetto">chat private</strong> e un sistema di{" "}
          <strong className="grassetto">prenotazione appuntamenti</strong> con
          degli psicologi.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <h3>
          <a className="github" href="https://github.com/elisapozzatti">
            Profilo GitHub
          </a>
        </h3>
        <h3>L'aggiunta dei progetti è ancora in lavorazione</h3>

        <Link to="https://f1box-frontend-2.vercel.app/">
          <img
            className="f1box"
            src="/progetto-f1box.png"
            alt="Progetto F1Box"
          />
        </Link>

        {/*<div className="card">
          <h3>Progetto 2</h3>
          <p>Descrizione progetto</p>
        </div>*/}
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
