import React from 'react';
import {
    Typography,createMuiTheme,withStyles,Link
} from '@material-ui/core';
const theme = createMuiTheme();
const styles = {
    footer: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(1,0),
        position: 'fixed',
        left: '0',
        bottom:'0',
        width:'100%',
      },
};
const CopyRight=()=>{
    return(
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://github.com/chrislauyc'>
                Chris Lau
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
class Footer extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <footer className={classes.footer}>
                {/* <Typography variant='h6' align='center' gutterBottom> */}
                <CopyRight />
            </footer>
        );
    }
}
export default withStyles(styles)(Footer);
