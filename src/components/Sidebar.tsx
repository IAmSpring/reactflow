import React, { useState } from 'react';
import './Sidebar.css';
import SidebarExpandedMenu from './SidebarExpandedMenu';

const Sidebar = ({ onRotate, onOpenSettings, onSaveProject, onLoadProject, onClearBoard, onAddNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sidebar">
      <button 
        className={`sidebar-button ${showMenu ? 'selected' : ''}`} 
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">AI</text>
        </svg>
      </button>
      {showMenu && <SidebarExpandedMenu />}
      <button className="sidebar-button" onClick={onAddNode}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="none" />
          <line x1="12" y1="6" x2="12" y2="18" stroke="#fff" strokeWidth="2" />
          <line x1="6" y1="12" x2="18" y2="12" stroke="#fff" strokeWidth="2" />
        </svg>
      </button>
      <button className="sidebar-button" onClick={onSaveProject}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g stroke="none" strokeWidth="1" fill="#fff" fillRule="evenodd">
            <path d="M19,10 C19.552,10 20,9.553 20,9 L20,5 C20,4.447 19.552,4 19,4 C18.448,4 18,4.447 18,5 L18,9 C18,9.553 18.448,10 19,10 L19,10 Z M30,28 C30,29.104 29.104,30 28,30 L4,30 C2.896,30 2,29.104 2,28 L2,4 C2,2.896 2.896,2 4,2 L6,2 L6,12 C6,13.104 6.896,14 8,14 L24,14 C25.104,14 26,13.104 26,12 L26,2 L28,2 C29.104,2 30,2.896 30,4 L30,28 L30,28 Z M8,2 L24,2 L24,11 C24,11.553 23.552,12 23,12 L9,12 C8.448,12 8,11.553 8,11 L8,2 L8,2 Z M28,0 L4,0 C1.791,0 0,1.791 0,4 L0,28 C0,30.209 1.791,32 4,32 L28,32 C30.209,32 32,30.209 32,28 L32,4 C32,1.791 30.209,0 28,0 L28,0 Z" />
          </g>
        </svg>
      </button>
      <button className="sidebar-button" onClick={onLoadProject}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21V9" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 12L11.8939 6.10607C11.9525 6.04749 12.0475 6.04749 12.1061 6.10607L18 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <button className="sidebar-button" onClick={onClearBoard}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M16 4H16.01M16 12H16.01M12 4H12.01M12 8H12.01M12 12H12.01M12 16H12.01M12 20H12.01M16 20H16.01M8 4H8.01M8 12H8.01M4 4H4.01M4 8H4.01M4 12H4.01M4 16H4.01M4 20H4.01M8 20H8.01M20 4H20.01M20 8H20.01M20 12H20.01M20 16H20.01M20 20H20.01" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="sidebar-button" onClick={onOpenSettings}>
        <img src="/gear-icon.svg" alt="Settings" style={{ width: '24px', height: '24px', filter: 'invert(1)' }} />
      </button>
      <button className="sidebar-button" onClick={onRotate}>
        <img 
          src="/rotate-icon.svg" 
          alt="Rotate" 
          style={{ 
            width: '24px', 
            height: '24px',
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
            filter: 'invert(1)'
          }} 
        />
      </button>
    </div>
  );
};

export default Sidebar;