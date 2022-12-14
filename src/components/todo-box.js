import { Box, Divider, Typography } from '@mui/material';
import React from 'react'
import TodoList from './todo-list';
const TodoBox = ({ todos, status, index }) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            minWidth='300px'
            bgcolor='#1E80FF'
            gap={2}
            padding='10px'
        >
            <Typography align='left' color='white' variant="h5">{status}</Typography>
            <Divider />
            <TodoList
                index={index}
                status={status}
                todos={todos}
            />
        </Box>
    )
}
export default TodoBox;