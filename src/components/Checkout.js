import React from 'react';

class Checkout extends React.Component {


    saveData(e) {
        e.preventDefault();
        console.log("Form submission Logic");
    }

    render() {

        return(
            <div>
                <form onSubmit={(ev)=> this.saveData(ev)}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name"></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}
export default Checkout;