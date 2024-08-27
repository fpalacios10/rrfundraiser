import React, { useState } from "react";
import Card from "./Card";
import SidePanel from "./SidePanel";
import "./App.css"; // You can style as needed

const App = () => {
    const [selectedData, setSelectedData] = useState(null);

    const handleImageClick = (data) => {
        setSelectedData(data);
    };

    const handleClosePanel = () => {
        setSelectedData(null);
    };

    const jsonData = [
        {
            image: "images/folder/img.jpg",
            title: "Gift Basket 1",
            Items: ["item 1", "item 2", "item 3"],
        },

        {
            image: "images/folder/img.jpg",
            title: "Gift Basket 2",
            Items: ["item 1", "item 2", "item 3"],
        },
        {
            image: "images/folder/img.jpg",
            title: "Gift Basket 3",
            Items: ["item 1", "item 2", "item 3"],
        },
        {
            image: "images/folder/img.jpg",
            title: "Gift Basket 4",
            Items: ["item 1", "item 2", "item 3"],
        },
    ];

    return (
        <div className='app'>
            <div className='card-container'>
                {jsonData.map((data, index) => (
                    <Card
                        key={index}
                        data={data}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>
            {selectedData && (
                <div className='overlay' onClick={handleClosePanel}>
                    <SidePanel data={selectedData} onClose={handleClosePanel} />
                </div>
            )}
        </div>
    );
};

export default App;
