import React, {useState} from "react";

const Todo= (props) => {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState("");
    // const [check, setCheck] = useState ({
    //     isDone: false
    // })




    const todoHandler = event => {
        setTodo(event.target.value)
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(`submitted`);
        const newTodo = {
            todo: todo,
            isDone: false
        };

        setTasks([...tasks, newTodo]);
        setTodo("");
        // setCheck([...check, newTodo]);
    }


    const onDeleteHandler = (index) => {
        console.log(`deleting at index of ${index}`);
        const newArray = [...tasks];
        newArray.splice(index, 1);
        setTasks(newArray);
    }
    // const onCheckBox = (event) => {
    //     setCheck({
    //         ...check,
    //         [event.isDone]: event.type ==="checkbox" ? false : true
    //     })
    // }
    const todoNotDone =  {
        textDecoration:"none"
    }

    const todoDone =  {
        textDecoration: "line-through"
    }


    const onCheckHandler = (index) => {
        const newArray = [...tasks];
        if (newArray[index].isDone ) {
            newArray[index].isDone = false
        } else {
            newArray[index].isDone = true
        }
        setTasks(newArray);

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
            <div >
                {
                    tasks.map ((task, i) => {
                        return (
                                <li key={i}  style={{color: "white"}} > <span style={task.isDone? todoDone: todoNotDone}>{task.todo}</span>
                                <input type="checkbox" name="isDone" onChange={() => {onCheckHandler(i)} }/>
                                <button onClick={()=>{onDeleteHandler(i)}} style={{color: "red"}}> X </button></li>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Todo;