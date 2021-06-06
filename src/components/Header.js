import React from 'react';
import {
    AppBar,
    Toolbar,
    Tooltip,
    Fab,
    IconButton,
    Typography,
    withStyles,
    createMuiTheme
} from '@material-ui/core';
import {withRouter} from 'react-router';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
const theme = createMuiTheme();
const styles={
    icon: {
      marginRight: theme.spacing(2),
    },
    codeIcon:{
        marginLeft:theme.spacing(2)
    },
    title:{
        flexGrow:1
    },
    fab:{
        color:theme.palette.info.light
    }
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
                            <Typography className={classes.title} onClick={handleClickHome} variant="h6" color="inherit" noWrap>
                                GitHub Cards
                            </Typography>
                            <Tooltip className={classes.codeIcon} title='Source Code'>
                                <IconButton href='https://github.com/chrislauyc/github-user-card'>
                                    <CodeIcon />
                                </IconButton>
                            </Tooltip>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}
export default withStyles(styles)(withRouter(Header));