import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Logo from '../assest/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <Card className="w-[100%] z-50 py-4 relative drop-shadow-lg flex justify-center items-center">
            <Box className="flex md:flex-row flex-col items-center md:justify-between justify-center lg:px-10 px-5 xl:w-[60%] lg:w-[80%] w-[90%]">
                <img src={Logo} className="w-[190px]" alt="" />
                    <Box className="flex items-center lg:min-w-[300px] h-[44px] rounded-full bg-[#F1F1F1] text-[#AFAFAF] px-4 md:ml-[5%] md:mt-0 mt-5">
                        <SearchIcon />
                        <input type="text" name="search" id="" className="bg-[transparent] focus:outline-none w-[100%] ml-3" placeholder="Search" />
                    </Box>
                    <Stack spacing={2} direction="row" className="ml-3 md:mt-0 mt-4">
                        <Button className="btn colorBtn w-[150px] h-[44px]">Create Meme</Button>
                        <Button className="btn outlineBtn w-[130px] h-[44px]" startIcon={<AccountCircleIcon />}>
                            Log In
                        </Button>
                    </Stack>
            </Box>
        </Card>
            )
}

            export default Navbar
