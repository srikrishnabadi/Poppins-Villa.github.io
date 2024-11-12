import React from 'react';
import Header from './UiComponents/Header';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <main style={{ paddingTop: '100px' }}>
        <h1>Welcome to My Page</h1>
        <p>This is an example of a sticky header with MUI.</p>
        {/* Add more content here to test the sticky behavior */}
        <Header />
      </main>
    </div>
  );
}

export default App;
