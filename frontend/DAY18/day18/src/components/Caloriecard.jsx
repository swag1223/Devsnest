import "./Caloriecard.css";

function Caloriecard(props) {
  return (
    <div className="caloriecard" style={props.style}>
      <h2>{props.item}</h2>
      <p>You have cosumed {props.calorie} cals today.</p>
    </div>
  );
}
function Card() {
  const caloriecard = [
    { item: "Pizza", calorie: 256 },
    { item: "Burger", calorie: 165 },
    { item: "Coke", calorie: 20 },
    { item: "Ice Cream", calorie: 40 },
    { item: "Fried Rice", calorie: 90 },
    { item: "Pasta", calorie: 236 },
    { item: "Pani puri", calorie: 26 },
    { item: "French Fries", calorie: 176 },
    ];
   
    
    
  return (
    <div className="container">
      <h1>Calorie Read Only</h1>
      <div className="card">
        {caloriecard.map((value, indx) => (
            <Caloriecard key={indx} item={value.item} calorie={value.calorie} style={{ backgroundColor: value.calorie > '100' ? 'orange' : 'grey'}}/>
        ))}
      </div>
    </div>
  );
}

export default Card;
