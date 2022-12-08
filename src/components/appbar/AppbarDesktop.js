import { Search } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import Actions from './actions'

const AppbarDesktop = ({ matches }) => {
    const { setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type='row'>
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon onClick={() => setShowSearchBox(true)}>
                        <Search />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}

export default AppbarDesktop