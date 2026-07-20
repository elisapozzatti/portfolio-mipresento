import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

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

  const projectsData = [
    {
      title: "F1 RACE SIMULATOR",
      link: "https://github.com/elisapozzatti/F1RaceSimulator",
      image: "/progetto-f1box.jpg",
      tags: ["C# ", "Unity (in development)"],
    },
    {
      title: "CHIESA SAN GIOVANNI BATTISTA",
      link: "https://progetto-valorizzazione-chiesa-sang.vercel.app/",
      image: "/progetto-chiesa.webp",
      tags: ["React ", "Three.js"],
    },
    {
      title: "PROJECT HUB",
      link: "https://projecthub-theta-ten.vercel.app/",
      image: "/progetto-projecthub.webp",
      tags: ["React ", "Koa ", "MongoDB"],
    },
    {
      title: "APP MUSEI",
      link: "https://github.com/elisapozzatti/Web-App-Musei",
      image: "/progetto-musei.webp",
      tags: ["React ", "Koa ", "MongoDB", "Repository privata"],
    },
  ];

  return (
    <div>
      <Header />
      <section id="hero">
        <h1>Ciao, benvenuto!</h1>
        <h2>Scopri il mio lavoro e la mia esperienza!</h2>
      </section>

      <section id="about">
        <h1>About me</h1>
        <h2 className="sottotitoli">Il mio background</h2>
        <h3>🏫 Diploma in Sistemi Informativi Aziendali.</h3>
        <h3>🎓 Specializzazione come Web Developer (ITS).</h3>
        <h3>🎓 Specializzazione come Game Developer (Corso BcSoft).</h3>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <h3>
          <a className="github" href="https://github.com/elisapozzatti">
            Profilo GitHub
          </a>
        </h3>

        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              link={project.link}
              title={project.title}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
