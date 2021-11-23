import React from "react";

class PureComponents extends React.PureComponent{
//Pure Component make sure if the state hasn't changed it does not calls render
    state={location:"BENGALURU", count:1};
    render() {
        console.log('RENDER CALLED', this.state);
        return (
            <div> 
                {this.state.count > 6 ? "The value is greater than 6":null}
                <br />
                <button onClick={()=> this.setState({location:"BENGALURU"})}>BLR</button>
                <button onClick={()=> this.setState({location:"MUMBAI"})}>BOM</button>
                <button onClick={()=> this.setState({count:this.state.count +1})}>Increment</button>

            </div>

        );
    }

}

export default PureComponents;