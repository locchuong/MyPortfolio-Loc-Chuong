import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import {Button, Paper} from '@material-ui/core';

import Main from '../Main'; 
function App() {
  return (
    <Container maxWidth="false" disabledGutters className="App">
      <Main/>
    </Container>
  );
}

export default App;
