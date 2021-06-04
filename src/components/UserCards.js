import axios from 'axios';
import React from 'react';
import UserCard from './UserCard';
class UserCards extends React.Component{
    constructor(){
        super();
        this.state={
            followers:{},
            following:{}
        };
    }
    componentDidMount(){
        const {userData} = this.props;
        axios.get(userData.followers_url)
        .then(r=>this.setState({followers:r.data}))
        .catch(e=>console.log({e}));
        axios.get(userData.following_url)
        .then(r=>this.setState({following:r.data}))
        .catch(e=>console.log({e}));
    }
    render(){
        // const {userName,userData} = this.props;
        // const {followers,following} = this.state;
        // const users = toShow==='followers'?followers:following;
        // return(
        //     <div>
        //         {Object.keys(users).map((key,i)=>
        //             <UserCard key={i} userName={users[key].login} changeUserOnClick={changeUserOnClick}/>
        //             )}
        //     </div>
        // );
        return<div></div>;
    }
};
export default UserCards;