import "./card.css";

function Caloriecard(props) {
    return (
        <div className="caloriecard">
            <h2>{props.title}</h2>
            <p>You have cosumed {props.calorie} cals today.</p>
        </div>
    )
}
function Card() {
    return (
        <div className="container">
            <h1>Calorie Read Only</h1>
            <div className="card">
                <Caloriecard title="Pizza" calorie="56"/>
                <Caloriecard title="Burger" calorie="69"/>
                <Caloriecard title="Coke" calorie="500"/>
                <Caloriecard title="Brownie" calorie="180"/>
                <Caloriecard title="Fried Rice" calorie="90"/>
                <Caloriecard title="Pasta" calorie="300"/>
                <Caloriecard title="Pani Puri" calorie="10"/>
            </div>
        </div>
    )
}

export default Card;