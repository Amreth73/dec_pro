import React, { Component, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.c1 = React.createRef();
    this.c2 = React.createRef();
    this.pp = React.createRef();
    this.cp = React.createRef();
  }

  fun = () => {
    if (this.c1.current.checked) {
      this.pp.current.type = "text";
    } else {
      this.pp.current.type = "password";
    }
  };

  fun1 = () => {
    if (this.c2.current.checked) {
      this.cp.current.value = true;
      this.cp.current.type = "text";
    } else {
      this.cp.current.value = false;
      this.cp.current.type = "password";
    }
  };

  ch = () => {
    if (this.pp.current.value !== this.cp.current.value) {
      alert("Password must be the same");
      // this.cp.autofocus="true";
    }
  };

  render() {
    return (
      <div id="main">
        <form>
        <Avatar id="img" src="/broken-image.jpg" />
        <div id="dd">
          <input id="u" type="text" placeholder="User name*" autoComplete="off" required />
          <br />
        </div>
        <div id="dd1">
          <input id="e" type="email" placeholder="Email*" required />
          <br />
        </div>

        <div id="pass">
          <input type="password" placeholder="Password*" id="pp" ref={this.pp} required />
          <button onClick={this.fun}>
            <input type="checkbox" id="p1" className="check" check="false" ref={this.c1} />
          </button>
        </div>
        <div id="pass1">
          <input type="password" placeholder="Confirm Password*" id="cp" ref={this.cp}  required />
          <button onClick={this.fun1}>
            <input type="checkbox" id="p2" className="check" check="false" ref={this.c2} />
          </button>
        </div>

        <button onClick={this.ch} id="b1">
          Sign In
        </button>
        <a href="" id="b2">
          Already have an account
        </a>
        </form>
      </div>
    );
  }
}

export default Home;
