import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GiftBox from '../assest/giftbox.svg'
import Tabs from "./Tabs"

function Post() {
    return (
        <Box className="sm:w-[90%] w-[100%] py-20 md:px-14 sm:px-4 px-0 bg-white rounded-lg" style={{borderRadius:"20px !important"}}>
            <Box className="flex md:flex-row flex-col justify-between items-center">
                <Typography style={{fontWeight:"bold !important"}}><span className="text-[28px]">Browse Memes</span></Typography>
            </Box>
            <Tabs/>
        </Box>
    )
}

export default Post
