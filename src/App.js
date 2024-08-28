import React, { useState } from "react";
import Card from "./Card";
import SidePanel from "./SidePanel";
import "./App.css"; // You can style as needed

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

    const jsonData = [
        {
            image: "images/img1.jpg",
            title: "$110 Value - Basket #1",
            Items: [
                "Pickle ball set",
                "Basketball",
                "Pump",
                "Water bottle",
                "Field Knife",
                "Head lamp",
            ],
        },
        {
            image: "images/img2.jpg",
            title: "$221 Value - Campfire Special",
            Items: [
                "Fire pit",
                "Apple cider Packets",
                "Hot chocolate Packets",
                "Mugs",
                "S’more stuff",
                "Lighters",
                "Roasting Sticks",
                "Blanket",
                "Jerky",
                "Fire starter",
            ],
        },
        {
            image: "images/img3.jpg",
            title: "$152 Value - Boys Dream",
            Items: [
                "Spike ball pro",
                "PickleBall set for 4",
                "Basketball",
                "Football",
            ],
        },
        {
            image: "images/img4.jpg",
            title: "$220 Value - What's Cookin'",
            Items: [
                "Two bowls one large one medium metal",
                "Knives several different sizes",
                "Cups, restaurant style, 6 mini. 6 big",
                "Cutting boards different colors",
                "Container",
                "Utensils",
            ],
        },
        {
            image: "images/img5.jpg",
            title: "$400 Value - Aarons",
            Items: ["Basic survival kit"],
        },
        {
            image: "images/img6.jpg",
            title: "$300 Value - Christian Education Book Set",
            Items: [
                "WASHINGTON",
                "Consider and Ponder",
                "CHOC.1",
                "Teaching and Learning America's Christian History",
                "Webster 1828 Dictionary",
                "CHOC. 2",
            ],
        },
        {
            image: "images/img7.jpg",
            title: "$100 Value - Ready for Christmas",
            Items: [
                "Space excavation kit",
                "Click stick Kit",
                "Ker plunk game",
                "Sky buddies Airplane toys",
                "Spider man RC Car",
                "Light up play balls",
                "Coloring book & Crayons",
                "Spin and flip Watermelon puzzle",
                "Bat & Ball",
                "Cyclone flying disc",
                "Snake in can",
                "Barrel of monkeys",
                "Nucleus ball",
                "Pair of nerf guns",
                "Card games (Slap jack, Old maid, Go fish & Crazy 8’s)",
                "Water bottle",
                "Sour gummies",
                "Ring pops",
                "Fun dip",
                "Pringles",
                "Apple Juice",
                "Gushers",
                "Fruit roll ups",
                "Oreos",
                "Teddy Grahams",
                "2 Army Guys",
            ],
        },
        {
            image: "images/img8.jpg",
            title: "$225 Value - Basket #8",
            Items: [
                "Heated throw blanket",
                "62 oz IGLOO cooler",
                "Large bag Beef Jerky",
                "Large bag sour patch kids",
                "Large bag Mixed nuts",
                "Titan lunch box",
                "Rechargeable beard trimmer",
                "Tailwind quick blade release",
                "Duracell LED headlamp",
                "Airpro air fresheners for car",
                "London fog wallet",
                "Nail care kit",
                "Push up bars",
            ],
        },
        {
            image: "images/img9.jpg",
            title: "$382 Value - Let's Go Hunting",
            Items: [
                "Hammock",
                "Retractable portable clothesline",
                "Rechargeable headlamp (2)",
                "Sawyer mini water filtration",
                "Walkie Talkies",
                "Head lamp (batteries)",
                "Hatchet, Saw & Knife set",
                "Dude wipes",
                "Mountain house (Freeze dried biscuits and gravy)",
                "Freeze dried Stroganoff",
                "Outdoor Edge Knife",
                "Hand warmers",
                "Bug Bracelet",
                "Paracord",
                "Military Surplus Ammo can",
            ],
        },
        {
            image: "images/img10.jpg",
            title: "$378 Value - Mom's Spa Package",
            Items: [
                "Head massager",
                "Iron Flask cups",
                "Foot Zone",
                "Mini photo shoot",
                "Nail Manicure",
                "Claw clips",
                "Shower steamers",
                "White Hand fan",
                "Prayer Journal",
                "Magnesium Deodorant (spring)",
                "Tallow cream",
                "Bar soap",
            ],
        },
        {
            image: "images/img11.jpg",
            title: "$225 Value - Mom's Spa Package",
            Items: [
                "Head Massager",
                "Iro Flask cup",
                "Foot zone",
                "Massage",
                "Nail manicure",
                "Claw clip",
                "Tallow",
                "Bar soap",
                "Shower Steamers",
                "White hand fan",
                "Prayer journal",
                "Sport spray magnesium oil",
                "Moon spray magnesium oil",
                "Gift card $175",
            ],
        },
        {
            image: "images/img12.jpg",
            title: "$250 Value - Barnes and Noble",
            Items: ["Blanket", "Mug", "Tea", "Chocolate", "Gift card"],
        },
        {
            image: "images/img13.jpg",
            title: "$275 Value - Overnight Getaway",
            Items: [
                "Art City Inn (Springville)",
                "Magleby's gift card",
                "Wine glasses",
                "Sparkling cider",
                "Chocolates",
            ],
        },
    ];
    return (
        <div className='app'>
            <h1>Rocky Ridge School Carnival Fundraiser</h1>
            <h2>September 7th, 2024`</h2>

            <h2>
                <span>Location:</span> Big Pavillion - Rocky Ridge Park
            </h2>

            <h2>
                <span>Food:</span> 11am - 6pm
            </h2>

            <h2>
                <span>Games:</span> 1pm - 5:30pm
            </h2>

            <h2>
                <span>Bouncy House:</span> 11am - 6pm <span>Bull</span> 12pm -
                4pm
            </h2>

            <h2>
                <span>Dances and Raffles:</span>
            </h2>
            <h2>Raffle and Auction Baskets</h2>
            <h5>Click an image to see details of contents of baskets</h5>

            <div className='card-container'>
                {jsonData.map((data, index) => (
                    <Card
                        key={index}
                        data={data}
                        onImageClick={handleImageClick}
                    />
                ))}
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
