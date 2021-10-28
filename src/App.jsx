import React from 'react';
import { Typography, AppBar, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';
import { typography } from '@material-ui/system';


import { PhotoAlbum } from '@material-ui/icons';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                         Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="GrayText" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello Guy, 
                            <br />
                            this is a photo album to save the best moments of your live.
                        </Typography>
                        <div>
                            <Grid container spacing={3} align="center" justify="center">
                                <Grid item>
                                    <Button className={classes.button} variant="contained" color="primary" align ="center" justify="center">
                                        See my Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.button} variant="contained" color="primary" align ="center" justify="center">
                                        Search photo
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.button} variant="contained" color="primary" align ="center" justify="center">
                                        Send image
                                    </Button>
                                </Grid>                             
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid}  maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) =>(
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image = "https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                                <PhotoAlbum />
                                        </Typography>
                                        <Typography>
                                            This is a media card. The best places that you will going on.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button> 
                                        <Button size="small" color="primary">Edit</Button>   
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>     
                </Container>
            </main>
            <footer className={classes.footer}>
            <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                <ul>
                    <li>
                        React 
                    </li>
                    <li>
                        Material Ui
                    </li>
                    <li>
                        Javascript
                    </li>
                </ul>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
                <br /> 
                <Typography className="text" gutterBottom variant="h6">
                        © 2021                
                </Typography>               
            </footer>
        </>
    );
}
export default App;

