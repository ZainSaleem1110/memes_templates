import React from 'react'
import Box from '@mui/material/Box';
import ProfileImg from '../assest/profile.svg'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Post01 from "../assest/recent (2).svg"
import Post02 from "../assest/recent (1).svg"
import Post03 from "../assest/recent (3).svg"
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';

const PostData = [
    { Img: Post01},
    { Img: Post02},
    { Img: Post03},
]

function RecentMems() {
    return (
        <Box className="w-[100%] z-50 py-4 relative drop-shadow-lg flex justify-center items-center mt-5 sm:px-10 px-3">
            <Box className="xl:w-[60%] lg:w-[80%] w-[100%] ">
                <Box className="flex items-center gap-x-4 h-[140px] bg-[#F9FAFB] rounded-lg lg:px-10 px-5">
                    <img src={ProfileImg} className="w-[72px] h-[72px]" alt="" />
                    <Box>
                        <h1 className="sm:text-[32px] text-[20px] font-regular">Welcome back, <span className="font-bold text-[#2066C7]">dandyolly.</span></h1>
                        <h1 className="text-[16px] font-medium text-[#2066C7] mt-2">@dandyolly</h1>
                    </Box>
                </Box>
                <Box className="flex sm:flex-row flex-col sm:justify-between items-center w-[100%] mt-10">
                    <h1 className="sm:text-[32px] text-[20px] font-medium sm:mb-0 mb-5">Your Recent Memes</h1>
                    <Button className="btn outlineBtn w-[121px] h-[44px]">
                        See More
                    </Button>
                </Box>
                <Box className="flex flex-wrap justify-center gap-4 mt-10 w-[100%]">
                {PostData && PostData.map((list, index) => {
                            return <Card key={index} className="xl:w-[350px] w-[310px]">
                                    <img src={list.Img} className="" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                        <Stack spacing={2} direction="row">
                                            <Button startIcon={<ThumbUpIcon />}>1.5k</Button>
                                            <Button startIcon={<VisibilityIcon />}>
                                                1.5k
                                            </Button>
                                        </Stack>
                                        <Button className="btn colorBtn">Remix</Button>
                                    </Box>
                                </Card>
                        })}
                </Box>
            </Box>
        </Box>
    )
}

export default RecentMems
