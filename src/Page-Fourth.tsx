import React from 'react'
import Box from '@mui/material/Box';
import Posting from './Component/PostingFourthPage'
import SmileFace from './assest/smileFace.svg'
import SortBy from './Component/SortBy'

function PageFourth() {
    return (
        <div>
            <Box className="bg-gradient w-[100%] flex justify-center">
                <Box className="w-[80%] h-[280px] flex gap-5 items-center">
                    <img src={SmileFace} className="w-[70px] h-[70px]" alt="" />
                    <Box>
                        <h1 className="text-[24px] font-bold">TEST USER</h1>
                        <p className="text-[20px] text-[#626262]">24 memes</p>
                    </Box>
                </Box>
            </Box>
            <Box className="flex justify-end md:w-[89%] w-[99%]">
                <SortBy/>
            </Box>
            <Box className="gradient flex flex-col items-center mb-10">
                <Posting />
            </Box>
        </div>
    )
}

export default PageFourth
