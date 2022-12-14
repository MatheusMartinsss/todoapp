import React from 'react'


const GroupForm = ({onCancel, addGroup, status}) => {
    const [form, setForm] = useState({  name: '', status: status || '' })
    return (
        <Box
            padding={5}
            display='flex'
            flexDirection='column'
            gap={1}
        >
            <TextField fullWidth placeholder="Nome" value={form.name} onChange={({ target }) => setForm((form) => ({ ...form, name: target.value }))}></TextField>
            <Stack
                display='flex'
                flexDirection='row'
                gap={1}
            >
                <Button onClick={onCancel} color="error" variant="contained" fullWidth>Cancelar</Button>
                <Button onClick={addGroup} color="success" variant="contained" fullWidth>Criar</Button>
            </Stack>
        </Box>
    )
}

export default GroupForm;