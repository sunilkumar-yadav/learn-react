import React from 'react';

class Checkout extends React.Component {
  state = { name: '' };
  emailRef = null;
  saveData(e) {
    e.preventDefault(); // cancel the default behavior of the event
    console.log('FORM SUBMISSION LOGIC HERE', this.state, this.emailRef.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.saveData(ev)}>
          <div>
            <label>Name</label>
            {/* CONTROLLED */}
            <input
              type="text"
              onBlur={(e) => this.setState({ name: e.target.value })}
            />
            {this.state.name === '' ? <small>Name is required.</small> : null}
          </div>
          <div>
            <label>Email</label>
            {/* UNCONTROLLED */}
            <input type="text" ref={(r) => (this.emailRef = r)} />
            {this.emailRef && this.emailRef.value === '' ? (
              <small>Email is required.</small>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Checkout;
