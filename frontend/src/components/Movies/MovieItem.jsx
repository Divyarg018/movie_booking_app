import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function MovieItem(props) {
    return (
        <Card
            sx={{
                margin: 2,
                width: 250,
                height: 320,
                borderRadius: 5,
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                },
            }}
        >
            <img height={"50%"} width="100%" src='{props.posterUrl}' alt='{props.title}' />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {new Date(props.releaseDate).toDateString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    fullWidth
                    LinkComponent={Link}
                    to={`/booking/${props.id}`}
                    sx={{
                        margin: "auto",
                        bgcolor: "#2b2d42",
                        ":hover": {
                            bgcolor: "#121217",
                        },
                    }}
                    size="small"
                >
                    Book
                </Button>
            </CardActions>
        </Card>
    );
};

export default MovieItem;