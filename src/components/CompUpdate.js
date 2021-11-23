import React from "react";

class CompUpdate extends React.Component{
    state={location:"BENGALURU", count:1};

    //We decide here if we want to invoke render, Similar to pure component 
    //but in this case we provide the implementaion for it
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should Update called", this.props,nextProps, this.state,nextState);
        return this.state.location!=nextState.location || this.state.count==7;
    }

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

export default CompUpdate;