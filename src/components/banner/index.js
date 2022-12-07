import React from 'react'
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTtitle } from '../../styles/banner';
export const Banner = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant='h6'>Huge Collection</Typography>
                <BannerTtitle variant='h2'>
                    New Bags
                </BannerTtitle>
                <BannerDescription varint='subtitle'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </BannerDescription>
                <BannerShopButton variant='contained' >Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}
