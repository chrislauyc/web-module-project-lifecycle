import React from 'react';
import {withRouter} from 'react-router';
import UserCard from './UserCard';
import UserCards from './UserCards';
class Page extends React.Component{
    constructor(){
        super();
        this.state={
            userName:'',
            userData:{}
        };
    }
    componentDidMount(){
        const userName = this.props.match.params.userName;
        this.setState({userName});
    }
    setUserData=(userData)=>{
        this.setState({userData});
    }
    render(){
        const {userName,userData} = this.state;
        const {setUserData} = this;
        return(
            <>
                <UserCard userName={userName} setUserData={setUserData}/>
                {/* <UserCards userName={userName} userData={userData} /> */}
            </>
        );
    };
}
export default withRouter(Page);