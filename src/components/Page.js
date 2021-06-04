import React from 'react';
import {withRouter} from 'react-router';
import {Route,Switch} from 'react-router-dom';
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
        console.log('page did mount');
        const userName = this.props.match.params.userName;
        this.setState({userName});
    }
    componentDidUpdate(prevProps,prevState){
        const userName = this.props.match.params.userName;
        if(prevProps.match.params.userName!==userName){
            console.log('page did update',prevProps.match.params.userName,userName);
            this.setState({userName:userName});
        }
    }
    setUserData=(userData)=>{
        this.setState({userData});
    }
    render(){
        const {userName,userData} = this.state;
        const {setUserData} = this;
        const path = this.props.match.path;
        return(
            <>
                <UserCard userName={userName} setUserData={setUserData}/>
                <Switch>
                    <Route path={`${path}/followers`}>
                        <UserCards userName={userName} userData={userData} />
                    </Route>
                </Switch>
            </>
        );
    };
}
export default withRouter(Page);