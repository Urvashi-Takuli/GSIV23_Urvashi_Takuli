import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import baseURL from '../baseURL';

export default function CardTemplate(props) {
    const { movieName, posterImage, rating, description, setActiveCard, movieData } = props;
    const overview = description?.split('.');
    return (
        <Card style={{backgroundColor: '#232d3f'}}>
            <CardActionArea 
            onClick={()=> setActiveCard(movieData)}
            style={{padding: '10px 10px'}}
            >
                <CardMedia
                    component="img"
                    image={baseURL + posterImage}
                    sx={{
                        height: 150,
                    }}
                />
                <CardContent>
                    <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div"
                    style={{color: '#748ab2'}}
                    >
                        {movieName}
                    </Typography>
                    <Typography 
                    variant="caption" 
                    color="text.secondary"
                    style={{color: '#c0cadc'}}
                    >
                        {overview?.[0]}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}