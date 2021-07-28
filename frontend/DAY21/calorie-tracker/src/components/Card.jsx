import './Card.css'


function Card({ data, calorie, setTracker ,idx , tracker}) {
    function deleteHandler() {
        // console.log("deleted", data);
        const newTracker = tracker.filter((el , i) => i !== idx);
        // console.log(newTracker);
        setTracker(newTracker);
    }
    return (
        <div className="card">
            <h2>{data}</h2>
            <p>{calorie} calories consumed</p>
            <div className="actions">
                <button>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
            
        </div>
    )
}

export default Card;