import React, { Component } from 'react'
import BarChart from './Components/BarChart'

export default class App extends Component {
constructor(props){
  super(props);

  //class

  this.child = React.createRef(); 
  this.state = {
    feeds: this.child.getData()
  };
}

  render() {
    return (
      <div className="App">
      <BarChart onRef={ ref => (this.child = ref )}
        data={this.state.feeds[1].data}
        title={this.state.feeds[1].title}
        color="#70CAD1"
      />
        
      </div>
    )
  }
}