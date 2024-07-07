function Card({ imageURL, name, about, price }) {
    return (
        <div className="cursor-pointer">
            <img src={imageURL}  
            className="h-[80vh]"/>
            <h1 className="font-semibold text-lg">{name}</h1>
            <p className="text-gray-500">{about}</p>
            <p className="font-medium">{price}</p>
        </div>
    )
}

export default Card;