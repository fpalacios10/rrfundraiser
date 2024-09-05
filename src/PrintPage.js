import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "./data";

import "./App.css"; // You can style as needed

const PrintPage = () => {
    // Get the basket number from the URL parameter
    const { basketNumber } = useParams();

    // Find the basket with the matching number from jsonData
    const basket = jsonData.find((item) =>
        item.title.includes(`Basket #${basketNumber}`)
    );

    // If no basket is found, display a message
    if (!basket) {
        return <div>No basket found with this number.</div>;
    }

    return (
        <div
            className='print-page'
            style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
        >
            {/* Use PUBLIC_URL to get the correct image path */}
            <img
                src={`${process.env.PUBLIC_URL}/${basket.image}`} // Ensure image path is correct
                alt={basket.title}
                style={{ maxWidth: "100%", height: "400px" }} // Make the image responsive
            />
            <h2>{basket.title}</h2>
            <ul>
                {basket.Items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default PrintPage;
