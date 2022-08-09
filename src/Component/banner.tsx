import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BannerImg from '../assest/bannerImg.svg'
import Arrow from '../assest/arrow.svg'

export default function BannerCard() {
    return (
        <Box className="w-[100%] lg:h-[600px] h-[500px] relative flex justify-center items-center md:mt-0 mt-5 relative bg-gradient sm:rounded-b-[200px]">
            <Box className="sm:w-[55%] w-[90%] flex justify-between items-center z-50">
                <Box className="ml-5">
                    <Typography>
                        <span className="lg:text-[46px] md:text-[32px] text-[20px] leading-tight text-[black] md:font-normal font-bold">This could be <br /> <span className="text-[#2066C7]">your</span> meme.</span>
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        one does simply make cool memes.
                    </Typography>
                    <Box className="flex justify-end mt-4">
                        <img src={Arrow} alt="" />
                    </Box>
                </Box>
                <Box className="relative flex justify-center md:h-[260px] h-[150px]">
                    <img src={BannerImg} className="w-[340px] md:h-[260px] h-[150px] object-cover" alt="" />
                    <CardActions className="absolute bottom-[-25px] ">
                        <Button className="btn colorBtn">Create a Meme</Button>
                    </CardActions>
                </Box>
            </Box>
        </Box>
    );
}
