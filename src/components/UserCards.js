import axios from 'axios';
import React from 'react';
import UserCard from './UserCard';
class UserCards extends React.Component{
    constructor(){
        super();
        this.state={
            userList:[],
        };
    }
    componentDidMount(){
        if(Object.keys(this.props.userData).length!==0){
            this.fetchData();
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.userName!==this.props.userName){
            this.fetchData();
        }
        if(prevProps.userData!==this.props.userData){
            this.fetchData();
        }
    }
    fetchData=()=>{
        const {userData} = this.props;
        axios.get(userData['followers_url'])
        .then(r=>{
            this.setState({userList:r.data});
        })
        .catch(e=>console.log({e}));

    }
    render(){
        const {userList} = this.state;
        if(userList.length!==0){
            return(
                <div>
                    <div>{'Followers'}</div>
                    {userList.map((user,i)=>
                        <UserCard key={i} userName={user.login} setUserData={null}/>
                        )}
                </div>
            );
        }
        else{
            
            return <div>Loading...</div>
        }
    }
};
export default UserCards;