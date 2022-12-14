import { Dialog } from '@mui/material'
import React from 'react'


const FormModal = ({ open, handleModal, children }) => {
    return (
        <Dialog
            open={open}
            onClose={handleModal}
        >
            {children}
        </Dialog>
    )
}
export default FormModal