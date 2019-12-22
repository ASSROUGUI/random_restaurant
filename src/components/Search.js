
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,Polyline,InfoWindow } from 'google-maps-react';
import DataList from './DB'
import './HomePage.css'
import './Footer.css'
import List from './List'
import {Alert,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import {  Link } from "react-router-dom";
import {  Card} from 'react-bootstrap';
import Footer from './Footer'
// import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'

export class Search extends React.Component {
  state = { 
    place:null,
      scene: {},
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
        persons: [] ,
        currentIndex: 0,
        char: "",
        name:DataList[0].name,
        lat:DataList[0].lat,
        lon:DataList[0].lon,
        link:DataList[0].link,
        cat:DataList[0].cat,
        price:DataList[0].price,
        rate:DataList[0].rate,
        image:DataList[0].image,
        phoneNumber:DataList[0].phoneNumber,
        open:DataList[0].open,
        rating: DataList[0].rating,
   userLocation:
   { 
    lat:33,
    lon:33
  }
    , 
   loading: true };

 

   onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  componentDidMount(props) {

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lon: longitude },
          
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
     randomRestaurant() {
      const randomNumber = Math.floor(Math.random() * DataList.length);
      return DataList[randomNumber];
      
    }
    handleClick = () => {
      const generateRandomRestaurant = this.randomRestaurant();

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          name: generateRandomRestaurant.name,
          lat: generateRandomRestaurant.lat,
          lon: generateRandomRestaurant.lon,
          link:  generateRandomRestaurant.link,
          cat:  generateRandomRestaurant.cat,
          price:generateRandomRestaurant.price,
          rate:generateRandomRestaurant.rate,
          image:generateRandomRestaurant.image,
          phoneNumber:generateRandomRestaurant.phoneNumber,
          open:generateRandomRestaurant.open,
          rating:generateRandomRestaurant.rating,
          // userLocation: { lat:  generateRandomRestaurant.lat, 
          //   lng:generateRandomRestaurant.lon, },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
      
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  // o(){

  //   <a herf {this.state.link} ></a>
  // }
  render() {
    
    const { loading, userLocation } = this.state;
    const { google } = this.props;
console.log('userLocation',{userLocation})
    if (loading) {
      return 'Loading....';
    }

    return(
        <div>
    
     <Header />
   
       {/* <List
       {...this.state} 
       handleClick={this.handleClick}
       />  */}

       <div className="background"style={{ marginTop:'44px' }}>   
     


<Card.Body className="background2" style={{ width: '86rem'  ,height:'52rem' }}>
<Card.Title><Alert >
  <Alert.Heading>
    
    <a  target='_blank' href={this.state.link} style={{  color: '#0b9496'}}> 
    {this.state.name}</a>  
    <p>{userLocation.lt} --- {userLocation.ln}</p>
  </Alert.Heading>
  {/* <p style={{  color: 'grey'}}>{this.state.cat}  </p>  
  <p  style={{  color: 'grey'}}>  phoneNumber:{this.state.phoneNumber} --- open:{this.state.open}</p>
  <p  style={{  color: 'grey'}}>  price in range:{this.state.price} $$ ---rate:{this.state.rating}  </p>   */}
  <hr />
  <Map style={{ width: '46rem'  ,height:'18rem' ,marginLeft:'113px'}}
        className={'map'}
          google={this.props.google}
          zoom={11}
          initialCenter={{lat:this.state.lat, lng:this.state.lon}}
          onChange={(e) => { this.setState({ place: e }) }}
        >
        <Marker style={{ color: 'blue' ,backgroundColor:'blue'  }}
         position={{lat:this.state.lat, lng:this.state.lon}}
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
          />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose} >
        <div>
        <a target='_blank' href='http://google.com'>{this.props.name}</a>
           
          </div>
        </InfoWindow>
        
      </Map> 
   
</Alert></Card.Title>
<Card.Text style={{ width: '32rem'  ,height:'22rem' ,marginTop:'213px' }}>
<Alert style={{ width: '4rem'  ,height:'4rem',position:'center' ,textAlign:'center' }}>
<a href ={this.state.link} style={{ marginLeft:'444px'}}>
      <button type="button" className="btn btn-info">Button</button>
      </a>

{/* <button><Link to="/" params={this.props.git_url}></Link>Redirect to repo: {repo.git_url}</button> */}
</Alert>
</Card.Text>

<button style={{marginTop:'-291px', marginLeft:'344px'}} onClick={this.handleClick}  id='h' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> اقترح اخر
  {loading && <span>
    <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
<Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>   
    <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
{!loading && <span>''</span>}
</span>}
   </button> 
  
   {/* <Footer style={{width: '2rem'  ,height:'2rem' }}/> */}
   <div className='Container'  style={{ marginTop:'-351px', height:' 100%',
   marginLeft:'-222px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'}} >
  
  <div className="row"  >
<div className="column12"   style={{padding:' 5px',}} >
<a href="https://play.google.com/store/apps/details?id=com.wainnakel.android">
<img style={{ width: '5rem'  ,height:'2rem',  }} 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y'
/> </a>
</div>
<div  className="column3"  style={{marginTop:'0px', padding:' 5px' }} >
<a href="https://apps.apple.com/sa/app/wyn-nakl/id718380069">
<img style={{ width: '5rem'  ,height:'2rem' ,marginLeft:'4px' }} 
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsG3IVDuRBvFBZSR5k94FevQEddQ5CcRC5X3ADiio3NKp_byae'
/> </a>
</div>

</div>

<Footer  />
</div>

  
</Card.Body>



<div className="backgrounds"> 
<div id="index-banner" className="parallax-container">
<div className="section no-pad-bot">
<div className="container">
{ this.state.loading}


<div className="row center">
  
</div>

   
</div> 
</div> 


</div> 


</div>
</div>
       


        </div>
    )
    
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6xENXUcCHSoR6vLLYVuNBkt2gjm8dyWI'
})(Search);








// import React, { Component } from 'react';
// import {  Link } from "react-router-dom";
// import {Dimmer,Spinner, Button,Loader ,Card } from 'react-bootstrap';
// import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';

// // import Map from './Map'
// import DataList from './DB'
// import List from './List'
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Search.css'
// import Fade1 from './opacity1';

// class Search extends Component {
//   constructor(props) {
//     super(props);}

//     state = {
//       scene: {},
//       persons: [] ,
//       currentIndex: 0,
//       char: "",
//       name:DataList[0].name,
//       lat:DataList[0].lat,
//       lon:DataList[0].lon,
//       link:DataList[0].link,
//     word:'press',
//     userLocation: { lat: 32, lng: 32 },
//      loading: true     

//     }
//     randomRestaurant() {
//       const randomNumber = Math.floor(Math.random() * DataList.length);
//       return DataList[randomNumber];
      
//     }
//     handleClick = () => {
//       const generateRandomRestaurant = this.randomRestaurant();
//       this.setState({
//         name: generateRandomRestaurant.name,
//         lat: generateRandomRestaurant.lat,
//         lon: generateRandomRestaurant.lon,
//         link:  generateRandomRestaurant.link
//       });
  
//     };
//    change(){
// this.setState({
//   word:this.state.word=<Spinner
//   as="span"
//   animation="grow"
//   size="sm"
//   role="status"
//   aria-hidden="true"
// />

// })

//    }

//    componentDidMount(props) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           userLocation: { lat: latitude, lng: longitude },
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }

//   render() {
//     const { loading, userLocation } = this.state;
//     const { google } = this.props;
//     if (loading) {
//       return 'Loading....';
//     }

//     return (
//       <div>
// {/* {this.state.name}
//       <div className="backgrounds"> 
//       <List
//        {...this.state}
//         handleClick={this.handleClick}/> */}
       
//         <Card style={{ width: '48rem' }}>
//            <Card.Body>
//     <Card.Title></Card.Title>
//     <Map
//           google={google}
//           zoom={13}
//           initialCenter={userLocation}>
//           <Marker position={userLocation} /> 



//           <Marker position={{ lat: 26.300782772672, lng: 50.200918614864}} />
//         </Map> 
//     <Card.Text>
//   </Card.Text>
 
//   </Card.Body>
//   <br/>     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

// </Card>
//        <div id="index-banner" className="parallax-container">
//         <div className="section no-pad-bot">
//         <div className='map-class2'>
//           <div className='map-class'>
//            {/* <Map/ > */}
//          </div>
//           </div>
//              <br/> <br/> 
//              <br/> <br/> 
//              <br/> <br/> 
//        <button onClick={()=>this.change()}>{this.state.word}</button>
     
//        <div className="containerx">
    
     

     
//         </div>

// <br/> <br/>
     
// </div> 
// </div> 

// </div> 

//     );
//   }
// }

// export default Search;




