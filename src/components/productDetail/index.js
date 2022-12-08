import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React from 'react'

function SlideTransition(props) {
    return <Slide direction="down"{...props} />
}

const ProductDetail = ({ open, onClose, product }) => {
    return (
        <Dialog TransitionComponent={SlideTransition}
            variant="permanent"
            open={open}
            fullScreen
        >
            <DialogTitle sx={{ background: Colors.secondary }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    Product Title
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>

            </DialogContent>
        </Dialog>
    )
}

export default ProductDetail