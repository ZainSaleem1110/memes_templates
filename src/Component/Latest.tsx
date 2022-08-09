import React from 'react'
import Box from '@mui/material/Box';
import Pagination from './pagination'
import Typography from '@mui/material/Typography';
import PostingCard from './posting';
import Button from '@mui/material/Button';

const Latest =()=> {
    return (
        <Box className="w-[100%]">
            <Box className="flex md:flex-row flex-col items-center justify-end mt-3 ">
                <Typography className="pr-7 md:pb-0 pb-3"><span className="text-[gray]">1 - 12 of 456</span></Typography>
                <Pagination />
            </Box>
            <PostingCard/>
        </Box>
    )
}

export default Latest
