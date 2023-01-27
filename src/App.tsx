import React from 'react';
import './App.css';

import Stack from './Components/Stack/Stack';
import Box from './Components/Box/Box';
import Center from './Components/Center/Center';
import Sidebar from './Sidebar';
import Switcher from './Switcher';

function App() {
  return (
    <main>
      <Stack>
        <Box />
        <Box />

        <Box>
        </Box>
      </Stack>
    </main>
  );
}

export default App;
