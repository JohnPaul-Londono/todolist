import React, {useState} from "react";

const Todo= (props) => {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState("");



    const todoHandler = event => {
        setTodo(event.target.value)
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(`submitted`)
        const newTodo = {
            todo: todo,
            isDone: false
        };

        setTasks([...tasks, newTodo]);
        setTodo("");
    }


    const onDeleteHandler = (index) => {
        console.log(`deleting at index of ${index}`);
        const newArray = [...tasks];
        newArray.splice(index, 1);
        setTasks(newArray);
    }

    const todoNotDone =  {
        textDecoration:"none"
    }

    const todoDone =  {
        textDecoration: "line-through"
    }




    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="todo" style={{color:"white", margin: "10px"}}>To do:</label>
                    <input type="text" name="todo" onChange={todoHandler} style={{margin: "10px"}} value={todo} />
                    <input type="submit" value="Add" />
                </div>
            </form>
            <div>
                {
                    tasks.map ((tasks, i) => {
                        return (
                                <li key={i}  style={{color: "white"}} > <span style={tasks.isDone? todoDone: todoNotDone}>{tasks.todo}</span>
                                <input type="checkbox" name="isDone" onChange={() => (tasks.isDone?  false: true)} />
                                <button onClick={()=>{onDeleteHandler(i)}} style={{color: "red"}}> X </button></li>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Todo;