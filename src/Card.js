import "./Card.css"; // You can style as needed

const Card = ({ data, onImageClick }) => {
    return (
        <div className='card' onClick={() => onImageClick(data)}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
        </div>
    );
};

export default Card;
