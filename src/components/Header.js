import React from 'react';
import {
    AppBar,Toolbar,Typography,withStyles,createMuiTheme
} from '@material-ui/core';
import {withRouter} from 'react-router';
import GitHubIcon from '@material-ui/icons/GitHub';
const theme = createMuiTheme();
const styles={
    icon: {
      marginRight: theme.spacing(2),
    },
};
class Header extends React.Component{
    handleClickHome=()=>{
        this.props.history.push('/');
    }
    render(){
        const {classes} = this.props;
        const {handleClickHome} = this;
        return(
            <header>
                <AppBar position="relative">
                    <Toolbar>
                        <GitHubIcon className={classes.icon}/>
                        <Typography onClick={handleClickHome} variant="h6" color="inherit" noWrap>
                            GitHub Cards
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}
export default withStyles(styles)(withRouter(Header));