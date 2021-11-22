import React from 'react';

class Demo extends React.Component {
  render() {
    const name = 'linus';
    return (
      <div>
        <h1>Demo Component</h1>
        <p>Hello World</p>
        <p>Hello from {name} </p> {/* Interpolation */}
        <p> Hi..! This is {name.toUpperCase()}</p> {/* Function Evaulation */}
        <p> {8 + 9}</p> {/* Expression Evaulation */}
      </div>
    );
  }
}
export default Demo;
