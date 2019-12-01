import React from 'react';
import Palette from './Palette';
import seedPalette from './seedPalette';

function App() {
  return (
    <div className="App">
      <Palette palette={...seedPalette} />
    </div>
  );
};

export default App;