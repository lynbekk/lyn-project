import React, { useState } from 'react';
import './Dashboard.css';
import { LayoutDashboard, User, BookOpen, Bell, LogOut } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import logo from './eduorg.logo.png';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <img src={logo} alt="EduOrg Logo" className="logo" />
        <nav className="menu">
          <div className={`menu-item ${activeItem === 'Dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('Dashboard')}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
            {activeItem === 'Dashboard' && <span className="red-dot" />}
          </div>
          <div className={`menu-item ${activeItem === 'Profil' ? 'active' : ''}`} onClick={() => handleNavClick('Profil')}>
            <User size={18} />
            <span>Profil</span>
          </div>
          <div className={`menu-item ${activeItem === 'Modules' ? 'active' : ''}`} onClick={() => handleNavClick('Modules')}>
            <BookOpen size={18} />
            <span>Modules</span>
          </div>
          <div className={`menu-item ${activeItem === 'Alertes' ? 'active' : ''}`} onClick={() => handleNavClick('Alertes')}>
            <Bell size={18} />
            <span>Alertes</span>
          </div>
        </nav>
        <div className="logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Déconnexion</span>
        </div>
      </aside>

      <main className="main-content">
        <div className="content">
          <div className="top-bar">
            <h1 className="welcome">Bienvenue <span>M. Dupont</span></h1>
            <button className="wishlist-button">
              <FontAwesomeIcon icon={faClipboard} /> Liste de Vœux
            </button>
          </div>

          <div className="cards">
            <div className="card">
              <h2>Affectations</h2>
              <div className="card-item"><span className="dot">📍</span>L2 ACAD Sec-C</div>
              <div className="card-item"><span className="dot">📍</span>ING1 Sec-A</div>
            </div>

            <div className="card">
              <h2>Modules Assignés</h2>
              <div className="card-item">Analyse 1 TD-G1</div>
              <div className="card-item">Analyse 2 COURS</div>
              <div className="card-item">Analyse numérique TD-G4</div>
            </div>

            <div className="card">
              <h2>Heures de Charge</h2>
              <p>Heures Effectuées : <strong>180 h</strong></p>
              <p>Objectif Annuel : <strong>240 h</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
