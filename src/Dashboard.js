import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faBook, faBell, faClipboard } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="eduorg.logo.png" className="logo-img" />
        </div>

        <nav>
          <ul>
            <li className="active">
              <FontAwesomeIcon icon={faChartBar} className="icon" /> Dashboard
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className="icon" /> Profil
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} className="icon" /> Modules
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} className="icon" /> Alertes
            </li>
          </ul>
        </nav>
        <div className="logout">Déconnexion</div>
      </aside>

      <main className="main-content">
        <div className="top-bar">
          <h1 className="welcome">
            Bienvenue <span>M. Dupont</span>
          </h1>
          <button className="wishlist-button">
            <FontAwesomeIcon icon={faClipboard}  />Liste de Vœux
          </button>
        </div>

        <div className="cards">
          <div className="card">
            <h2>Affectations</h2>
            <div className="card-item">
              <span className="dot">📍</span>L2 ACAD Sec-C
            </div>
            <div className="card-item">
              <span className="dot">📍</span>ING1 Sec-A
            </div>
          </div>

          <div className="card">
            <h2>Modules Assignés</h2>
            <div className="card-item">Analyse 1 TD-G1</div>
            <div className="card-item">Analyse 2 COURS</div>
            <div className="card-item">Analyse numérique TD-G4</div>
          </div>

          <div className="card">
            <h2>Heures de Charge</h2>
            <p>
              Heures Effectuées : <strong>180 h</strong>
            </p>
            <p>
              Objectif Annuel : <strong>240 h</strong>
            </p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
