import { useContext } from "react";
import AddTask from "./AddTask";
import { GlobalStateContext } from "./GlobalStateContext";
import ListTasks from "./ListTasks";

const SomeComponent = () => {
    const { isAuthenticated, setIsAuthenticated } =
        useContext(GlobalStateContext);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <AddTask />
                    <ListTasks />
                </>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default SomeComponent;
