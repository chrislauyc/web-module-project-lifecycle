import React from 'react';
import {
    createMuiTheme,
    withStyles,
    Grid,
    Button,
    Container,
    Typography
} from '@material-ui/core';
import {Link} from 'react-router-dom';
const theme = createMuiTheme();
const styles={
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
};
const defaultLink = '/chrislauyc';
class Home extends React.Component{
    render(){
        const {classes} = this.props;
        return(<>
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
                        Welcome to GitHub Cards
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Here you can view GitHub users and their followers. 
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify='center'>
                    <Grid item>
                        <Button component={Link} to={defaultLink} variant='contained' color='primary'>
                            Get started
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>);
    }
}
export default withStyles(styles)(Home);