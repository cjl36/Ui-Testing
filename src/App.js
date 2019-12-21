import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import pants from "./Lebron.png";
import axios from 'axios';
import nacho from "./nacho.png"





const hello = "Hello World from react"
const pant = "Is This a Good Dunk?"
const please = "Please Select a File and Upload It"


class App extends Component {
  render() {
    return (
      <div className="App">
      <p> 
        <Header></Header>
        <Welcome></Welcome>
        <Christmas></Christmas>
        <Basketball></Basketball>
        <Pants></Pants>
        <div className="App-link">
          Hi
        </div>
        <Yes></Yes>
        <No></No>
        <img src={pants} alt="This Is Lebron"/>
        <Please></Please>
        <FilePick></FilePick>

      </p>
      </div>
    );
    }
}

class Welcome extends Component{
  render(){
    return(
      <p>{hello}</p>
    )
  }

}

class Please extends Component{
  render(){
    return(
      <p>{please}</p>
    )
  }

}

class Pants extends Component{
  render(){
  return(
    <p>
      {pant}
    </p>
  );
  }
}

class Christmas extends React.Component {
  onButtonClickHandler = () => {
    window.alert('December 25')
  };
  render() {
    return (
      <div className="Christmas">
      <button onClick={this.onButtonClickHandler}>What Date is Christmas?</button>
      </div>
  )
    }
}

class Basketball extends React.Component {
  onButtonClickHandler = () => {
    window.alert('Lebron James')
  };
  render() {
    return (
      <div className="Basketball">
      <button onClick={this.onButtonClickHandler}>Who is the Best Basketball Player Ever?</button>
      </div>
  )
    }
}

class Yes extends React.Component {
  onButtonClickHandler = () => {
    window.alert('You are Correct!')
  };
  render() {
    return (
      <div className="Yes">
      <button onClick={this.onButtonClickHandler}>Yes</button>
      </div>
  )
    }
}

class No extends React.Component {
  onButtonClickHandler = () => {
    window.alert('Error: You are Wrong!')
  };
  render() {
    return (
      <div className="No">
      <button onClick={this.onButtonClickHandler}>No</button>
      </div>
  )
    }
}

  

class FilePick extends Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

fileUploadHandler = () => {
  const fd = new FormData();
  fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  axios.post("insert url here", fd
  .then(res => {
    console.log(res);
  }));
}

  render() {
  return (
    <div className="FilePick">
      <input type="file" onChange={this.fileSelectedHandler}></input>
      <button onClick={this.fileUploadHandler}>Upload</button>
    </div>
  );
  }
}


function Header() {
  return <img src={nacho} alt="Nacho"></img>;
}


export default App;

