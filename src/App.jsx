import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [text, setText] = useState('');

  // useEffect(() => {
  //   fetch('/api/testAPI', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setText(data.extra.logid));
  //     console.log(text);
  // }, []);

  const [userName, setUsername] = useState('');
  const [logid,setlogid]=useState('');
  const handleInputChange=(e)=>{
   setUsername(e.target.value);
  };
  const handleSubmit=(e)=>{
    try {
      fetch('/api/findUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName}),
      })
      .then((res) => res.json())
      .then((data) => setlogid(data.extra.logid));
      setUsername('')
      ;
    } catch (err) {
      console.log(err);
    }
  
  }

  return (

    <main>
        <input
    type="text"
    name="username"
    placeholder="Enter Username"
    value={userName}
    onChange={handleInputChange}
  />
  <button type="button" onClick={handleSubmit}>
Submit
  </button>
      <header>
      {logid}
      </header>
      <h1>{text}</h1>
      <div className="main">
        <div className="gradient" />
      </div>
      <div style={{zIndex:200}}>
      </div>
    <div>
    {/* need a state variable for input
    need an input that has an onChange event handler
the onchange event handler updates the state variable
  a fetch (usually result of a button press) that uses the state variable as past of the request */}  <input type="text" />

    </div>
      <div className="app">
        <Hero />
        <Demo />
        <UserList />
      </div>
    </main>
  );
};

export default App;

// 1. get username
// 2. tikapi to get top videos
// 3. check database for video uid
// 4. if uid exists, increment count
// 5. otherwise, insert into database