import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Spinner, Button } from 'react-bootstrap';
// import { BallBeat } from 'react-pure-loaders';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        }
      }
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <p>{this.props.cat}</p>
                {this.props.link}
                {/* <Link to={this.props.link}>{this.props.name}</Link> */}
                <a target='_blank' href={this.props.link}>{this.props.name}</a>
                {/* <p> {this.props.catId}</p>
                <p> {this.props.id}</p>
                {/* <img src={this.props.lat} alt="" /> */}
                {/* <p> {this.props.lat}</p>
                <p> {this.props.lon}</p> */} 
                <Button target='_blank'    loading={this.state.loading}
                 href="https://www.google.com/maps/place/24%C2%B035'49.4%22N+46%C2%B035'12.8%22E/@+{this.props.lat},+{this.props.lon},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d24.597046!4d46.586895" variant="secondary" size="lg" >
    Link
  </Button>
 
                {/* <h2> {this.props.link}</h2> */}
                <button
          onClick={this.props.handleClick}
        >
          New quote
        </button>
            </div>
        )
    }
}


export default List;