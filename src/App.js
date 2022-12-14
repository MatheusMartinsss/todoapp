

import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import todos from './todos.json'
import TodoBox from "./components/todo-box";

const groupByStatus = (items) => items.reduce(
  (result, item) => ({
    ...result,
    [item['status']]: [
      ...(result[item['status']] || []),
      item,
    ],
  }),
  {},
)
function App() {
  const [todoList, setTodoList] = useState(groupByStatus(todos));

  const move = (source, destination, droppableSource, newStatus, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    removed.status = newStatus
    destClone.splice(droppableDestination.index, 0, removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result
  }
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }
  const onDragEnd = (result) => {
    const {
      source,
      destination,
    } = result;
    if (!destination) {
      return
    }
    const sInd = source.droppableId;
    const dInd = destination.droppableId;
    if (sInd === dInd) {
      const items = reorder(todoList[sInd], source.index, destination.index)
      let newState = todoList
      newState[sInd] = items;
      setTodoList({ ...newState })
    } else {
      const _result = move(todoList[sInd], todoList[dInd], source, dInd, destination)
      let newState = todoList
      newState[sInd] = _result[sInd]
      newState[dInd] = _result[dInd]
      setTodoList({ ...newState })
    }
  }
  return (
    <Box
      display='flex'
      margin='auto'
      padding='5px'
      flexDirection='column'
      maxWidth='1200px'
    >
      <Button variant="contained" size="small">Add new group</Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack
          display='flex'
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          gap={2}
        >
          {Object.entries(todoList).map(([status, data], index) => (
            <TodoBox
              key={status}
              index={index}
              status={status}
              todos={data}
            />
          ))}
        </Stack>
      </DragDropContext >
    </Box>
  );
}

export default App;
