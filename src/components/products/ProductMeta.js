import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../../styles/products'

const ProductMeta = ({ product, matches }) => {
    return (
        <ProductMetaWrapper>
            <Typography variant={matches ? "body2" : "h4"} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches ? "caption" : "body1"}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}

export default ProductMeta