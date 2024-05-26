import { useContext, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import "./listTasks.css";

const ListTasks = () => {
  const [editing, setEditing] = useState(false);
  const [editingTask, setEditingTask] = useState("")
  const [currentTask, setCurrentTask] = useState("")
  const [currentId, setCurrentId] = useState()
  const { tasks, setIsAuthenticated, setTasks } =
    useContext(GlobalStateContext);


  const handleChange = (e) => {
    setEditingTask(e.target.value)

    console.log(editingTask)
  }

  const handleEditing = (index, task) => {
    setEditing(true);
    setCurrentTask(task)
    setCurrentId(index)
    console.log(index, task)
  };

  const eliminar = (index) => {
    const filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks(filteredTasks);
  };


  const handleUpdate = () => {

    if (editingTask.trim() !== "") {
      tasks[currentId] = editingTask
      console.log(tasks[0])
      setEditingTask("")

    }
    setEditing(false)

  }


  return (
    <div>
      <h1>Lista de tareas</h1>

      {editing ?
        (<div className="editing">
          <input type="text" placeholder={currentTask} defaultValue={currentTask} onChange={(e) => handleChange(e)} />
          <button className="button-update" onClick={handleUpdate}>update</button>
        </div>)
        :


        ""
      }



      <ul>
        {tasks.map((task, index) => (
          <div key={index} className="list-tasks">
            <li>{task}</li>
            <button className="button-eliminar" onClick={() => eliminar(index)}>Eliminar</button>
            <button className="button-editar" onClick={() => handleEditing(index, task)}>Editar</button>
          </div>
        ))}
      </ul>

      <button onClick={() => setIsAuthenticated(false)}>Logout</button>
    </div>
  );
};

export default ListTasks;
