import './App.css';
import { Button, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
}))

export const Candies = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image='https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'
                        title='image title'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            Candies
            </Typography>
                        <Typography >
                            Candy Gifts for Every Occasion.
            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color='secondary'>
                            View
            </Button>
                        <Button size="small" color='secondary'>
                            Edit
            </Button>
                        <LayerIcon />
                        <PlayCircleFilledIcon>
                        </PlayCircleFilledIcon>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}