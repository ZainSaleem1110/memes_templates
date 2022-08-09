import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Post01 from "../assest/post1.svg"
import Post02 from "../assest/post2.svg"
import Post03 from "../assest/post3.svg"
import Post04 from "../assest/post4.svg"
import Post05 from "../assest/post5.svg"
import Post06 from "../assest/post6.svg"
import Post07 from "../assest/post7.svg"
import Post08 from "../assest/post8.svg"
import Post09 from "../assest/post9.svg"
import Post10 from "../assest/post10.svg"
import Post11 from "../assest/post11.svg"
import Post12 from "../assest/post12.svg"
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Pagination from './pagination'
import SmileFace from '../assest/smileFace.svg'

const PostData = [
    { Img: Post01, name: "Me in my profile pic vs. me in the zoom meeting" },
    { Img: Post02, name: "Security" },
    { Img: Post03, name: "people in toothpaste commercials" },
    { Img: Post04, name: "[Visible Confusion]" },
    { Img: Post06, name: "*me falling for you*" },
    { Img: Post05, name: "me and my emotions" },
    { Img: Post07, name: "Bill Nye the Science Fry" },
    { Img: Post08, name: "idk what to say so I’m sending this" },
    { Img: Post09, name: "Opening the oven to check on your food like" },
    { Img: Post10, name: "when you click on reload just as the website loaded " },
    { Img: Post11, name: "how to slap someone through the internet" },
    { Img: Post12, name: "Barbie Movie animals be like" },
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Posting() {
    return (
        <Box className="mt-7">
            <Box sx={{ width: '100%' }}>
            <div className="xl:flex hidden ">
                    <Masonry columns={3} spacing={2} className="post">
                        {PostData && PostData.map((list, index) => {
                            return <Item key={index} sx={{ height: "auto", p: 0 }}>
                                <Card>
                                    <img src={list.Img} className="h-[400px] w-full object-cover" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                    <img src={SmileFace} className="w-[32px] h-[32px]" alt="" />
                                        <Stack spacing={1} direction="row">
                                            <Button className="button" startIcon={<ThumbUpIcon />}>1.5k</Button>
                                            <Button className="button" startIcon={<ShareIcon />}>
                                                1.5k
                                            </Button>
                                        </Stack>
                                        <Button className="btn colorBtn">Create</Button>
                                    </Box>
                                </Card>
                            </Item>
                        })}
                    </Masonry>
                </div>
                <div className="md:flex xl:hidden hidden">
                    <Masonry columns={2} spacing={2} className="post">
                        {PostData && PostData.map((list, index) => {
                            return <Item key={index} sx={{ height: "auto", p: 0 }}>
                                <Card>
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                        <Box className="flex items-center">
                                            <Box className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white bg-[#6750A4]">A</Box>
                                            <Typography className="w-[190px] pl-3 text-left">{list.name}</Typography>
                                        </Box>
                                        <LinkIcon />
                                    </Box>
                                     <img src={list.Img} className="h-[400px] w-full object-cover" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                    <img src={SmileFace} className="w-[32px] h-[32px]" alt="" />
                                        <Stack spacing={1} direction="row">
                                            <Button className="button" startIcon={<ThumbUpIcon />}>1.5k</Button>
                                            <Button className="button" startIcon={<ShareIcon />}>
                                                1.5k
                                            </Button>
                                        </Stack>
                                        <Button className="btn colorBtn">Create</Button>
                                    </Box>
                                </Card>
                            </Item>
                        })}
                    </Masonry>
                </div>
                <div className="md:hidden flex justify-center">
                    <Masonry columns={1} spacing={2} className="post">
                        {PostData && PostData.map((list, index) => {
                            return <Item key={index} sx={{ height: "auto", p: 0 }}>
                                <Card className="">
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                        <Box className="flex items-center">
                                            <Box className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-white bg-[#6750A4]">A</Box>
                                            <Typography className="w-[190px] pl-3 text-left">{list.name}</Typography>
                                        </Box>
                                        <LinkIcon />
                                    </Box>
                                     <img src={list.Img} className="h-[400px] w-full object-cover" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                    <img src={SmileFace} className="w-[32px] h-[32px]" alt="" />
                                        <Stack spacing={1} direction="row">
                                            <Button className="button" startIcon={<ThumbUpIcon />}>1.5k</Button>
                                            <Button className="button" startIcon={<ShareIcon />}>
                                                1.5k
                                            </Button>
                                        </Stack>
                                        <Button className="btn colorBtn">Create</Button>
                                    </Box>
                                </Card>
                            </Item>
                        })}
                    </Masonry>
                </div>

            </Box>
            <Box className="flex md:flex-row flex-col items-center justify-end mt-3 ">
                <Typography className="pr-7 md:pb-0 pb-3"><span className="text-[gray]">1 - 12 of 456</span></Typography>
                <Pagination />
            </Box>
        </Box>
    )
}

export default Posting
