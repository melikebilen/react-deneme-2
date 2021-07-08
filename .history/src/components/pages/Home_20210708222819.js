import React, { Component }  from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import {database} from '../../firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
      image: "https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    database.ref().on('value', (snapshot) => {
        this.setState({
          data: snapshot.val(),
          newData: '',
          count: snapshot.child('Count/count').val(),
          x: snapshot.child('RobotLocation/x').val(),
          y: snapshot.child('RobotLocation/y').val(),
          image: "https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"
        });
    });
  
  }
  handleChange(e){
    const newData = e.target.value;
    this.setState({
      newData: newData,
      image: "https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"
    });
  }

  handleSubmit(e){
    e.preventDefault();
    database.ref().child('AMAZINGNEWDATA').set(this.state.newData); //we can use push instead of set here , database.ref() is the root!
    //database.ref("/AMAZINGNEWDATA").push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <>
      <HeroSection />
    </>
        <div className="App--position">
          <h3> Count : {JSON.stringify(this.state.count, null,2)}</h3>
          <h3> X : {JSON.stringify(this.state.x, null,2)}</h3>
          <h3> Y : {JSON.stringify(this.state.y, null,2)}</h3>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/tdoa-23cf7.appspot.com/o/images%2Fxyplot.png?alt=media&token=dccacb98-a0f4-4c5d-b2a7-865ca59c948c"
        ></img>
        <p>Please refresh the page to see the updated image</p>
      </div>
    );
  }
}

export default Home;