import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';


const Header = ({setIsAdding}) => {
  return (
    <Box p={2} sx={{boxShadow: 3}}>
    <Stack direction={'column'} >
        <Typography variant='h3' sx={{fontWeight:"Bold"}} pb={2}>
                Employee Management system
        </Typography>
        <Button variant="contained" sx={{width:"20%" ,borderRadius: 2, }} startIcon={<AddIcon /> } onClick={() => setIsAdding(true)} > Add Employee </Button>
    </Stack>
    </Box>
  )
}

export default Header