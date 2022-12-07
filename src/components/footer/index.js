import { Box, Button, Grid, List, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { FooterTitle, SubscribeTf } from '../../styles/footer'
import { Colors } from '../../styles/theme'
import { Facebook, Send } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Stack } from '@mui/system'
const Footer = () => {
    return (
        <Box sx={{
            background: Colors.shaft,
            color: Colors.white,
            p: { xs: 4, md: 10 },
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px' },
        }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography sx={{ fontWeight: '300' }} >
                        Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                        incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud.
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_gray,
                        }}
                    >
                        <Facebook sx={{ mr: 1 }} />
                        <Twitter sx={{ mr: 1 }} />
                        <Instagram />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                About us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                Privary &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                My cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2}>
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf color="primary" label="Email address" variant='standard'>

                        </SubscribeTf>
                        <Button
                            startIcon={<Send sx={{ color: Colors.white }} />}
                            sx={{ mt: 4, mb: 4 }}
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer