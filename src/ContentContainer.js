// src/ContentContainer.js
import React from "react";
import "./App.css"; // Import CSS if it has styles related to this component

const ContentContainer = () => {
    return (
        <div className='content-container'>
            <h1>Rocky Ridge School Carnival Fundraiser</h1>
            <h2 className='date'>September 7th, 2024</h2>
            <h2>
                <span>Location:</span> Big Pavillion - Rocky Ridge Park
            </h2>
            <h2>
                <span>Food:</span> 11am - 8pm
            </h2>
            <h2>
                <span>Games:</span> 1pm - 5:30pm
            </h2>
            <h2>
                <span>Bouncy House:</span> 11am - 6pm
            </h2>
            <h2>
                <span>Mechanical Bull:</span> 12pm - 4pm
            </h2>
            <h2>
                <span>Dance Program:</span> 6pm - 6:30pm-ish
            </h2>
            <h2>
                <span>Raffle and Auction:</span> Immediately following Dance
                Program
            </h2>

            <h2 className='small-red'>
                All proceeds will be for the new school.
            </h2>
            <br />
            <h1>Raffle and Auction Baskets</h1>
            <h5>Click an image to see details of contents of baskets</h5>

            <img
                className='icon'
                id='female-dancer'
                src='images/female-dancer.jpg'
                alt='dancer'
            />
            <img
                className='icon'
                id='mechanical-bull'
                src='images/mechanical-bull.jpg'
                alt='mechanical bull'
            />
            <img
                className='icon'
                id='jumping-castle'
                src='images/jumping-castle.jpg'
                alt='jumping castle'
            />
            <img className='icon' id='food' src='images/food.jpg' alt='food' />
        </div>
    );
};

export default ContentContainer;
