import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Box className="w-[100%] h-[48px] flex justify-end">
            <Box className="md:w-[60%] w-[100%] flex sm:flex-row flex-col sm:justify-between justify-center items-center text-[#646464]pr-5">
                <Typography sx={{fontSize:12}}>© 2022 Tech, Inc. All Rights Reserved</Typography>
                <Typography className="text-[#2066C7] cursor-pointer" sx={{fontSize:12}}>
                    Privacy Policy   |   Terms and Conditions
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
