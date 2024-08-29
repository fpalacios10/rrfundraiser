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
        title: "$221 Value - Basket #2",
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
        auctionItem: true,
    },
    {
        image: "images/img3.jpg",
        title: "$152 Value - Basket #3",
        Items: [
            "Spike ball pro",
            "PickleBall set for 4",
            "Basketball",
            "Football",
        ],
        auctionItem: true,
    },
    {
        image: "images/img4.jpg",
        title: "$220 Value - Basket #4",
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
        image: "images/bag.jpeg",
        title: "$400 Value - Basket #5",
        Items: ["Basic survival kit", "Details to come"],
    },
    {
        image: "images/books.jpeg",
        title: "$300 Value - Basket #6",
        Items: [
            "CHRISTIAN EDUCATION BOOK SET:",
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
        title: "$100 Value - Basket #7",
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
        auctionItem: true,
    },
    {
        image: "images/img9.jpg",
        title: "$382 Value - Basket #9",
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
        auctionItem: true,
    },
    {
        image: "images/img10.jpg",
        title: "$378 Value - Basket #10",
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
        title: "$225 Value - Basket #11",
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
        auctionItem: true,
    },
    {
        image: "images/coming-soon.jpg",
        title: "$250 Value - Barnes and Noble",
        Items: ["Blanket", "Mug", "Tea", "Chocolate", "Gift card"],
    },
    {
        image: "images/rm-gift-card.jpg",
        title: "$75 Value - Basket #13",
        Items: ["Two separate drawings, each with is a $75 Gift card."],
    },
    {
        image: "images/img14.jpg",
        title: "$252 Value - Basket #14",
        Items: [
            "Iron Flask Cup",
            "1 mini Photo session",
            "Eyelash tint kit",
            "Butterfly clips",
            "Bluetooth speaker",
            "Head massager",
            "Black Bag",
            "LED photo lights",
            "Eye shadow",
        ],
        auctionItem: true,
    },
    {
        image: "images/img15.jpg",
        title: "$126 Value - Basket #15",
        Items: [
            "Iron Flask Cup",
            "Butterfly clips",
            "1 manicure gift certificate",
            "Bluetooth speaker",
            "Head massager",
            "Black bag",
            "LED photo lights",
            "Eye shadow",
            "INFINITRO Hair Curler by Conair",
        ],
    },
    {
        image: "images/capture-flag.jpg",
        title: "$75 Value - Basket #16",
        Items: ["Glow in the Dark"],
    },
    {
        image: "images/img21.jpg",
        title: "$275 Value - Overnight Getaway",
        Items: [
            "Art City Inn (Springville)",
            "$75 Magleby's gift card",
            "Wine glasses",
            "Sparkling cider",
            "Chocolates",
        ],
        auctionItem: true,
    },
    {
        image: "images/swing.png",
        title: "$120 Value - Basket #18",
        Items: ["New Porch Swing"],
    },
    {
        image: "images/img19.jpg",
        title: "$50 Value - Basket #19",
        Items: [
            "Heart Duffle bag",
            "Hair brush",
            "Hooded Cat towel",
            "Soft blanket",
            "Bead making set",
            "Press on fake nails",
            "Ring pops",
            "Socks",
            "Scrunchies",
            "Water bottle",
            "Sour patch kids",
            "Little notebook",
        ],
    },
    {
        image: "images/blanket.jpg",
        title: "$100 Value - Basket ##",
        Items: ["Hand Made Quilt", "Queen Size"],
        auctionItem: true,
    },
    {
        image: "images/img22.jpg",
        title: "$100 Value - Basket 22",
        Items: [
            "Emergency Herbal Kit",
            "Cayenne Tincture",
            "X-Ceptic Tincture",
            "Immuzoon Tincture",
            "Lobelia Tincture",
            "BF&C Ointment",
            "Plantain Salve",
            "Grandma's Salve",
        ],
    },
    {
        image: "images/coming-soon-color.jpg",
        title: "More To Come",
        Items: ["Check Back soon"],
    },
];

export default jsonData;
