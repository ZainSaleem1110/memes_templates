import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import Post01 from "../assest/memes1.svg"
import Post02 from "../assest/post1.svg"
import Post03 from "../assest/memes2.svg"
import Stack from '@mui/material/Stack';
import SmileFace from '../assest/smileFace.svg'
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Pagination from './pagination'

const PostData = [
    { Img: Post03, name: "Me in my profile pic vs. me in the zoom meeting" },
    { Img: Post02, name: "Security" },
    { Img: Post01, name: "people in toothpaste commercials" }
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SecondPageBannerCard() {
    return (
        <Box className="xl:h-[115vh] lg:h-[235vh] md:h-[200vh] sm:h-[480vh] h-[420vh] w-[100%]">
        <Box className="w-[100%] sm:h-[250px] h-[300px] relative flex justify-center pt-10 relative bg-gradient sm:rounded-b-[200px]">
            <Box className="w-[80%]">
                <Box className="flex items-center gap-5">
                    <img src={SmileFace} alt="" />
                    <Typography className="text-[20px]">
                        Welcome back, <span className="font-bold">dandyolly.</span>
                    </Typography>
                </Box>
                <Box className="flex sm:flex-row flex-col justify-between items-center w-[100%] mt-7">
                    <h1 className="text-[28px] font-bold">
                        My Memes
                    </h1>
                    <Box className="flex gap-5 items-center sm:mt-0 mt-5">
                        <p className="text-[#626262]">20 memes created</p>
                        <Button className="btn outlineBtn h-[40px]">
                            View More
                            <ArrowForwardIcon className="ml-2" />
                        </Button>
                    </Box>
                </Box>
                <Box className="mt-7">
            <Box sx={{ width: '100%' }}>
            <div className="xl:flex hidden">
                    <Masonry columns={3} spacing={2} className="post">
                        {PostData && PostData.map((list, index) => {
                            return <Item key={index} sx={{ height: "auto", p: 0 }}>
                                <Card>
                                    <img src={list.Img} className="w-full" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                    <img src={SmileFace} className="w-[32px] h-[32px]" alt="" />
                                        <Stack spacing={2} direction="row">
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
                                    <img src={list.Img} className="w-full" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                    <img src={SmileFace} className="w-[32px] h-[32px]" alt="" />
                                        <Stack spacing={2} direction="row">
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
                            return <Item key={index} className="sm:h-auto h-[560px]" sx={{ p: 0 }}>
                                <Card className="sm:h-auto h-[560px]">
                                    <img src={list.Img} className="w-full h-[488px] object-cover" alt="" />
                                    <Box className="h-[72px] flex items-center justify-between px-4">
                                    <img src={SmileFace} className="w-[32px] h-[32px]" alt="" />
                                        <Stack spacing={2} direction="row">
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
        </Box>
            </Box>
        </Box>
        </Box>
    );
}
