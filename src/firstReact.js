import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: absolute;
  right: 0;
`;

const NavLink = styled.a`
  color: black;
  text-align: center;
  padding: 8px 5px;
  text-decoration: none;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <NavWrapper id="nav">
          <NavLink href="#Contact">Home</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Home">Contact</NavLink>
        </NavWrapper>
        <h2 id="title">BOOTCAMP Batch 8 : Experiment with REACTJS</h2>
        <div id="root">
          <h1>This is React</h1>
          <h1>{this.state.time}</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// const judul = <h2>BOOTCAMP Batch 8 : Experiment with REACTJS</h2>
// ReactDOM.render(judul, document.getElementById("title"));

// const element = <h1>This is React</h1>
// ReactDOM.render(element, document.getElementById("root"));

// const navigasi = (
//   <NavWrapper>
//     <NavLink href="#Contact">Home</NavLink>
//     <NavLink href="#About">About</NavLink>
//     <NavLink href="#Home">Contact</NavLink>
//   </NavWrapper>
// );
// ReactDOM.render(navigasi, document.getElementById("nav"));


