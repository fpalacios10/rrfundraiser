import React, { useEffect } from "react";
import "./SidePanel.css";

const SidePanel = ({ isOpen, data, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Prevent background scroll
        } else {
            document.body.style.overflow = ""; // Reset overflow when panel closes
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = ""; // Ensure overflow is reset on unmount
        };
    }, [isOpen]);

    return (
        <div className={`side-panel ${isOpen ? "open" : ""}`}>
            <button className='close-button' onClick={onClose}>
                ×
            </button>
            <div className='side-card'>
                <img src={data?.image} alt={data?.title} />
                <h2>{data?.title}</h2>
                <ul>
                    {data?.Items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidePanel;
