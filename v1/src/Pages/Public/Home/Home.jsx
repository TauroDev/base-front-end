import React from "react";
import styles from "./Home.style.module.css";
import { LogoTauro } from "@Assets";

const Home = () => {
  return (
    <div className={styles.content}>
      <img src={LogoTauro} alt="Logo-de-Tauro-Dev" />
      <div>
        <p>
          Template de la arquitectura utilizada para la creación de aplicaciones
        </p>
        <p>por parte de Tauro Dev</p>
      </div>
      <div className={styles.contentButtons}>
        <button>
          <a href="https://www.taurodev.com/" target="_blank">
            <span className="material-symbols-outlined">language</span> Web Site
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/taurodev/" target="_blank">
            <i className="bx bxl-instagram-alt"></i> Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
