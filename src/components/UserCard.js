import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
class UserCard extends React.Component{
    constructor(){
        super();
        this.state = {
            userData:{},
          };
    }
    componentDidMount(){
        const {userName} = this.props;
        const {userData} = this.state;
        if(userName && Object.keys(userData).length===0){
            this.fetchData();
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.userName!==this.props.userName){
            this.fetchData();
        }
    }
    fetchData=()=>{
        const {userName,setUserData} = this.props;
        axios.get(`https://api.github.com/users/${userName}`)
        .then((r)=>{
            this.setState({userData:r.data});
            if(setUserData){
                setUserData(r.data);
            }
        })
        .catch(e=>console.log({e}));
    }
    render(){
        const {avatar_url,name,location,login} = this.state.userData;
        return(
            <StyledCard>
                <CardActionArea>
                    <StyledCardMedia 
                        component={Link}
                        to={`/${login}`}
                        image={`${avatar_url}`}
                        title={'User Avatar'}
                    />
                    <CardContent>
                        <div>{name}</div>
                        <div>{location}</div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button component={Link} to={`/${login}/followers`}  size='small' color='primary'>Followers</Button>
                </CardActions>
            </StyledCard>
        );
    }
};
export default UserCard;
const StyledCardMedia = styled(CardMedia)`
    height: 140px;
`;
const StyledCard = styled(Card)`
    width: 30%;
`;