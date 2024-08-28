import React, { useState } from "react";
import Card from "./Card";
import SidePanel from "./SidePanel";
import ContentContainer from "./ContentContainer";
import "./App.css"; // You can style as needed
import jsonData from "./data";

const App = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control the side panel
    const [selectedData, setSelectedData] = useState(null);

    // Function to handle image click
    const handleImageClick = (data) => {
        setSelectedData(data);
        setIsOpen(true); // Open the panel
    };

    // Function to handle side panel close
    const handleClose = () => {
        setIsOpen(false); // Close the panel
        setSelectedData(null); // Clear the selected data
    };

    return (
        <div className='app'>
            <ContentContainer />

            <div className='card-container'>
                {jsonData.map((data, index) => (
                    <Card
                        key={index}
                        data={data}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>
            <div className='venmo-container'>
                <p>
                    Can't make it to the event but still want to participate in
                    the Raffles?
                </p>
                <p>
                    Use the Venmo link below to send Christina Palacios which
                    basket and how many tickets you want and we can add them in
                    for you.
                </p>

                <a href='https://venmo.com/?txn=pay&audience=friends&recipients=christinapalacios91'>
                    <img src='images/Venmo-Button.png' alt='venmo-button' />
                    <span>@christinapalacios91</span>
                </a>
            </div>
            {/* Overlay */}
            {selectedData && <div className='overlay' onClick={handleClose} />}

            {/* SidePanel */}
            <SidePanel
                isOpen={isOpen}
                data={selectedData}
                onClose={handleClose}
            />
        </div>
    );
};

export default App;
