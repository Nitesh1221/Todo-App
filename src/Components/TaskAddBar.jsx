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
    <Container className="border flex not-sm:flex-col justify-between flex-wrap gap-2 ">
      <Input
        className="w-full md:w-md"
        placeholder="Enter task name ..."
        ref={title}
      ></Input>

      <Input type="date" ref={dueDate} className='not-md:w-full'></Input>
      <Button onClick={handleClick} className='w-full md:w-auto not-md:py-2'>Add </Button>
      
    </Container>
  );
};

export default TaskAddBar;
