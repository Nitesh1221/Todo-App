import React, { useRef } from "react";
import Container from "./Container";
import Input from "./Input";
import Button from "./Button";

const TaskAddBar = ({ handleAddTask }) => {
  const title = useRef();
  const dueDate = useRef();
  const handleClick = () => {
    const newtitle = title.current.value;
    const newDueDate = dueDate.current.value;
    console.log(newtitle, newDueDate);
    handleAddTask(newtitle, newDueDate);
  };
  return (
    <Container className="border flex justify-between ">
      <Input
        className="w-md"
        placeholder="Enter task name ..."
        ref={title}
      ></Input>
      <Input type="date" ref={dueDate}></Input>
      <Button onClick={handleClick}>Add </Button>
    </Container>
  );
};

export default TaskAddBar;
