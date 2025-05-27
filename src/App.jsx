import React, { useState } from "react";
import Container from "./Components/Container";
import TaskAddBar from "./Components/TaskAddBar";
import Task from "./Components/Task";
import { StoreTask, AccessTask, DeleteTask } from "./Storage/StoreTask";

const App = () => {
  const [tasks, setTasks] = useState(AccessTask());
  const [count, setCount] = useState(tasks.length);




  const handleAddTask = (title, due_date) => {
    const newTask = {
      id: count,
      title,
      due_date,
    };
    StoreTask(newTask);
    setCount(pre => pre + 1) 
    setTasks(AccessTask())
  };

  const handleDeleteTask = (id) => {
    DeleteTask(id);
    setTasks(AccessTask())
  };

  return (
    <Container className=" max-w-4xl p-4 m-auto grid grid-flow-row gap-4  ">
      <Container className="bg-blue-500 atma-light text-center">
        Todo Applicaiton
      </Container>
      <TaskAddBar handleAddTask={handleAddTask}></TaskAddBar>
      <Container className=" max-h-[70vh] border grid grid-cols-1   gap-2 overflow-y-scroll  ">
        {tasks.length == 0 ? (
          <div className=" atma-light text-pink-500 text-center  ">
            Enjoy your day
          </div>
        ) : (
          <>
            <div>Total Task : {tasks.length} </div>
            {tasks.map((task) => (
              <Task
                task={task}
                key={task.id}
                handleDeleteTask={handleDeleteTask}
              ></Task>
            ))}
          </>
        )}
        {/* <Task task={task1}></Task> */}
      </Container>
    </Container>
  );
};

export default App;
