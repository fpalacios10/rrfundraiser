import "./Card.css"; // You can style as needed

const Card = ({ data, onImageClick }) => {
    return (
        <div className='card' onClick={() => onImageClick(data)}>
            <div className='image-holder'>
                <img src={data.image} alt={data.title} />
                {/* Show "$1 per ticket" only if it's not an auction item */}
                {!data.auctionItem && (
                    <div className='ticket-circle'>
                        <svg className='circle-svg' viewBox='0 0 100 100'>
                            <defs>
                                <path
                                    id='circlePath'
                                    d='M 50, 50
                                       m -40, 0
                                       a 40,40 0 1,1 80,0
                                       a 40,40 0 1,1 -80,0'
                                />
                            </defs>
                            <text>
                                <textPath
                                    href='#circlePath'
                                    startOffset='25%'
                                    text-anchor='middle'
                                >
                                    • Per Ticket •
                                </textPath>
                            </text>
                        </svg>
                        <span className='ticket-text'>$1</span>
                    </div>
                )}
                {data.auctionItem && (
                    <span className='auction-label'>Auction Item</span>
                )}
            </div>
            <h3>{data.title}</h3>
        </div>
    );
};

export default Card;
