import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import axios from 'axios';
import myImage from './img/index';
class Home extends Component {

  onDrop = (acceptedFiles) => {
      console.log(acceptedFiles);
    }

  constructor(props) {
    super(props);
      this.state = {
        value: null,
        selectedFile: null,
        image: null, //require('./img/IMG_1088.jpg')
        message: null
      }
  }

  onChangeHandler=event=>{
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onResponseHandler = (statue,confidence) => {
    confidence = parseFloat(confidence)
    statue = parseInt(statue)

    if(confidence < 0.95){
      this.setState({value:"Try Again!"})
      this.setState({image:myImage.error})
      this.setState({message:"insert motivational message here"})
      return 
    }

    if(statue == 1){
      this.setState({value:"Congrats"})
      this.setState({image:myImage.tiger})
      this.setState({message:"insert motivational message here"})
    }else if(statue == 2){
      this.setState({value:"Congrats"})
      this.setState({image:myImage.coke})
      this.setState({message:"insert motivational message here"})
    }else if(statue == 3){
      this.setState({value:"Congrats"})
      this.setState({image:myImage.tillman})
      this.setState({message:"insert motivational message here"})
    }else if(statue == 4){
      this.setState({value:"Congrats"})
      this.setState({image:myImage.airplane})
      this.setState({message:"insert motivational message here"})
    }else if(statue == 5){
      this.setState({value:"Congrats"})
      this.setState({image:myImage.cave})
      this.setState({message:"insert motivational message here"})
    }else if(statue == 6){
      this.setState({value:"Congrats"})
      this.setState({image:myImage.microscope})
      this.setState({message:"insert motivational message here"})
    }else{
      this.setState({value:"Try Again!"})
      this.setState({image:myImage.error})
      this.setState({message:"insert motivational message here"})
    }
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    //this.setState({value:"Congrats!"})
    //this.setState({image:myImage.airplane})
    //axios.post("https://api.cufindit.tech", data, { // receive two parameter endpoint url ,form data
    axios.post("http://localhost:5000/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.headers['confidence'])
        console.log(res.headers)
        console.log(res.data['confidence'])
        console.log(res.data['statue'])
        this.onResponseHandler(res.data['statue'],res.data['confidence'])
        
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
    
    <div>
      <h1>CU Find It!</h1>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      <div class="container">
	    <div class="row">
	    <div class="col-md-6">
	    <form method="post" action="#" id="#">
        <div class="form-group files">
        <label>Upload Your File </label>   
        <input type="file" class="form-control" multiple="" onChange={this.onChangeHandler} capture="camera"></input>
        </div>
        </form>
        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
        <h1>{this.state.value}</h1>
        <h3>{this.state.message}</h3>
        </div>
        <div class="col-md-6">
        
        <img src={this.state.image} width="500" height="600"/>
        
        </div>
        
        </div>
        </div>
        
    </div>
    );

  
  }
}
export default Home;

