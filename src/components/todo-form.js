import React, { useState } from 'react'
import { Box, Stack, Button, TextField } from '@mui/material'

const TodoForm = ({ onCancel, addTask, status }) => {
    const [form, setForm] = useState({ id: '', name: '', description: '', status: status || '' })
    return (
        <Box
            padding={5}
            display='flex'
            flexDirection='column'
            gap={1}
        >
            <TextField fullWidth placeholder="Nome" value={form.name} onChange={({ target }) => setForm((form) => ({ ...form, name: target.value }))}></TextField>
            <TextField fullWidth placeholder="Descrição" value={form.description} onChange={({ target }) => setForm((form) => ({ ...form, description: target.value }))}></TextField>
            <TextField fullWidth value={form.status} disabled></TextField>
            <Stack
                display='flex'
                flexDirection='row'
                gap={1}
            >
                <Button onClick={onCancel} color="error" variant="contained" fullWidth>Cancelar</Button>
                <Button onClick={addTask} color="success" variant="contained" fullWidth>Criar</Button>
            </Stack>
        </Box>
    )
}
export default TodoForm