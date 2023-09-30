import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LoginContext from '../context/LoginContext'; 
import CircleImage from '../assets/img/circle.png'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 

const Profile = () => {
    const { userName } = useContext(LoginContext); 


    const navigate = useNavigate(); 

    
    const handleRouteToUpdatePage = () => {
        navigate(`/${userName}/profileupdate`)
    }
    
    return (
        <>
            <Container style={{display: 'flex', flexDirection: 'row'}}>
                <Box>
                    <Box onClick={handleRouteToUpdatePage}sx={{width: '250px', height: '250px'}}>
                        <img src={CircleImage} alt="Circle" className="uploaded-image"/>                                    
                    </Box>
                    <Box sx={{marginTop: '50%', marginLeft: '39%'}}>
                        <Button onClick={handleRouteToUpdatePage} style={{backgroundColor: '#3e8e41', color: 'white'}}>Update Profile</Button>
                    </Box>
                </Box> 
               

                <Container style={{marginLeft: '25%', display: 'flex', flexDirection: 'column'}}>
                    <Box>
                        <Typography variant="h4" color="white">
                            Profile Summary
                        </Typography>                        
                    </Box>
                    <Box>
                        <Typography variant="h4" color="white">
                            Skills
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" color="white">
                            Connect with me
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default Profile; 