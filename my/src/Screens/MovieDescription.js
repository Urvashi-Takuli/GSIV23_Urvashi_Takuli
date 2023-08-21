import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import baseURL from "../baseURL";

function MovieDescription() {
    const { state } = useLocation();
    return (
        <div>
            <Header title={'Movie Details'} toHome={true} />
            <Card style={{ backgroundColor: '#232d3f' }}>
                <CardMedia
                    component="img"
                    image={baseURL + state.movie.poster_path}
                    sx={{
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 2,
                        width: '98%',
                        height: 300
                    }}
                />
                <CardContent>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        <Typography
                            gutterBottom
                            variant="h2"
                            component="div"
                            style={{ color: '#748ab2' }}
                        >
                            {state.movie.original_title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                            style={{ color: '#5b75a4', flex: 1, marginTop: 38, marginLeft: 20 }}
                        >
                            {'Rating '}{state.movie.vote_average}{'/10'} {'('}{state.movie.vote_count}{')'}
                        </Typography>
                    </div>
                    <Typography
                        gutterBottom
                        variant="caption"
                        component="div"
                        style={{ color: '#748ab2' }}
                    >
                        {'Release date : '}{state.movie.release_date}
                    </Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        style={{ color: '#c0cadc' }}
                    >
                        {state.movie.overview}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default MovieDescription;