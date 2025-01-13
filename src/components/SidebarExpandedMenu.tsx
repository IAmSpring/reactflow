import React, { useState } from 'react';
import './SidebarExpandedMenu.css';

const SidebarExpandedMenu = () => {
  const [selectedMain, setSelectedMain] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMainClick = (item: string) => {
    setSelectedMain(item);
    setShowSubMenu(item === 'Data Automation');
  };

  return (
    <div className="expanded-menu">
      <div className="main-menu">
        {['Data Automation', 'Machine Learning', 'Data Connectors', 'Code', 'Run Schedules', 'Logs'].map(item => (
          <div
            key={item}
            className={`menu-item ${selectedMain === item ? 'selected' : ''}`}
            onClick={() => handleMainClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {showSubMenu && (
        <div className="sub-menu" style={{ position: 'absolute', left: '200px', top: '0' }}>
          {['New Automation Job', 'Live Jobs', 'Archived Jobs'].map(subItem => (
            <div key={subItem} className="sub-menu-item">
              {subItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarExpandedMenu; 