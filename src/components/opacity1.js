
// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker,Polyline,InfoWindow } from 'google-maps-react';
// import DataList from './DB'
// import List from './List'
// import {Alert,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
// import {  Link } from "react-router-dom";
// import {  Card} from 'react-bootstrap';
// import Footer from './Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header'

// export class Search extends React.Component {
//   state = { 
//     place:null,
//       scene: {},
//   showingInfoWindow: false,
//   activeMarker: {},
//   selectedPlace: {},
//         persons: [] ,
//         currentIndex: 0,
//         char: "",
//         name:DataList[0].name,
//         lat:DataList[0].lat,
//         lon:DataList[0].lon,
//         link:DataList[0].link,
//    userLocation:
//     { 
//       lat:DataList[0].lat,
//       lon:DataList[0].lon,}
//     , 
//    loading: true };

//    onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });
//   componentDidMount(props) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           userLocation: { lat: this.state.lat, lng: this.state.lon },
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }
//      randomRestaurant() {
//       const randomNumber = Math.floor(Math.random() * DataList.length);
//       return DataList[randomNumber];
      
//     }
//     handleClick = () => {
//       const generateRandomRestaurant = this.randomRestaurant();

//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           name: generateRandomRestaurant.name,
//           lat: generateRandomRestaurant.lat,
//           lon: generateRandomRestaurant.lon,
//           link:  generateRandomRestaurant.link,
//           userLocation: { lat:  generateRandomRestaurant.lat, 
//             lng:generateRandomRestaurant.lon, },
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }
      
//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });
  

//   fetchData = () => {
//     this.setState({ loading: true });

//     //Faking API call here
//     setTimeout(() => {
//       this.setState({ loading: false });
//     }, 2000);
//   };
//   render() {
    
//     const { loading, userLocation } = this.state;
//     const { google } = this.props;

//     if (loading) {
//       return 'Loading....';
//     }

//     return(
//         <div>
//         <Header/>
//       <br/>
//       <br/>
//       <br/>
//        {/* <List
//        {...this.state} 
//        handleClick={this.handleClick}
//        />  */}

//        <div className="background">   

// <Card   className="background2" style={{ width: '46rem'  ,height:'22rem' }}>
// <Header/>
// <Card.Body>
// <Card.Title><Alert >
//   <Alert.Heading>{this.state.name}
//   </Alert.Heading>
//   <p>
 
//   </p>
//   <hr />
//   <p className="mb-0">
   
//   </p>
// </Alert></Card.Title>
// <br/> <br/> <br/>
// <Card.Text style={{ width: '22rem'  ,height:'12rem' }}>
// <Map
//         className={'map'}
//           google={this.props.google}
//           zoom={11}
//           initialCenter={userLocation}
//           onChange={(e) => { this.setState({ place: e }) }}
//         >
//         <Marker position={userLocation}
//           onClick={this.onMarkerClick}
//           name={'Kenyatta International Convention Centre'}
//           />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose} >
//         <div>
//             <h4>{this.state.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map> 
// </Card.Text>
// <br/>   <br/>  <br/>  <br/>

// <button  onClick={this.handleClick}  id='h' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> hh
//   {loading && <span>
// <Spinner
// as="span"
// animation="grow"
// size="sm"
// role="status"
// aria-hidden="true"
// />
// <Spinner
// as="span"
// animation="grow"
// size="sm"
// role="status"
// aria-hidden="true"
// />        <Spinner
// as="span"
// animation="grow"
// size="sm"
// role="status"
// aria-hidden="true"
// />

// {!loading && <span>''</span>}
// </span>}
  
//    </button> 
// </Card.Body>

// </Card>  

// <div className="backgrounds"> 
// <div id="index-banner" className="parallax-container">
// <div className="section no-pad-bot">
// <div className="container">
// <br/> <br/> 
// { this.state.loading}


// <div className="row center">
//   {/* < Link to= './Data'  id='h'> Data  </Link>  */}


//   {/* <Link to= '/List' id='h' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> Start Now  </Link>  */}
//   {/* < Link to= './Map'  id='h'> Map  </Link>  */}

// {/* <Data /> */}
// {/* <List /> */}
// </div>
// {/* <button className="button" onClick={this.fetchData} disabled={loading}>{loading && <span><p>loading</p></span>} {!loading && <span>Fetch Data from Server</span>} </button> */}
// <br/> <br/>
   
// </div> 
// </div> 


// </div> 


// </div>
// </div>
//         {/* <Card style={{ width: '48rem' }}>
       
//         ....
//   <Card.Body>
//     <Card.Title></Card.Title>
 
//     <Card.Text>
//     <Map
//         className={'map'}
//           google={this.props.google}
//           zoom={11}
//           initialCenter={userLocation}
//           onChange={(e) => { this.setState({ place: e }) }}
//         >
//         <Marker position={userLocation}
//           onClick={this.onMarkerClick}
//           name={'Kenyatta International Convention Centre'}
//           />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose} >
//         <div>
//             <h4>{this.state.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map> 
//   </Card.Text>
 
//   </Card.Body>

//   <br/>     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
//   <button className="button" onClick={this.fetchData} disabled={loading}>
//           {loading && (
//             <i
//               className="fa fa-refresh fa-spin"
//               style={{ marginRight: "5px" }}
//             />
//           )}
//           {loading && <span>Loading </span>}
//           {!loading && <span>Fetch</span>}
//         </button>
// </Card> */}
// <Footer/>
//         </div>
//     )

  
    
    
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD6xENXUcCHSoR6vLLYVuNBkt2gjm8dyWI'
// })(Search);








// // import React, { Component } from 'react';
// // import {  Link } from "react-router-dom";
// // import {Dimmer,Spinner, Button,Loader ,Card } from 'react-bootstrap';
// // import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';

// // // import Map from './Map'
// // import DataList from './DB'
// // import List from './List'
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Search.css'
// // import Fade1 from './opacity1';

// // class Search extends Component {
// //   constructor(props) {
// //     super(props);}

// //     state = {
// //       scene: {},
// //       persons: [] ,
// //       currentIndex: 0,
// //       char: "",
// //       name:DataList[0].name,
// //       lat:DataList[0].lat,
// //       lon:DataList[0].lon,
// //       link:DataList[0].link,
// //     word:'press',
// //     userLocation: { lat: 32, lng: 32 },
// //      loading: true     

// //     }
// //     randomRestaurant() {
// //       const randomNumber = Math.floor(Math.random() * DataList.length);
// //       return DataList[randomNumber];
      
// //     }
// //     handleClick = () => {
// //       const generateRandomRestaurant = this.randomRestaurant();
// //       this.setState({
// //         name: generateRandomRestaurant.name,
// //         lat: generateRandomRestaurant.lat,
// //         lon: generateRandomRestaurant.lon,
// //         link:  generateRandomRestaurant.link
// //       });
  
// //     };
// //    change(){
// // this.setState({
// //   word:this.state.word=<Spinner
// //   as="span"
// //   animation="grow"
// //   size="sm"
// //   role="status"
// //   aria-hidden="true"
// // />

// // })

// //    }

// //    componentDidMount(props) {
// //     navigator.geolocation.getCurrentPosition(
// //       position => {
// //         const { latitude, longitude } = position.coords;

// //         this.setState({
// //           userLocation: { lat: latitude, lng: longitude },
// //           loading: false
// //         });
// //       },
// //       () => {
// //         this.setState({ loading: false });
// //       }
// //     );
// //   }

// //   render() {
// //     const { loading, userLocation } = this.state;
// //     const { google } = this.props;
// //     if (loading) {
// //       return 'Loading....';
// //     }

// //     return (
// //       <div>
// // {/* {this.state.name}
// //       <div className="backgrounds"> 
// //       <List
// //        {...this.state}
// //         handleClick={this.handleClick}/> */}
       
// //         <Card style={{ width: '48rem' }}>
// //            <Card.Body>
// //     <Card.Title></Card.Title>
// //     <Map
// //           google={google}
// //           zoom={13}
// //           initialCenter={userLocation}>
// //           <Marker position={userLocation} /> 



// //           <Marker position={{ lat: 26.300782772672, lng: 50.200918614864}} />
// //         </Map> 
// //     <Card.Text>
// //   </Card.Text>
 
// //   </Card.Body>
// //   <br/>     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

// // </Card>
// //        <div id="index-banner" className="parallax-container">
// //         <div className="section no-pad-bot">
// //         <div className='map-class2'>
// //           <div className='map-class'>
// //            {/* <Map/ > */}
// //          </div>
// //           </div>
// //              <br/> <br/> 
// //              <br/> <br/> 
// //              <br/> <br/> 
// //        <button onClick={()=>this.change()}>{this.state.word}</button>
     
// //        <div className="containerx">
    
     

     
// //         </div>

// // <br/> <br/>
     
// // </div> 
// // </div> 

// // </div> 

// //     );
// //   }
// // }

// // export default Search;





// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker,Polyline,InfoWindow } from 'google-maps-react';
// import DataList from './DB'
// import List from './List'
// import {Alert,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
// import {  Link } from "react-router-dom";
// import {  Card} from 'react-bootstrap';
// import Footer from './Footer'
// import './Footer.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header'

// export class Search extends React.Component {
//   state = { 
//     place:null,
//       scene: {},
//   showingInfoWindow: false,
//   activeMarker: {},
//   selectedPlace: {},
//         persons: [] ,
//         currentIndex: 0,
//         char: "",
//         name:DataList[0].name,
//         lat:DataList[0].lat,
//         lon:DataList[0].lon,
//         link:DataList[0].link,
//         cat:DataList[0].cat,
//    userLocation:
//     { 
//       lat:DataList[0].lat,
//       lon:DataList[0].lon,}
//     , 
//    loading: true };

//    onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });
//   componentDidMount(props) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           userLocation: { lat: this.state.lat, lng: this.state.lon },
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }
//      randomRestaurant() {
//       const randomNumber = Math.floor(Math.random() * DataList.length);
//       return DataList[randomNumber];
      
//     }
//     handleClick = () => {
//       const generateRandomRestaurant = this.randomRestaurant();

//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           name: generateRandomRestaurant.name,
//           lat: generateRandomRestaurant.lat,
//           lon: generateRandomRestaurant.lon,
//           link:  generateRandomRestaurant.link,
//           cat:  generateRandomRestaurant.cat,
//           userLocation: { lat:  generateRandomRestaurant.lat, 
//             lng:generateRandomRestaurant.lon, },
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }
      
//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });
  

//   fetchData = () => {
//     this.setState({ loading: true });

//     //Faking API call here
//     setTimeout(() => {
//       this.setState({ loading: false });
//     }, 2000);
//   };

//   // go(){

//   //   <a herf ={this.state.link} ></a>
//   // }
//   render() {
    
//     const { loading, userLocation } = this.state;
//     const { google } = this.props;

//     if (loading) {
//       return 'Loading....';
//     }

//     return(
//         <div>
    
     
//        {/* <List
//        {...this.state} 
//        handleClick={this.handleClick}
//        />  */}
//        <Header />
//        <div className="background">   
     
// <Card   className="background2" style={{ width: '86rem'  ,height:'52rem' }}>

// <Card.Body className="background2" style={{ width: '86rem'  ,height:'52rem' }}>
// <Card.Title><Alert >
//   <Alert.Heading>
//       <a  target='_blank' href={this.state.link} style={{  color: '#0b9496'}}> 
//     {this.state.name}</a>
//   </Alert.Heading>
//   <p style={{  color: 'grey'}}>{this.state.cat}</p>
//   <hr />
//   <Map style={{ width: '46rem'  ,height:'22rem' }}
//         className={'map'}
//           google={this.props.google}
//           zoom={11}
//           initialCenter={userLocation}
//           onChange={(e) => { this.setState({ place: e }) }}
//         >
//         <Marker style={{ color: 'blue' ,backgroundColor:'blue'   }} position={userLocation}
//           onClick={this.onMarkerClick}
//           name={'Kenyatta International Convention Centre'}
//           />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose} >
//         <div>
//         <a target='_blank' href='http://google.com'>{this.props.name}</a>
           
//           </div>
//         </InfoWindow>
        
//       </Map> 
      
//   <p className="mb-0"> </p>
// </Alert></Card.Title>
// <Card.Text style={{ width: '32rem'  ,height:'22rem' }}>
// <Alert style={{ width: '4rem'  ,height:'4rem',position:'center' ,textAlign:'center' }}>
//  <button onClick={this.go} style={{ width: '4rem'  ,height:'4rem',position:'right' ,textAlign:'center' ,marginLeft:'304px' ,marginTop:'155px' }}>j</button>
// </Alert>
// </Card.Text>

// <button  onClick={this.handleClick}  id='h' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> hh
//   {loading && <span>
//     <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
// <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>   
//     <Spinner as="span"animation="grow"size="sm"role="status"aria-hidden="true"/>
// {!loading && <span>''</span>}
// </span>}
//    </button> 
//    <Footer/>
// </Card.Body>

// </Card>  

// <div className="backgrounds"> 
// <div id="index-banner" className="parallax-container">
// <div className="section no-pad-bot">
// <div className="container">
// <br/> <br/> 
// { this.state.loading}


// <div className="row center">
  
// </div>
// <br/> <br/>
   
// </div> 
// </div> 


// </div> 


// </div>
// </div>
       


//         </div>
//     )
    
    
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyD6xENXUcCHSoR6vLLYVuNBkt2gjm8dyWI'
// })(Search);








// // import React, { Component } from 'react';
// // import {  Link } from "react-router-dom";
// // import {Dimmer,Spinner, Button,Loader ,Card } from 'react-bootstrap';
// // import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';

// // // import Map from './Map'
// // import DataList from './DB'
// // import List from './List'
// // import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Search.css'
// // import Fade1 from './opacity1';

// // class Search extends Component {
// //   constructor(props) {
// //     super(props);}

// //     state = {
// //       scene: {},
// //       persons: [] ,
// //       currentIndex: 0,
// //       char: "",
// //       name:DataList[0].name,
// //       lat:DataList[0].lat,
// //       lon:DataList[0].lon,
// //       link:DataList[0].link,
// //     word:'press',
// //     userLocation: { lat: 32, lng: 32 },
// //      loading: true     

// //     }
// //     randomRestaurant() {
// //       const randomNumber = Math.floor(Math.random() * DataList.length);
// //       return DataList[randomNumber];
      
// //     }
// //     handleClick = () => {
// //       const generateRandomRestaurant = this.randomRestaurant();
// //       this.setState({
// //         name: generateRandomRestaurant.name,
// //         lat: generateRandomRestaurant.lat,
// //         lon: generateRandomRestaurant.lon,
// //         link:  generateRandomRestaurant.link
// //       });
  
// //     };
// //    change(){
// // this.setState({
// //   word:this.state.word=<Spinner
// //   as="span"
// //   animation="grow"
// //   size="sm"
// //   role="status"
// //   aria-hidden="true"
// // />

// // })

// //    }

// //    componentDidMount(props) {
// //     navigator.geolocation.getCurrentPosition(
// //       position => {
// //         const { latitude, longitude } = position.coords;

// //         this.setState({
// //           userLocation: { lat: latitude, lng: longitude },
// //           loading: false
// //         });
// //       },
// //       () => {
// //         this.setState({ loading: false });
// //       }
// //     );
// //   }

// //   render() {
// //     const { loading, userLocation } = this.state;
// //     const { google } = this.props;
// //     if (loading) {
// //       return 'Loading....';
// //     }

// //     return (
// //       <div>
// // {/* {this.state.name}
// //       <div className="backgrounds"> 
// //       <List
// //        {...this.state}
// //         handleClick={this.handleClick}/> */}
       
// //         <Card style={{ width: '48rem' }}>
// //            <Card.Body>
// //     <Card.Title></Card.Title>
// //     <Map
// //           google={google}
// //           zoom={13}
// //           initialCenter={userLocation}>
// //           <Marker position={userLocation} /> 



// //           <Marker position={{ lat: 26.300782772672, lng: 50.200918614864}} />
// //         </Map> 
// //     <Card.Text>
// //   </Card.Text>
 
// //   </Card.Body>
// //   <br/>     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>

// // </Card>
// //        <div id="index-banner" className="parallax-container">
// //         <div className="section no-pad-bot">
// //         <div className='map-class2'>
// //           <div className='map-class'>
// //            {/* <Map/ > */}
// //          </div>
// //           </div>
// //              <br/> <br/> 
// //              <br/> <br/> 
// //              <br/> <br/> 
// //        <button onClick={()=>this.change()}>{this.state.word}</button>
     
// //        <div className="containerx">
    
     

     
// //         </div>

// // <br/> <br/>
     
// // </div> 
// // </div> 

// // </div> 

// //     );
// //   }
// // }

// // export default Search;




