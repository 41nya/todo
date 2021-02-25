import React, { ReactElement } from 'react';
import Input from './Input';
import List from './List';
import './App.css';

interface AppProps{
}

interface AppState{
}

const style = {
  backgroundColor : "white",
  color : "black"
}

class App extends React.Component<AppProps, AppState> {
  render = () : ReactElement => (
    <div className="App">
      <header className="App-header" style={style}>
        <Input />
        <List />
      </header>
    </div>
  );
}

export default App;