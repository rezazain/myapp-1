import React, { Component } from 'react';

// State pada Class Component 
export default class classC extends Component {
    constructor() {
        super();
        this.state = {
          name : 'Izra',
          age : 20
        };
      }

    render() {
      return (
        <div>
          <p>Saya {this.state.name}, umur {this.state.age}, data nama dan umur diambil dari state</p>
        </div>
      );
    }
  }
