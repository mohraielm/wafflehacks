import React, { useState } from 'react';

const UserList = () => {
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAddUser = () => {
    if (username.trim() !== '') {
      setUserList([...userList, username]);
      setUsername('');
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleInputChange} />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;



// //import React from 'react';
// import React, { Component } from 'react';


// // class UserList extends React.Component{
// //     state={
// //         user: ""
// //     }
// //     render(){
// //         return(
// //             <div>
// //                 <div> UserList</div>
// //                 <input value={this.state.task} onChange={e=>this.setState({
// //                     user:e.target.value
// //                 })} placeholder="input username.." />
// //                 <button className ="userbutton">Submit</button>
// //             </div>
// //         )
// //     }
// // }
// class UserList extends Component {

// constructor(props){
// super(props);

// this.state = {
//   username : ''
// }

// this.updateInput = this.updateInput.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
// }


// updateInput(event){
// this.setState({username : event.target.value})
// }


// handleSubmit(){
// console.log('Your input value is: ' + this.state.username)
// //Send state to the server code
// }



// render(){
// return (
//     <div>
//     <input type="text" onChange={this.updateInput}></input>
//     <input type="submit" onClick={this.handleSubmit} ></input>
//     </div>
//   );
// }
// } 

// //output
// //Your input value is: x
// export default UserList