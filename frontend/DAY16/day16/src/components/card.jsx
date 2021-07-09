import nightsky from "../nightsky.jpg"
import "./card.css";

function Media() {
    return (
        <div className="media">
            <img src={nightsky} alt="photo" />
        </div>
    )
}
function Card() {
    return (
        <div className="card">
            <Media/>
            <h3>React Card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed, nostrum, modi voluptate hic ab deleniti ea consequatur rem magnam repellat dignissimos voluptatibus aperiam officiis esse inventore at iusto corporis.</p>
        </div>
    )
}

export default Card;