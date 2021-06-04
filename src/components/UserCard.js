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
    componentDidUpdate(){
        const {userName,setUserData} = this.props;
        if(userName){
            axios.get(`https://api.github.com/users/${userName}`)
            .then((r)=>{
              this.setState({userData:r.data});
              if(setUserData){
                  setUserData(r.data);
              }
            })
            .catch(e=>console.log({e}));
        }
      }
    render(){
        const {avatar_url,name,location,login} = this.state.userData;
        return(
            <StyledCard>
                <CardActionArea>
                    <StyledCardMedia 
                        image={`${avatar_url}`}
                        title={'User Avatar'}
                    />
                    <CardContent>
                        <div>{name}</div>
                        <div>{location}</div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button component={Link} to={`/${login}`} size='small' color='primary'>Following</Button>
                    <Button component={Link} to={`/${login}`}  size='small' color='primary'>Followers</Button>
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