import { useTheme } from '@emotion/react'
import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { products } from '../../data'
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';
const Products = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = products.map(product => (
        <Grid item key={product.id} xs={2} sm={4} display='flex' flexDirection={"column"}
            alignItems="center">

            {matches ? <SingleProduct product={product} matches={matches} /> :
                <SingleProductDesktop product={product} matches={matches} />
            }
        </Grid>
    ))
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'} sx={{ margin: '20px 4px 10px 4px' }}>
                {renderProducts}

            </Grid>
        </Container >
    )
}

export default Products