import React from 'react';

class UserList extends React.Component{
    state={
        user: ""
    }
    render(){
        return(
            <div>
                <div> UserList</div>
                <input value={this.state.task} onChange={e=>this.setState({
                    user:e.target.value
                })} placeholder="input username.." />
                <button className ="userbutton">Submit</button>
            </div>
        )
    }
}

export default UserList