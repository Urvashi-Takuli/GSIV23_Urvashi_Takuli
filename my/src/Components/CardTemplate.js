import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardTemplate(props) {
    const { movieName, posterImage, rating, description, setActiveCard, movieData } = props;
    const overview = description?.split('.');
    return (
        <Card>
            <CardActionArea onClick={()=> setActiveCard(movieData)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={posterImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {movieName}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" >
                        {overview?.[0]}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}