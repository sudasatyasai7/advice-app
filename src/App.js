import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
export default class App extends Component {
  state={
    advice:''
  }
    componentDidMount()
    {
      this.fetchData();
    }
  fetchData=()=>{
    axios.get('https://api.adviceslip.com/advice')
     .then((response)=>{
      const{advice}=response.data.slip;
      this.setState({advice:advice})
     })
  }
  render() {
    const{advice}=this.state
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchData}>
            <span>Give Me An Advice</span>
          </button>
        </div>
      </div>
    )
  }
}
