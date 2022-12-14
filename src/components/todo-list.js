import React, { useState } from 'react'
import { Box, Button } from '@mui/material';
import Todo from './todo';
import { Droppable } from "react-beautiful-dnd";
import FormModal from './form-modal';
import TodoForm from './todo-form';
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 8,
    width: 250
});

const TodoList = ({ todos, status, index }) => {
    const [open, setOpen] = useState(false)
    const handleModal = () => setOpen((old) => !old)
    return (
        <Droppable droppableId={status} key={index}>
            {(provided, snapshot) => (
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={1}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                >
                    <Button onClick={handleModal}>Nova tarefa</Button>
                    {provided.placeholder}
                    {todos.map((todo, idx) => (
                        <Todo key={idx} index={idx} todo={todo} />
                    ))}
                    <FormModal
                        open={open}
                        handleModal={handleModal}
                    >
                        <TodoForm onCancel={handleModal} status={status} />
                    </FormModal>
                </Box>
            )}
        </Droppable>
    )
};

export default TodoList