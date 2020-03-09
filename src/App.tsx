import React, { ReactElement } from 'react';
import logo from './logo.svg';
import Input from './Input';
import List from './List';
import './App.css';
import { isWithinInterval } from 'date-fns';

interface AppProps{
}

interface AppState{
}

const style = {
  backgroundColor : "white",
  color : "black"
}

class App extends React.Component<AppProps, AppState> {
  constructor( props : AppProps ){
    super(props);
  };

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