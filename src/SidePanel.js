import React from "react";
import "./SidePanel.css"; // You can style as needed

const SidePanel = ({ data, onClose }) => {
    if (!data) return null;

    // Prevent clicks inside the panel from closing it
    const handlePanelClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='side-panel' onClick={handlePanelClick}>
            <button className='close-button' onClick={onClose}>
                X
            </button>
            <img src='data.image' />
            <h2>{data.title}</h2>
            <ul>
                {data.Items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SidePanel;
