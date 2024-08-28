import "./Card.css"; // You can style as needed

const Card = ({ data, onImageClick }) => {
    return (
        <div className='card' onClick={() => onImageClick(data)}>
            <div className='image-holder'>
                <img src={data.image} alt={data.title} />
                {data.auctionItem && <span>Auction Item</span>}
            </div>
            <h3>{data.title}</h3>
        </div>
    );
};

export default Card;
