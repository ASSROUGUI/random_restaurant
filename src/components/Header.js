import React from 'react';
import {Dimmer,Spinner, Button,Loader,Container,Row ,Col ,Image} from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
     <div style={{ backgroundColor: '#0b9496 '}} >

     <div style={{ backgroundColor: '#0b9496 ' ,color: 'white'  }} >
     <Container className='Container'>
  <Row>
  <Col xs={3} md={1}>
<a href='' style={{ backgroundColor: '#0b9496 ' ,color: 'white' 
   , marginLeft: 'auto'
    ,marginRight: 'auto',
    width: '35%'}}>

<img  className='d' style={{ width: '1erm' ,height:'auto', border: '1px solid #0b9496' ,size:'small'}} src="https://lh3.googleusercontent.com/37jL2YRS8UJJRLh2sni8O37X1iFkZEeM3SMa3d-xr0xl4n2XedR3Y6thjsIDIwoZffY=s360-rw" />


 </a>

 </Col>
 <Col xs={6} md={2}>
 <a href='' style={{ backgroundColor: '#0b9496 ' ,color: 'white' }}>

<p  >Win Nakel ?</p>
</a>
 </Col>
 </Row>
 </Container> 
</div>


  


     </div>   
    );
}

export default Header;