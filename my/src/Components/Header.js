import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Home from '@mui/icons-material/Home';
import './Header.css';
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const { title, toHome } = props;
    const navigate = useNavigate();

    // function to handle home 
    function handleNavigation() {
        navigate('/');
    }
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                {toHome && <IconButton onClick={handleNavigation}>
                    <Home sx={{ color: '#6880ab' }} />
                </IconButton>}
            </Toolbar>
        </AppBar>
    );
}
