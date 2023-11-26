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
      <div className='ajay'>
        <div className='sai'>
        <h1>{advice}</h1>
        </div>
        <button className='aj' onClick={this.fetchData}>Give Me Advice
        </button>
      </div>
    )
  }
}
