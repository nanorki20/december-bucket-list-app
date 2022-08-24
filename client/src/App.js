import React from 'react';
import NavBar from './NavBar';
import Login from './Login';
import Activity from './Activity';
import BucketList from './BucketList';
import SignUp from './SignUp';

import { useState } from 'react';



import './App.css';


function App() {


const [ user, setUser ] = useState('');


  return (
    <div>
      <NavBar user={user}></NavBar>
      <Login setUser={setUser}></Login>
      <SignUp setUser={setUser}></SignUp>
      <Activity></Activity>
      <BucketList></BucketList>
    </div>
  );
}

export default App;
