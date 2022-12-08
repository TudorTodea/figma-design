import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';
import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {

    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}><Close sx={{ fontSize: '2.rem', color: Colors.secondary }} /></DrawerCloseButton>}

            <Drawer open={drawerOpen}>

                <List>
                    <ListItemButton>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>
                            Categories
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>
                            Products
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>
                            Abouts Us
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>
                            Contact Us
                        </ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                </List>
            </Drawer>
        </>
    )
}

export default AppDrawer