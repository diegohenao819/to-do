import { useContext, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const AddTask = () => {
    const [newTask, setNewTask] = useState("");
    const { tasks, setTasks } = useContext(GlobalStateContext);
    // const [tasks, setTasks] = useState([])

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const guardar = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask(""); // Clear the input field after adding the task
            console.log("Tarea agregada:", newTask);
        }
    };

    return (
        <div>
            <h1>Agregar tarea</h1>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={guardar}>Agregar tarea</button>
        </div>
    );
};

export default AddTask;
