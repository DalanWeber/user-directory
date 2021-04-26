import Header from './components/Header'
import Info from './components/Info'
import './App.css';

import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
    }
    render(){
      return (
        <div className="App">
          <Header/>
          <Info/>
        </div>
      )
    }   
}
export default App;
