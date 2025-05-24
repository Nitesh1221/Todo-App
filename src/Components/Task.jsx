import React, { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import Input from "./Input";

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
      className="bg-blue-300 h-min flex justify-between items-center "
      key={task.id}
      onClick={handleTaskExpend}
      >
        {/* <input type="checkbox" name="" id="" /> */}
      <div className={`w-lg text-lg text-ellipsis overflow-hidden  ${expend}`}>
        {task.title}
      </div>

      <div className="h-min">{task.due_date}</div>
      <Button className="bg-red-500 h-min" onClick={() => {handleDelBtn(task.id)}}>Delete</Button>
    </Container>
  );
};

export default Task;
