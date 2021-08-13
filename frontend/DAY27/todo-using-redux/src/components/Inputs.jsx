import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/actionsindex";


function Input() {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    
    function addHandler() {
        // console.log("clicked");
        dispatch(addTodo({
            title: todo,
            done: false
        }));
        setTodo("");

    }
    return (
        <div className="input-area">
            <input type="text" placeholder="Add a TODO" value={todo}
                onChange={(e) =>
                    setTodo(e.target.value)
                }
               
                
            />
            <button onClick={addHandler}>Add</button>
        </div>
    )
}

export default Input;