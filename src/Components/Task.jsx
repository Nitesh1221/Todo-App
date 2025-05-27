import React, { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const Task = ({ task, handleDeleteTask }) => {
  const [expend, setExpend] = useState("text-nowrap");
  const handleTaskExpend = () => {
    if (expend === "text-nowrap") {
      setExpend("text-wrap");
    } else {
      setExpend("text-nowrap");
    }
  };
  const handleDelBtn = (id) => {
console.log(id, "id h")
handleDeleteTask(id)
  }
  return (
    <Container
      className="bg-blue-300 h-min flex justify-between items-center flex-wrap"
      key={task.id}
      onClick={handleTaskExpend}
      >
      <div className={` md:w-lg py-2 overflow-hidden  flex  ${expend}`}>
        <div className="pr-2 font-bold">#{task.id}</div>
        <div className=" text-ellipsis overflow-hidden ">
        {task.title}

        </div>
      </div>

      <div className="h-min text-neutral-600">{task.due_date}</div>
      <Button className="bg-red-500 h-min" onClick={() => {handleDelBtn(task.id)}}>Delete</Button>
    </Container>
  );
};

export default Task;
